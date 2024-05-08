import Joi from "joi";

export default class authValidation {
  static signup = {
    body: Joi.object().keys({
      email: Joi.string().email().max(255).empty().required().messages({
        "string.string": `Email must be a string!`,
        "string.email": `Invalid email!`,
        "string.max": `Email is too long!`,
        "string.empty": `Email is empty!`,
        "any.required": `Email is a required field!`,
      }),
      password: Joi.string()
        .min(6)
        .max(50)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{3,30}$/)
        .required()
        .messages({
          "string.string": `Password must be a string!`,
          "string.min": `Password at least 6 characters!`,
          "string.max": `Password maximum 50 characters`,
          "object.regex": `Your password must have a minimum of 6 characters and include numbers, letters and special characters (!$@%)`,
          "string.empty": `Password is empty!`,
          "any.required": `Password is a required field!`,
        }),
      name: Joi.string().empty().min(1).max(50).required().messages({
        "string.string": `Name must be a string!`,
        "string.min": `Name at least 1 characters!`,
        "string.max": `Name maximum 50 characters`,
        "string.empty": `Name is empty!`,
        "any.required": `Name is a required field!`,
      }),
    }),
  };
  static sendVerifyAccount = {
    body: Joi.object().keys({
      email: Joi.string().email().max(255).empty().required(),
    }),
  };
  static verifyAccount = {
    body: Joi.object().keys({
      email: Joi.string().email().max(255).empty().required(),
      code: Joi.number().required(),
    }),
  };
}
