const db=require('../model');
const UsrDet=db.userdetail;

exports.getAllUsrDet=(req,res)=>{
    //console.log(req);  --get req details
    //res.status(200).send('getAllUsers'); --test req

  // User.findAll({}).then({}).catch({})
  UsrDet.findAll().then(data=>{
        if(data.length !=0){
            res.status(200).send(data);
        }else{
            res.status(404).send('UserDetails are Empty');
        }
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Not found'
        });

    });
}

exports.getSingleUsrDet=(req,res)=>{
    const id = req.params.id;

    UsrDet.findByPk(id)
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

exports.createUsrDet=async (req,res)=>{
    const usrdet = {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,
    }
    await UsrDet.create(usrdet)
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

exports.updateUsrDet= async(req,res)=>{
    const usrdet = {
        name_en: req.body.name_en,
        name_si: req.body.name_si,
        name_ta: req.body.name_ta,
        dob: req.body.dob,
        salary: req.body.salary,
        special_req: req.body.special_req,
    }
    await UsrDet.update(
        usrdet, {
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

exports.deleteUsrDet= async(req,res)=>{

    await UsrDet.destroy({
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