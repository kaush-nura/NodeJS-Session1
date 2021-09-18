const dbConfig=require("../config/db.config");
const Sequelize=require("sequelize");
const { dialect } = require("../config/db.config");

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{

    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

sequelize
.authenticate()
.then(()=>{
    console.log('connected');
})
.catch(err=>{
    console.log('connected fail',err);
})


db.user=require("./user.model")(sequelize ,Sequelize);
db.role=require("./role.model")(sequelize ,Sequelize);
db.userdetail=require("./userdetail.model")(sequelize ,Sequelize);
db.vehicle=require("./vehicle.model")(sequelize ,Sequelize);


//many to many relationship between user -role M:M (create a intermediate table "user_role" it has both id)
db.user.belongsToMany(db.role,{
    through:"user_role",
    as:"roles",
    foreignkey:"role_id",
});

db.role.belongsToMany(db.user,{
    through:"user_role",
    as:"users",
    foreignkey:"user_id",
});

//one to many relatiopnship between user-vehicle 1:M (vehicle table has user table ID field)
db.user.hasMany(db.vehicle);
db.vehicle.belongsTo(db.user);


//one to one relationship user - userdetails 1:1 (userdetails table has user table ID field)
db.user.hasOne(db.userdetail,{});
db.userdetail.belongsTo(db.user);



module.exports=db;