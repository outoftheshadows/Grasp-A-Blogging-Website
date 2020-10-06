var mongoose=require("mongoose");
var passportlocalmongoose=require("passport-local-mongoose");
var userschema=new mongoose.Schema({
    username:{type:String, unique:true,required:true},
    email:{type:String, unique:true,required:true},
    password:String,
    avatar:String,
    firstname:String,
    lastname:String,
    isVerified: { type: Boolean, default: false },
    secretToken:String,
    resetPasswordToken:String,
    resetPasswordExpires: Date
    
});
userschema.plugin(passportlocalmongoose);
module.exports=mongoose.model("user",userschema);