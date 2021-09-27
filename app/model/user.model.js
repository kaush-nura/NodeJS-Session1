
//user: {id, user_name, password, status}

module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define("user",{

        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:Sequelize.STRING,
            unique:false,
            allowNull:false,
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false,
        }
    })

    return User;


}