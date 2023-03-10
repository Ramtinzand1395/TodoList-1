import * as Yup from "yup";

export const Userschema = Yup.object().shape({
    name: Yup.string()
        .required("نام  الزامی می باشد")
        .min(4, "نام  نباید کمتر از 4 کاراکتر باشد")
        .max(255, "نام  نباید بیشتر از 255 کاراکتر باشد"),
    lastname: Yup.string()
        .required("  نام خانوادگی الزامی می باشد")
        .min(4, "  نام خانوادگی نباید کمتر از 4 کاراکتر باشد")
        .max(255, "  نام خانوادگی نباید بیشتر از 255 کاراکتر باشد"),
    mobile: Yup.string()
        .min(4, " شماره موبایل نباید کمتر از 4 کاراکتر باشد")
        .max(255, "شماره موبایل نباید بیشتر از 255 کاراکتر باشد"),
    email: Yup.string()
        .email("ایمیل معتبر نمی باشد")
        .required("ایمیل الزامی می باشد"),
    password: Yup.string()
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد")
        .max(255, "کلمه عبور نباید بیشتر از 255 کاراکتر باشد")
        .required("کلمه عبور الزامی می باشد"),
    re_password: Yup.string()
        .required("تکرار کلمه عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null], "کلمه های عبور یکسان نیستند"),
});
