require('dotenv').config();
const db=require('../model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=db.user;

const generateAccessToken =(uid)=>{
    const accessToken=jwt.sign({id:uid},process.env.JWT_ACCESS_SECRET,{expiresIn:process.env.JWT_ACCESS_TIMEOUT});
    return accessToken;
}


exports.signIn=async(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    try{

        await User.findOne({ where: {username:username}})
        .then(data =>{
           // bcrypt.compare(req.body.password, user.password, function(err, res)
            bcrypt.compare(password, data.password, function (err,result){
                if(result==true){
                  
                    const accessToken=generateAccessToken(data.id);
                    res.send({
                        id:data.id,
                        username:data.username,
                        access_token:accessToken,
                    });
                }else{
                    res.status(401)
                    .send({
                        status:false,
                        message:"password is not match"
                    });
                }
            });
        })
        .catch(err=>{
            res.status(404)
            .send({
                status:false,
                message:"username is not found"
            });
        });

    }catch(error){
        res.status(403)
        .send({
            status:false,
            message:"something went to wrong"
        });
    }

}

exports.getAllUsers=(req,res)=>{
    User.findAll().then(data=>{
        if(data.length !=0){
            res.status(200).send(data);
        }else{
            res.status(404).send('User are Empty');
        }
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Not found'
        });

    });
}


