import { Router } from 'express'

export const productRouter = Router()

import { postAddProduct, getAllProducts, deleteProduct, getProducts, getProductById, postEditProduct, deleteProduct } from '../controllers/product.controller.js' 

productRouter.post('/', postAddProduct)
productRouter.get('/', getAllProducts)
productRouter.get('/async', getProducts)
productRouter.get('/id', getProductById)
productRouter.put('/update', putEditProduct)
productRouter.delete('/delete', deleteProduct)
