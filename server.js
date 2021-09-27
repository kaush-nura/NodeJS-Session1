const express=require('express');
const cors=require('cors');
const cookieparser=require('cookie-parser');
const db=require("./app/model");
const userRoute=require("./app/route/user.route");
const roleRoute=require("./app/route/role.route");
const vehiRoute=require("./app/route/vehicle.route");
const udetRoute=require("./app/route/userdet.route");
const authRoute=require("./app/route/auth.route");

const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());

db.sequelize.sync({force:false})
.then(()=>{
    console.log(`dtabase created successfully`);
})



const { veryfyToken } = require ('./app/middleware/auth.middleware')


app.use('/user',userRoute)
app.use('/role',roleRoute)
//app.use('/vehi',vehiRoute)
app.use('/vehi',vehiRoute);
app.use('/ud',udetRoute)
app.use('/auth',authRoute)

const PORT =3003;
app.listen(PORT,()=>{
console.log(`server is running ${PORT}`);
});