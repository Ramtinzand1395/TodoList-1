import React , {useContext} from 'react'
//Mui
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
//Component
import TabsContainer from '../tabs/TabsContainer';
//Form
import { useFormik } from "formik";
import { AuthContext } from '../../context/authcontext';
//Icons
import { AccountCircle, PasswordTwoTone} from '@mui/icons-material';
//Axious
//Context
const LoginForm = ({ value, handleChange , mode }) => {
  const { LoginContext } = useContext(AuthContext)
  const initialValues = { email: "", password: "", };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit:(values) => {
      LoginContext(values);
    },
  });
  return (
    <>
      <TabsContainer value={value} handleChange={handleChange} mode={mode} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant='h3' 
          sx={{
            color:mode === "dark" ? "white" : "dark",
            m: "15px"
          }}>
          خوش آمدید
        </Typography>
        <Typography variant='body1'
          sx={{
            color:mode === "dark" ? "white" : "dark",
            m: "15px"
          }}>
          اگر ثبت نام نکردید حالا ثبت نام کنید
        </Typography>
        <form autoComplete='off' onSubmit={formik.handleSubmit} >
          <TextField
            size="small"
            color="info"
            label="ایمیل کاربری "
            name="email"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            value={
              formik.values
                ?.email
            }
            onChange={
              formik.handleChange
            }
            sx={{
              m: "15px"
            }}
          />
          <TextField
            size="small"
            color="info"
            label="پسورد "
            name="password"
            type="password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordTwoTone />
                </InputAdornment>
              ),
            }}
            value={
              formik.values
                ?.password
            }
            onChange={
              formik.handleChange
            }
            sx={{
              m: "15px"
            }}
          />
          <Box sx={{margin:"15px"}}>
            <Button type="submit"color="success" variant="contained"> ورود </Button>
          </Box>
        </form>
      </Box>
    </>

  )
}

export default LoginForm