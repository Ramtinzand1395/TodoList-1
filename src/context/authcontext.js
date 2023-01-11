import React , {createContext, useEffect, useState} from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const AuthContext = createContext()
const {Provider} = AuthContext

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    //login
    const LoginContext = async(values)=>{
        try {
            const { status } = await axios.post("http://localhost:5000/users/login", values,{withCredentials:true})
            if (status === 200) {
              toast.success("  ورود با موفقیت انجام شد ")
              navigate('/user/main')
            }
          } catch (err) {
            console.log(err)
            if (err.response) {
              toast.error(err.response.data.message)
            } else {
              toast.error("مشکلی رخ داده است!")
            }
          }
    };
    //Register
    const RegisterContext = async(values)=>{
        try {
            const { status } = await axios.post("http://localhost:5000/users/register", values)
            if (status === 201) {
                toast.success(" ثبت نام با موفقیت انجام شد ")
                navigate('/')
            }

        } catch (err) {
            console.log(err)
            if (err.response) {
                toast.error(err.response.data.message)
            } else {
                toast.error("مشکلی رخ داده است!")
            }
        }
    };
    return(
        <Provider
        value={{
            LoginContext,
            RegisterContext,
        }}
        >
        {children}
        </Provider>
    )
};


export { AuthProvider , AuthContext }