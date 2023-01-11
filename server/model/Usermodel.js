import mongoose from "mongoose";
import pkg from "bcryptjs";
const userschema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    mobile:{
        type:Number,
    },
    password:{
        type:String,
        require:true,
    },
    creatAt:{
        type:Date,
        default:Date.now,
    },
});

userschema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next();

    pkg.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});

export default mongoose.models.User || mongoose.model("User", userschema);

