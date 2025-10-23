import  AdminServices  from '../services/admin.service.js';
import { AdminModel }  from '../models/admin.model';
import { SuccessHandlerUtil } from '../utils';

export class AdminController {

    static async getProducts(req,res,next){
        try {
            const tableName = req.query.tableName
            const data = await AdminServices.getProducts(tableName)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    }
    static async createNewMangalProduct(req,res,next){
       try {
            const mangal = {
                title: req.body.title,
                type:req.body.type,
                price: req.body.price,
                discount: req.body.discount,
                material:req.body.material,
                height:req.body.height,
                width:req.body.width,
                thickness:req.body.thickness,
                overview: req.body.overview,
                length: req.body['length'],
                grill_height:req.body.grill_height,
                ratings: [0,0,0,0,0],
                series:req.body.series,
                status: req.body.status,
            }
            const uploadDir = req.body.uploadDir;
            const files = req.files
            const data = await AdminServices.createNewMangalProduct(mangal, uploadDir, files)
            SuccessHandlerUtil.handleList(res, next, data);
        } catch (error) {
            console.log(error);
        }
    };

    static async createProduct(req, res, next) {
        
        const uploadDir = req.body.uploadDir;
        
        const product ={
            title: req.body.title,
            price: req.body.price,
            discount: req.body.discount,
            overview: req.body.overview,
            size: req.body.size,
            ratings: [0,0,0,0,0],
            status: req.body.status,
        };

        const files = req.files;
        const tableName = req.query.table;

        const data = await AdminServices.createProduct(product,tableName,uploadDir,files)
        SuccessHandlerUtil.handleList(res, next, data)
    };
    
    static async editProduct(req, res, next) {
        try {
            const { tableName, id } = req.body;
            const editData = req.body;

            const data = await AdminServices.editProduct(editData, tableName, id)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);
        }
    };

    static async deleteProduct(req, res, next) {
        try {
            const { tableName, id } = req.body;

            const data = await AdminServices.deleteProduct(tableName, id);
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);
        }
    };

    static async publishProduct(req, res, next) {
        try {
            const {tableName, id} = req.body;
            const editData = req.body;

            const data = await AdminServices.editProduct(editData, tableName, id)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);
        }
    };

    static async unpublishProduct(req, res, next){
        try {
            const { tableName, id } = req.body;
            const editData = req.body;

            const data = await AdminServices.editProduct(editData, tableName, id);
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    static async uploadImage(req, res, next) {
        try {
            const uploadDir = req.body.uploadDir;
            const { tableName, productId } = req.query;
            const file = req.file;
            
            const data = await AdminServices.uploadImage(tableName, productId, uploadDir, file)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);  
        }
    }
    static async deleteImage(req, res, next){
        try {
            const id = req.query.id;

            const data = await AdminServices.deleteImage(id)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);  
        }
    }
    static async getProductImages(req,res,next) {
        try {
            const id = req.query.id;
            const tableName = req.query.tableName;

            const data = await AdminServices.getProductImages(id, tableName);
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    }
    static async getAllMessages(req, res, next) {
        try {
            const data = await AdminServices.getAllMessages()
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    static async deleteMessage(req, res, next) {
        try {
            const id = req.query.id;

            const data = await AdminServices.deleteMessage(id)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    static async sendMessage(req, res, next) {
        try {
            const { name, email, content1, content2, content3 } = req.body
            const data = await AdminServices.sendMessage(name, email, content1, content2, content3)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    static async getPopularProducts(req, res, next) {
        try {
            const tableName = req.query.tableName;

            const data = await AdminServices.getPopularProducts(tableName)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    static async searchProduct(req, res, next) {
        try {
            const keyWord = req.query.keyWord;
            
            const data = await AdminServices.searchProduct(keyWord)
            SuccessHandlerUtil.handleList(res, next, data)
        } catch (error) {
            console.log(error);   
        }
    };

    // static async getFilteredData(req,res,next){
    //     try {
    //         { pricefrom, priceTo, }
    //         const keyWord = req.query.keyWord
    //         const data = await AdminServices.getFilteredData(keyWord)
    //         SuccessHandlerUtil.handleList(res, next, data)
    //     } catch (error) {
    //         console.log(error);   
    //     }
    // }
    
}

