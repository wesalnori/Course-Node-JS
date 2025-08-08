const express = require('express');
const router = express.Router();

const PostsController = require ('../controller/PostsController')
const UsersController = require ('../controller/UsersController')
const ProductController = require ('../controller/ProductController')
const check = require ('../middleware/check');

router.get ('/add-product' , ProductController.addProdut)
router.post ('/login' , UsersController.LoginUser)
router.post ('/signup' , UsersController.SingUpUser)
router.get ('/posts' , PostsController.GetAllPosts)
router.post ('/users/salarys' ,check.checkSalary, UsersController.GetAllSalarys)


module.exports = router