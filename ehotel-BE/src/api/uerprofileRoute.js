const userprofileRepo=require('../repository/userprofileRepository')
const userProfileModel=require('../model/userProfileModel')
const email= "ruti@gmail.com"

exports.userprofile=function(req, res ){
    //email=req.session.email;
    //const password=session.password;
    userprofileRepo.user(email,(err,result)=>{
        if(err)
        res.status(400).json({"code":400,"message":"some thing went wrong"})
        else{
             res.send(result);
        }
        })
}

exports.editAccount=function(req, res, next){
    userprofileRepo.getAllUserInfo(email, (err, result)=>{
        if(err)
        res.status(400).json(err)
        else
        res.json(result)
    })
}
exports.editResume=(req, res, next)=>{
    userprofileRepo.getResume(email,(err, result)=>{
        if(err)
        res.status(400).json(err)
        else
        res.json(result)
    })

}

exports.unsubscribe=(req, res, next)=>{
    let company_id= req.body.company_id
    userprofileRepo.unsubscibeCompany(company_id, (err, result)=>{
        if (err)
        res.status(400).json(err)
        else
        res.send("unsubscribed");
    })
}

exports.saveAccount=(req, res, next)=>{
    let firstName=req.body.first_name
    let lastName=req.body.last_name
    let email=req.body.email
    let phone=req.body.phone_number
    let gender=req.body.gender
    let birthDate=req.body.birth_date
    let cv=req.body.cv
    let user_id=1//req.session.user_id
    userProfileModel.insertAccount(firstName, lastName, gender, phone, email, birthDate, cv,user_id,(err, result)=>{
        if(err)
        res.status(400).json({"code":400,"Error":"Something went wrong!"})
        else
        res.send(result)
    })
}

exports.saveResume=(req, res, next)=>{
    let email="goitom@gmail.com"//req.session.email
    let graduatedFrom=req.body.graduated_from
    let graduatedField=req.body.graduated_field
    let skills=req.body.skills
    let cgpa=req.body.cgpa
    userProfileModel.insertResume(graduatedField, graduatedFrom, cgpa, skills,email, (err, result)=>{
        if(err)
        res.status(400).json({"code":400,"Error":"Something went wrong!"})
        else
        res.send(result)
    }) 
}

