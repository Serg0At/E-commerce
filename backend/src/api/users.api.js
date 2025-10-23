import express from 'express';

import { UsersController } from '../controller';

const router = express.Router();

router.get('/getMangalProduct', UsersController.getMangalProduct) 
router.get('/getOtherProducts', UsersController.getOtherProducts) 
router.get('/getProduct', UsersController.getProduct)

router.post('/createOrderMessage', UsersController.createOrderMessage)
router.post('/createHelpMessage', UsersController.createHelpMessage)

export default router;