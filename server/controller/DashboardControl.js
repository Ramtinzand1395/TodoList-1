import Post from "../model/Postmodel.js";

const createPost = async (req, res, next) => {
    try {
        const data = await Post.create({
            ...req.body.values,
            user: req.body.user,
        });
        res.status(201).json({ message: "پست جدید با موفقیت ساخته شد", data: data });
    } catch (err) {
        console.log(err)
        next(err);
    }
};

const getPost = async (req, res, next) => {
    try {
        console.log(req.query)
        const user = req.query.data.data.user.userId
        const post = await Post.find({ user });
        res.status(200).json(post);
    } catch (err) {
        console.log(err)
        next(err);
    }
};

const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndRemove({ _id: req.query.taskId });
        res.status(200).json(post);
    } catch (err) {
        console.log(err)
        next(err);
    }
};
//edite post
const editPost = async (req, res, next) => {
    console.log(req.body,"req")
    console.log(req.body.values.task,"req")
    const post = await Post.findOne({ _id: req.body.modalId });
    
    try {
        if (!post) {
            console.log("not post")
            const error = new Error("پستی با این شناسه یافت نشد");
            error.statusCode = 404;
            throw error;
        } else {
            const Update = await Post.updateOne( {_id: req.body.modalId},{task:req.body.values.task})
            const allpost = await Post.find({ user: req.body.user.userId });
            console.log(allpost,"allpost")

            res.status(200).json({updatedpost : allpost , message: "پست شما با موفقیت ویرایش شد" });
        }
    }catch (err) {
    next(err);
}
};

export { createPost, getPost, deletePost, editPost };
