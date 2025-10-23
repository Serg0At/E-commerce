import Joi from "joi";

export default class Schemes {

  LoginScheme = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.email': 'Please enter a valid email address',
      'string.required': 'Email is required',
    }),
    password: Joi.string().min(6).max(50).pattern(/^[A-Za-z0-9!@#$%&*()_\-=+]+$/).required().messages({
      'string.min': 'Password must be at least 6 characters long',
      'string.max': 'Password must be less than 50 characters',
      'string.pattern.base': 'Password can only contain letters, numbers, and special characters (!@#$%&*()_\\-=+)',
      'string.required': 'Password is required',
    })
  });

 
  
}