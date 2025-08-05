const posts = require ('../helper/posts.json')


exports.GetAllPosts = (req , res) => {

    res.json({
    msg : "hello GetAllPosts",
    state : 1 ,
    data : ['iphone' , 'mac'],
    
    })

}