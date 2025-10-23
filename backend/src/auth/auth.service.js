import jwt from "jsonwebtoken";
import  {UsersModel}  from "../models/users.model";
import { CryptoUtil } from "../utils";
import knex from "knex";
import knexConfigs from "../../knex.configs";
const pg = knex(knexConfigs.development);

import config from "../config/variables.config";

const { AUTH } = config;

const {
  JWT_ACCESS_SECRET,
  ACCESS_TOKEN_ACTIVE_TIME,
} = AUTH;

export default class AuthService {

  static generateTokens(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: ACCESS_TOKEN_ACTIVE_TIME });
    return accessToken;
  };

  static async validateAccessToken(req, res, next) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Token is missing" });
      }
      const payload = jwt.verify(token, JWT_ACCESS_SECRET);
      req.name = payload.name;
      req.email = payload.email;

      next();
    } catch (error) {
      console.error("Token verification error", error.message);
      return res.status(401).json({ message: "Token is invalid" });
    }
  }

  static async login(email, password) {
    
    // const trx = await pg.transaction();
    try {
      const user = await UsersModel.findByEmail(email);
      if (!user[0]) return { success: true, message: "Invalid email or password!" };
      if (!CryptoUtil.isValidPassword(password, user[0].password)) return { success: true, message: "Invalid email or password!" };
     
      delete user[0].password;
      const payload = {
        role: user[0].role,
        email: user[0].email,
        page: "./mangals.html"
      };
   
      const accessToken = AuthService.generateTokens(payload);
      payload.accessToken = accessToken;
      payload.status = true;
      // await trx.commit();
      return payload;
    } catch (error) {
      // await trx.rollback();
    }
  }


}

