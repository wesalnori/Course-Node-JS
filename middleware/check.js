exports.checkSalary = (req , res , next) => {

    if(req.body.name === "wesal"){
        next();
        return
}

    res.json({
    msg : "انت غير مصرح لهده العملية ",
    
    })

}