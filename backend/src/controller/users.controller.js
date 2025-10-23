// Local Modules
import { UsersServices } from '../services';
import { SuccessHandlerUtil } from '../utils';
// import fs from "fs"

export default class UsersController {
  
    static async getMangalProduct(req,res,next){
            try {
                const {type ,limit, offset} = req.query.type
                const data = await UsersServices.getMangalProduct(type,limit, offset)
                SuccessHandlerUtil.handleList(res, next, data)
            } catch (error) {
                console.log(error);   
            }
    }

    static async getOtherProducts(req,res,next){
            try {

                const {tableName ,limit, offset} = req.query          
                const data = await UsersServices.getOtherProducts(tableName ,limit, offset)
                SuccessHandlerUtil.handleList(res, next, data)
            } catch (error) {
                console.log(error);   
            }
    }

    static async getProduct(req,res,next){
            try {

                const {tableName, id} = req.query          
                const data = await UsersServices.getProduct(tableName ,id)
                SuccessHandlerUtil.handleList(res, next, data)
            } catch (error) {
                console.log(error);   
            }
    }

    static async createOrderMessage(req,res,next){
            try {
                const {name, phone} = req.body
                const data = await UsersServices.createOrderMessage(name ,phone)
                SuccessHandlerUtil.handleList(res, next, data)
            } catch (error) {
                console.log(error);   
            }
    }

    static async createHelpMessage(req,res,next){
            try {
                const {name ,phone, email, message} = req.body
                const data = await UsersServices.createHelpMessage(name ,phone, email, message)
                SuccessHandlerUtil.handleList(res, next, data)
            } catch (error) {
                console.log(error);   
            }
    };
}
