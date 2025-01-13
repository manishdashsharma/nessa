import Joi from 'joi';
import quicker from '../util/quicker.js';
import { EBestSuitedFor, EProductCategories, ESubject } from '../constant/application.js';

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
                return helpers.message('`categories` is required before `subcategories`.');
            }

            const validSubCategories = quicker.subCategoriesMap[categories];
            if (!validSubCategories || !validSubCategories.includes(value)) {
                return helpers.message(`Invalid subcategory '${value}' for category: '${categories}'.`);
            }

            return value;
        })
        .required(),
    specification: Joi.object().required(),
    feature: Joi.object({
        highlighted: Joi.array().items(Joi.string()).required(),
        useCases: Joi.array().items(
            Joi.object({
                title: Joi.string().required(),
                description: Joi.string().allow(''),
                imageUrl: Joi.string().uri().allow('') 
            })
        ).required()
    }).required(),
    productImageUrl: Joi.string().uri().required(),
    brochureUrl: Joi.string().uri().required(),
    applicationImageUrls: Joi.array().items(Joi.string().uri()).required(),
    bestSuitedFor: Joi.array()
    .items(Joi.string().valid(...Object.values(EBestSuitedFor)))
    .required(),
    SKUId: Joi.string().required()
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

export const ValidateAddUtilsData = Joi.object({
    title: Joi.string().required(),
    utilsData: Joi.object().required(),
})

export const ValidateUpdateUtilsData = Joi.object({
    title: Joi.string().optional(), 
    utilsData: Joi.object().required().messages({
        'object.base': 'utilsData must be an object.',
        'any.required': 'utilsData is required.'
    }) 
});

export const ValidateContactUs = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    message: Joi.string().required(),
    subject: Joi.string().valid(...Object.values(ESubject)).required(),
    fileLink: Joi.string().uri().required(),
    companyName: Joi.string().required(),
})

export const ValidateUpdateContactUs = Joi.object({
    isRead: Joi.boolean().optional(),
    isSpam: Joi.boolean().optional(),
    isSolved: Joi.boolean().optional(),
})

export const ValidateSupportEnquiry = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    message: Joi.string().required(),
    fileLink: Joi.string().uri().required(),
    companyName: Joi.string().required(),
    productName: Joi.string().required(),
    productSKUId : Joi.string().required(),
})

export const ValidateUpdateSupportEnquiry = Joi.object({
    isRead: Joi.boolean().optional(),
    isSpam: Joi.boolean().optional(),
    isSolved: Joi.boolean().optional(),
})

export const ValidateLogin = Joi.object({
    emailAddress: Joi.string().email().trim().required(),
    password: Joi.string().min(8).max(24).trim().required(),
})

export const ValidateSoulution = Joi.object({
    title: Joi.string().required(),
    subTitle: Joi.string().required(),
    description:Joi.string().required(),
    categories: Joi.string()
        .valid(...Object.values(EProductCategories))
        .required(),
    // subcategories: Joi.string()
    //     .custom((value, helpers) => {
    //         const { categories } = helpers.state.ancestors[0];
    //         if (!categories) {
    //             return helpers.message('`categories` is required before `subcategories`.');
    //         }

    //         const validSubCategories = quicker.subCategoriesMap[categories];
    //         if (!validSubCategories || !validSubCategories.includes(value)) {
    //             return helpers.message(`Invalid subcategory '${value}' for category: '${categories}'.`);
    //         }

    //         return value;
    //     })
    //     .required(),
    subcategories: Joi.string().required(),
    thumbnail:Joi.string().uri().required(),
    solutionImageUrl: Joi.string().uri().required(),
    relatedProduct: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            application: Joi.string().allow(''),
            products: Joi.array().items(
                Joi.object({
                    productId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
                    name: Joi.string().required(),
                    description: Joi.string().required()
                })
            ).required()
        })
    )
})

export const ValidateUpdateSolution = Joi.object({
    title: Joi.string().optional(),
    subTitle: Joi.string().optional(),
    description: Joi.string().optional(),
    subcategories: Joi.string().optional(),
    thumbnail: Joi.string().uri().optional(),
    solutionImageUrl: Joi.string().uri().optional(),
    relatedProduct: Joi.array().items(
        Joi.object({
            title: Joi.string().optional(),
            application: Joi.string().optional(),
            products: Joi.array().items(
                Joi.object({
                    productId: Joi.string().required(),
                    name: Joi.string().optional(),
                    description: Joi.string().optional(),
                    _id: Joi.string().optional(),
                })
            ).optional(),
            _id: Joi.string().optional()
        })
    ).optional()
});

export const ValidateTestimonial = Joi.object({
    name: Joi.string().required(),
    company: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    isPublished: Joi.boolean().optional()
})


export const ValidateProjects = Joi.object({
    categories: Joi.string().required(),
    projects: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            place: Joi.string().required(),
            imageUrl: Joi.string().uri().required(),
            isPublished: Joi.boolean().optional()
        })
    )
})

export const validateJoiSchema = (schema, value) => {
    const result = schema.validate(value);
    return {
        value: result.value,
        error: result.error
    };
};