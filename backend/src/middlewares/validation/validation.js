
import Schemes from "./schemes/validation.schemes";

const schemes = new Schemes();


export default class Validation {
  
  static loginValidate(req, res, next) {
    const { error } = schemes.LoginScheme.validate(req.body, { abortEarly: false });
    if (error) {
      return res
        .status(400)
        .json({
          success: false,
          errors: error.details.map((err) => err.message),
        });
    }
    next();
  }

 
    
}
