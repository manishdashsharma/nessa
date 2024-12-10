import Joi from 'joi';
import quicker from '../util/quicker.js';
import { EProductCategories } from '../constant/application.js';

export const ValidateAddProduct = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    categories: Joi.string()
        .valid(...Object.values(EProductCategories))
        .required(),
    subcategories: Joi.string()
        .custom((value, helpers) => {
            const { categories } = helpers.state.ancestors[0];
            if (!categories) {
                return helpers.message('`categories` is required before subcategories.');
            }

            const validSubCategories = quicker.subCategoriesMap[categories];
            if (!validSubCategories || !validSubCategories.includes(value)) {
                return helpers.message(`Invalid subcategory for category: ${categories}`);
            }

            return value;
        })
        .required(),
    specification: Joi.object().required(),
    feature: Joi.object().required(),
});

export const validateJoiSchema = (schema, value) => {
    const result = schema.validate(value);
    return {
        value: result.value,
        error: result.error
    };
};