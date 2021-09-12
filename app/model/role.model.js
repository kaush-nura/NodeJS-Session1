//role:{id, role_name, status}

module.exports=(sequelize,Sequelize)=>{
    const role=sequelize.define("role",{

        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        role_name:{
            type:Sequelize.STRING(15),
            unique:false,
            allowNull:false,
        },
        status:{
            type: Sequelize.BOOLEAN,
            allowNull:false,
            unique:false,           
        }
    })

    return role;

}