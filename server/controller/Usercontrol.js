import User from "../model/Usermodel.js"
import  Jwt  from "jsonwebtoken";
import pkg from "bcryptjs";


const createUser = async (req, res , next) => {
    try {
        const { email } = req.body;
        
        const user = await User.findOne({ email });
        if (user) {
            const error = new Error(
                "کاربری با این ایمیل در پایگاه داده موجود است"
                );
                error.statusCode = 422;
                throw error;
        } else {
            await User.create(req.body);  
        }
        res.status(201).json({ message: "عضویت موفقیت آمیز بود" });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

const handleLogin = async (req, res, next) => {
    const maxage = 3 * 24 * 60 * 60 ;
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            const error = new Error("کاربری با این ایمیل یافت نشد");
            error.statusCode = 404;
            throw error;
        }

        const isEqual = await pkg.compare(password, user.password);

        if (isEqual) {
            const token = Jwt.sign(
                {
                    
                    user: {
                        userId: user._id.toString(),
                        email: user.email,
                        name: user.name,
                    },
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: maxage,
                }
            );
            res.cookie("jwt",token,{
                whithCrdentails:true,
                httpOnly:false,
                maxAge: maxage * 1000 ,
            });
            res.status(200).json({token,user: user._id});
        } else {
            const error = new Error("آدرس ایمیل یا کلمه عبور اشتباه است");
            error.statusCode = 422;
            throw error;
        }
    } catch (err) {
        console.log(err)
        next(err);
    }
};




export { createUser , handleLogin  }  ;
