
//vehicle:{id, vehi_type, status}
module.exports=(sequelize,Sequelize)=>{
    const vehicle=sequelize.define("vehicle",{

        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        vehi_type:{
            type:Sequelize.STRING(20),
            unique:false,
            allowNull:false,
        },
      
        status:{
            type: Sequelize.BOOLEAN,
            allowNull:false,
            unique:false,
        }
    })

    return vehicle;


}