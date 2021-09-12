
//userdetail: {id, name_en, name_si, name_ta,  dob, salary, special_req}
module.exports=(sequelize,Sequelize)=>{
    const userdetail=sequelize.define("userdetail",{

        id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            unique:true,
            primaryKey:true,
            autoIncrement:true
        },
        name_en:{
            type:Sequelize.STRING(100),
            unique:false,
            allowNull:false,
        },
        name_si:{
            type:Sequelize.STRING(100),
            unique:false,
            allowNull:false,
        },
        name_ta:{
            type:Sequelize.STRING(100),
            unique:false,
            allowNull:false,
        },
        dob:{
            type:Sequelize.DATEONLY,
            unique:false,
            allowNull:false,
        },
        salary:{
            type:Sequelize.DOUBLE,
            unique:false,
            allowNull:false,
        },
        special_req:{
            type:Sequelize.STRING(100),
            allowNull:true,
            unique:false,
        }
    })

    return userdetail;


}