const express = require('express');
const router = express.Router();

const PostsController = require ('../controller/PostsController')
const UsersController = require ('../controller/UsersController')
const ProductController = require ('../controller/ProductController')


router.get ('/add-product' , ProductController.addProdut)
router.post ('/login' , UsersController.LoginUser)
router.post ('/signup' , UsersController.SingUpUser)
router.get ('/posts' , PostsController.GetAllPosts)



module.exports = router