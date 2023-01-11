import jwt from "jsonwebtoken";

const authenticated = (req, res, next) => {
    const authHeader = req.cookies.jwt;
    try {
        if (!authHeader) {
            const error = new Error("مجوز کافی ندارید");
            error.statusCode = 401;
            throw error;
        }
        const decodedToken = jwt.verify(authHeader, process.env.JWT_SECRET);

        if (!decodedToken) {
            const error = new Error("شما مجوز کافی ندارید");
            error.statusCode = 401;
            throw error;
        }
        req.userId = decodedToken.user.userId;

        res.json({data:decodedToken})
        next();
    } catch (err) {
        next(err);
    }
};

export {authenticated } ;
