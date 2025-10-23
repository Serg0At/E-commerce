import express from 'express';
import upload from '../middlewares/multer';
import  {AdminController}  from "../controller/admin.controller";
const router = express.Router();

router.get('/getProducts', AdminController.getProducts) 

router.post('/createNewMangalProduct', upload.array('images', 20), AdminController.createNewMangalProduct) 
router.post('/createProduct', upload.array('image', 20), AdminController.createProduct)
router.post('/editProduct', AdminController.editProduct) 
router.post('/deleteProduct', AdminController.deleteProduct) 
router.post('/publishProduct', AdminController.publishProduct) 
router.post('/unpublishProduct', AdminController.unpublishProduct) 

router.post('/uploadImage', upload.single('image'), AdminController.uploadImage) 
router.post('/deleteImage', AdminController.deleteImage) 
router.get('/getProductImages', AdminController.getProductImages) 

router.get('/getAllMessages', AdminController.getAllMessages) 
router.post('/deleteMessage', AdminController.deleteMessage) 
router.post('/sendMessage', AdminController.sendMessage) 

router.get('/getPopularProducts', AdminController.getPopularProducts) 
router.get('/searchProduct', AdminController.searchProduct)
// router.get('/getFilteredData', AdminController.getFilteredData)

export default router;

// filter sort search