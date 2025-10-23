import  AdminModel  from "../models/admin.model.js";
import  { UsersModel }  from "../models/users.model";

import  deleteFiles  from "../services/delete.file";
import SendEmail from "../middlewares/nodemailer";

import UsersServices  from "../services/users.service.js";
import createArticle from "../middlewares/createArticle.js";

import knex from "knex";
import knexConfigs from "../../knex.configs";

const pg = knex(knexConfigs.development);

import 'dotenv/config';

export default class AdminServices {

    static async getProducts(tableName){
        const data = await AdminModel.getProducts(tableName)  
        data.forEach((product)=>{
            delete product.created_at
        })
        return data
    };

    static async createNewMangalProduct(mangal, uploadDir, files){
        const trx = await pg.transaction()
        try{
            mangal.article = createArticle(mangal.title,mangal.price,mangal.overview)
            const product = await AdminModel.createNewMangalProduct(mangal,trx)
            
            const id = product[0].id;
            const data = [];
            let general;
            
            files.forEach((file,index) => {
                if (index == 0) {
                    general = "1" 
                } else {
                    general = "0"
                }
                data.push({'mangals_id': id, image_path: uploadDir + file.filename, general: general})
            })

            await AdminModel.createProductImages(data, trx);

            const searchData = {
                tableName: 'mangals',
                productId: id, 
                productArticle: mangal.article,
                productTitle: mangal.title

            };

            await AdminModel.createSearchData(searchData, trx);

            await trx.commit();
            return { message: 'Product created successful' };
        }
        catch(err){
            console.log(err);
            await trx.rollback();
        }
    };


    static async editProduct(editData, tableName, id){
        delete editData.tableName
        delete editData.id
        
        await AdminModel.editProduct(editData, tableName, id);
        return {message: 'Product edited successful'};

    };


    static async deleteProduct(tableName, id){
        try {
            const trx = await pg.transaction()
            const confObj = {
            "mangals": "mangals_id",
            "garden_furniture_and_accessories": "garden_id",
            "cauldrons_and_skewers": "cauldrons_id",
            "tandoors": "tandoors_id",
            "grills_without_lids": "grills_id",
            "barbecues": "barbecues_id",
            "shelters_for_grills_and_barbecues": "shelters_id",
        }
        const fkColumn = confObj[tableName]
        const images = await AdminModel.getImages(fkColumn, id, trx);

        await AdminModel.deleteProduct(tableName, id, trx);

        for (const image of images) {
            deleteFiles(image.image_path)
        };

        await trx.commit();
        return { message: 'Product deleted successful' };

        } catch (error) {
            await trx.rollback()
        }
    };

    static async createProduct(product, tableName, uploadDir, files){

        try {
            product.article = createArticle(product.title, product.price, product.overview)
            const trx = await pg.transaction()

            const confObj = {
                "garden_furniture_and_accessories": "garden_id",
                "cauldrons_and_skewers": "cauldrons_id",
                "tandoors": "tandoors_id",
                "grills_without_lids": "grills_id",
                "barbecues": "barbecues_id",
                "shelters_for_grills_and_barbecues": "shelters_id",
            };

            const fkColumn = confObj[tableName]

            const prod = await AdminModel.createProduct(product, tableName, trx);
            const id = prod[0].id
            const data = []
            let general

            files.forEach((file,index)=>{
                if (index == 0) {
                    general = "1" 
                }else{
                    general = "0"
                }
                const image_path = uploadDir + file.filename;
                data.push({[fkColumn] : id, image_path: image_path, general: general });
            });

            await AdminModel.createProductImages(data,trx);

            const searchData = {
                tableName: tableName,
                productId: id, 
                productArticle: prod[0].article,
                productTitle: prod[0].title
            };

            await AdminModel.createSearchData(searchData, trx);

            await trx.commit()
            return { message: 'Product created successful' };

        } catch (error) {
            await trx.rollback()
            console.log(error);
        }
    };


    static async uploadImage(tableName, productId, uploadDir, file){
        const filePath = uploadDir + file.filename

        const confObj = {
            "mangals": "mangals_id",
            "garden_furniture_and_accessories": "garden_id",
            "cauldrons_and_skewers": "cauldrons_id",
            "tandoors": "tandoors_id",
            "grills_without_lids": "grills_id",
            "barbecues": "barbecues_id",
            "shelters_for_grills_and_barbecues": "shelters_id",
        };

        const fkColumn = confObj[tableName]
        const general = 0
        
        await AdminModel.uploadImage(fkColumn,productId,general,filePath)
        return {message: 'Image uploaded successful'}
    };

    static async deleteImage(id){
        try {
            const trx = await pg.transaction()
            const image = await AdminModel.getImageById(id,trx)
            const imagePath = image[0].image_path
            deleteFiles(imagePath)
            await AdminModel.deleteImage(id,trx)
            await trx.commit()
            return {message: 'Image deleted successful'}
        } catch (error) {

            await trx.rollback()
            console.log(error);
        }
    };

    static async getProductImages(id,tableName) {

        const confObj = {
            "mangals": "mangals_id",
            "garden_furniture_and_accessories": "garden_id",
            "cauldrons_and_skewers": "cauldrons_id",
            "tandoors": "tandoors_id",
            "grills_without_lids": "grills_id",
            "barbecues": "barbecues_id",
            "shelters_for_grills_and_barbecues": "shelters_id",
        }
        const fkColumn = confObj[tableName]
        let images = await AdminModel.getProductImages(id,fkColumn);

        return images = images.map((image) => {
            return {id: image.id, image_path: image.image_path}
        })
    };


    static async getAllMessages() {
        return await AdminModel.getAllMessages();
    };


    static async deleteMessage(id) {
        await AdminModel.deleteMessage(id)
        return {message: "Message deleted successful"}
    };


    static async sendMessage(name, email, content1, content2, content3){
        const emailOptions = {user: name, email: email, content1: content1, content2: content2, content3: content3}
        await SendEmail.sendEmail(emailOptions)
        return {message: "Message sent successful"}
    };


    static async getPopularProducts(tableName){
        try {
            const trx = await pg.transaction()
            const randomProducts = await AdminModel.getRandomProducts(tableName, trx);

            const confObj = {
                "mangals": "mangals_id",
                "garden_furniture_and_accessories": "garden_id",
                "cauldrons_and_skewers": "cauldrons_id",
                "tandoors": "tandoors_id",
                "grills_without_lids": "grills_id",
                "barbecues": "barbecues_id",
                "shelters_for_grills_and_barbecues": "shelters_id",
            }

            const fkColumn = confObj[tableName];

            for (const product of randomProducts) {
                const image = await UsersModel.getProductImagesById(fkColumn,product.id, trx)
                product.generalImage = image[0].image_path
            };

            await trx.commit()
            return randomProducts;

        } catch (error) {
            await trx.rollback()
        }        
    };


    // TODO
    static async searchProduct(keyWord){

        try {
           const product = await AdminModel.searchProduct(keyWord)
           
           return await UsersServices.getProduct(product[0].tableName,product[0].productId)

        } catch (error) {
            
        }        
    };
    
}
