
exports.LoginUser = (req , res) => {

    const username = req.body.username;
    const password = req.body.password;

if(username === "" || password === "" ){
      return res.json({
        msg: "الرجاء ادخال البيانات",
        state : 0 
      })

    }   

    if(username == "وصال"  && password == "12345" ){
      return res.json({
        msg: "  اهلا وسهلا بيكم ",
        state : 1 
      })

    }                                   

      res.json({
        msg: "اسم المستخدم او كلمة المرور غير صحيحة",
        state : 0 
      })

}

exports.SingUpUser = (req , res) => {

 const username = req.body.username;
 const password = req.body.password;
 const email = req.body.email;
 const phone = req.body.phone;

 if(!username || !password  || !email || !phone ){
      return res.json({
        msg: "  Keys الرجاء ادخال ",
        state : 0 
      })

    }   

    if(username.trim() === "" || password.trim() === "" || email.trim() === ""|| phone.trim() === "" ){
      return res.json({
        msg: "الرجاء ادخال البيانات",
        state : 0 
      })

    }                                    

      res.json({
        msg: "تم تسجيل دخولك بنجاح",
        state : 1 
      })
}


exports.GetAllSalarys = (req , res) => {

    res.json({
    state : 1 ,
    salary  : ['1111' , '2222','5555' , '333'],
    
    })

}