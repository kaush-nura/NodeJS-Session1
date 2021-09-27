require('dotenv').config();
const db=require('../model');
const bcrypt=require('bcrypt');
const saltRounds=10;
const User=db.user;

exports.getAllUsers=(req,res)=>{
    //console.log(req);  --get req details
    //res.status(200).send('getAllUsers'); --test req

  // User.findAll({}).then({}).catch({})
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

exports.getSingleUser=(req,res)=>{
    const id = req.params.id;

    User.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}

exports.createUser=async (req,res)=>{

    const password=req.body.password;
    const encryptPassword=await bcrypt.hash(password,saltRounds);

    const user = { 
        username: req.body.username,
        password: encryptPassword,
    }
    await User.create(user)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}

exports.updateUser= async(req,res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password,
    }
    await User.update(
        user, {
        where: { id: req.body.id, }})
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}

exports.deleteUser= async(req,res)=>{
   // const id = req.params.id;
    await User.destroy({
        where: {
          id: req.params.id}})          
          .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
            {
              message: err.message || 'Not Found'
            }
            );
        });
}