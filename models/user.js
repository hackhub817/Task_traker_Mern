const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        require:true,
    },
    name:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }, 
    list:[
        {
            type:mongoose.Types.ObjectId,
            ref:"List"
        },
    ],
})
userSchema.plugin(uniqueValidator)

module.exports=mongoose.model("User",userSchema);