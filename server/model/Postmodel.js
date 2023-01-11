import mongoose from "mongoose";
const postschema = mongoose.Schema({
    task:{
        type:String,
        unique:true,
        require:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    creatAt:{
        type:Date,
        default:Date.now,
    },
});
export default mongoose.models.Post || mongoose.model("Post", postschema);

