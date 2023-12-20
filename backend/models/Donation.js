const { Sequelize , DataTypes} = require("sequelize");
const {sequelize}=require("../Configuration/connectDB")
const donations = sequelize.define("donations", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
},
image: {
    type: DataTypes.STRING,
    },
    type:{
        type: DataTypes.STRING,
    },
    name: {
    type: DataTypes.STRING,
    },
    rate:{
        type: DataTypes.DECIMAL,
    },
    description:{
        type: DataTypes.STRING,
    },
    Submitted_by: {
    type: DataTypes.STRING,
    },
    date: {
    type: DataTypes.STRING,
    },
    category:{
    type:DataTypes.STRING,
    },
    submition_type:{
        type:DataTypes.STRING,
    },
    
    }, {timestamps: false ,} // Add this to disable the default timestamps
    );
module.exports=donations;