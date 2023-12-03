const { Sequelize , DataTypes} = require("sequelize");
const {sequelize}=require("../Configuration/connectDB")
const User = sequelize.define("users", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
name: {
type: DataTypes.STRING,
},
username:{
    type: DataTypes.STRING,
},
city: {
type: DataTypes.STRING,
},
state:{
    type: DataTypes.STRING,
},
zipcode:{
    type: DataTypes.STRING,
},
email: {
type: DataTypes.STRING,
},
phone: {
type: DataTypes.STRING,
},
password:{
type:DataTypes.STRING,
},
typ:{
    type:DataTypes.STRING,
},
occupation:{
    type: DataTypes.STRING,
},
person:{
    type: DataTypes.STRING,

},
typinst:{
    type: DataTypes.STRING,
},

}, {timestamps: false ,} // Add this to disable the default timestamps
);
module.exports=User;