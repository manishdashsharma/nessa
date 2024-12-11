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
    feature: Joi.array().items(Joi.string()).required(),
});

export const ValidateUpdateProduct = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    categories: Joi.string().optional(),
    subcategories: Joi.string().optional(),
    specification: Joi.object().optional(), 
    feature: Joi.array().items(Joi.string()).optional(), 
    isActive: Joi.boolean().optional(),
    isEnquired: Joi.number().integer().optional(),
});

export const validateJoiSchema = (schema, value) => {
    const result = schema.validate(value);
    return {
        value: result.value,
        error: result.error
    };
};