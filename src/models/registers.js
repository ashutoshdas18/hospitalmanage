const mongoose = require("mongoose");
const registersSchema = new mongoose.Schema({
    name:{
        type:String,
    },
   
    email:{
        type:String,

    },
    gender:{
        type:String
    },
    phone:{
        type:Number,
        
    },
    age:{
        type:Number,
        
    },
    password:{
        type:String,

    },
    confirmpassword:{
        type:String,

    }
});
module.exports = mongoose.model("registers", registersSchema)
 