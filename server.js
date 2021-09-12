const express=require('express');
const cors=require('cors');
const cookieparser=require('cookie-parser');
const db=require("./app/model");


const app=express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());

db.sequelize.sync({})
.then(()=>{
    console.log(`dtabase created successfully`);
})


const PORT =3003;

app.get('/',(req,res)=>{
    res.send("wellcome to my server akaushalya prem");
});

app.listen(PORT,()=>{

console.log(`server is running ${PORT}`);
});