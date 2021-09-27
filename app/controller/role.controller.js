const db=require('../model');
const Role=db.role;

exports.getAllRoles=(req,res)=>{
    //console.log(req);  --get req details
    //res.status(200).send('getAllUsers'); --test req

  // User.findAll({}).then({}).catch({})
  Role.findAll().then(data=>{
        if(data.length !=0){
            res.status(200).send(data);
        }else{
            res.status(404).send('Role are Empty');
        }
    }).catch(err=>{
        res.status(500).send({
            message:err.message || 'Not found'
        });

    });
}

exports.getSingleRole=(req,res)=>{
    const id = req.params.id;

    Role.findByPk(id)
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

exports.createRole=async (req,res)=>{
    const role = {
        role_name: req.body.role_name,
        status: req.body.status,
    }
    await Role.create(role)
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

exports.updateRole= async(req,res)=>{
    const role = {
        role_name: req.body.role_name,
        status: req.body.status,
    }
    await Role.update(
        role, {
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

exports.deleteRole= async(req,res)=>{

    await Role.destroy({
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