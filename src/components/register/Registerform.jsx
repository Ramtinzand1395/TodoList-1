import React, { useContext } from 'react'
//Component
import TabsContainer from '../tabs/TabsContainer'
//Mui
import { Box, Typography, TextField, Button, InputAdornment, } from "@mui/material";
//Form
import { useFormik } from "formik";
import { Userschema } from '../../validation/secure/UserSchema'
//Context
import { AuthContext } from '../../context/authcontext';
//Icons
import { AccountCircle, NumbersTwoTone , EmailOutlined, PasswordTwoTone , VerifiedUserOutlined} from '@mui/icons-material';
const Registerform = ({ value, handleChange , mode }) => {
    const { RegisterContext } = useContext(AuthContext)
    const initialValues = {
        name: "",
        lastname: "",
        mobile: "",
        email: "",
        password: "",
        re_password: "",
    };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            RegisterContext(values)
        },
        validationSchema: Userschema,
    });
    return (
        <>
            <TabsContainer value={value} handleChange={handleChange} />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                <Typography variant='h3'  sx={{ m: "15px" ,color:mode === "dark" ? "white" : "dark"}}> ثبت نام </Typography>
                <Typography variant='body1'  sx={{ m: "15px" , color:mode === "dark" ? "white" : "dark"}}>
                    برای استفاده از آپلیکشن اطلاعات زیر را کامل کنید.
                </Typography>
                <form autoComplete="off"  onSubmit={formik.handleSubmit} >
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <TextField
                            required
                            size="small"
                            color="info"
                            label="نام "
                            name="name"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <VerifiedUserOutlined />
                                  </InputAdornment>
                                ),
                              }}
                            helperText={
                                formik.touched.name
                                    ?
                                    formik.errors.name
                                    : null
                            }
                            error={Boolean(
                                formik.touched.name &&
                                formik.errors.name
                            )}
                            value={
                                formik.values?.name
                            }
                            onChange={
                                formik.handleChange
                            }
                            sx={{
                                m: "15px"
                            }}
                        />
                        <TextField
                            required
                            size="small"
                            color="info"
                            label="  نام خانوادگی "
                            name="lastname"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                              }}
                            sx={{
                                m: "15px"
                            }}
                            helperText={
                                formik.touched
                                    .lastname
                                    ? formik
                                        .errors
                                        .lastname
                                    : null
                            }
                            error={Boolean(
                                formik.touched
                                    .lastname &&
                                formik
                                    .errors
                                    .lastname
                            )}
                            value={
                                formik.values
                                    ?.lastname
                            }
                            onChange={
                                formik.handleChange
                            }
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                        <TextField
                            required
                            size="small"
                            color="info"
                            label=" ایمیل "
                            name="email"
                            type="email"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <EmailOutlined />
                                  </InputAdornment>
                                ),
                              }}
                            sx={{
                                m: "15px"
                            }}
                            helperText={
                                formik.touched
                                    .email
                                    ? formik
                                        .errors
                                        .email
                                    : null
                            }
                            error={Boolean(
                                formik.touched
                                    .email &&
                                formik
                                    .errors
                                    .email
                            )}
                            value={
                                formik.values
                                    ?.email
                            }
                            onChange={
                                formik.handleChange
                            }
                        />
                        <TextField
                            size="small"
                            color="info"
                            label=" موبایل "
                            name="mobile"
                            type="number"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <NumbersTwoTone />
                                  </InputAdornment>
                                ),
                              }}
                            sx={{
                                m: "15px"
                            }}
                            helperText={
                                formik.touched
                                    .mobile
                                    ? formik
                                        .errors
                                        .mobile
                                    : null
                            }
                            error={Boolean(
                                formik.touched
                                    .mobile &&
                                formik
                                    .errors
                                    .mobile
                            )}
                            value={
                                formik.values
                                    ?.mobile
                            }
                            onChange={
                                formik.handleChange
                            }
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <TextField
                            size="small"
                            color="info"
                            label="پسورد "
                            name="password"
                            type="password"
                            required
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PasswordTwoTone />
                                  </InputAdornment>
                                ),
                              }}
                            sx={{
                                m: "15px"
                            }}
                            helperText={
                                formik.touched
                                    .password
                                    ? formik
                                        .errors
                                        .password
                                    : null
                            }
                            error={Boolean(
                                formik.touched
                                    .password &&
                                formik
                                    .errors
                                    .password
                            )}
                            value={
                                formik.values
                                    ?.password
                            }
                            onChange={
                                formik.handleChange
                            }
                        />
                        <TextField
                            size="small"
                            color="info"
                            label="پسورد تکرار "
                            name="re_password"
                            type="password"
                            required
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PasswordTwoTone />
                                  </InputAdornment>
                                ),
                              }}
                            sx={{
                                m: "15px"
                            }}
                            helperText={
                                formik.touched
                                    .re_password
                                    ? formik
                                        .errors
                                        .re_password
                                    : null
                            }
                            error={Boolean(
                                formik.touched
                                    .re_password &&
                                formik
                                    .errors
                                    .re_password
                            )}
                            value={
                                formik.values
                                    ?.re_password
                            }
                            onChange={
                                formik.handleChange
                            }
                        />
                    </Box>
                    <Box sx={{ margin: "15px" }}>
                        <Button type="submit" color="success" variant="contained" >
                            ثبت نام
                        </Button>
                    </Box>
                </form>
            </Box>
        </>
    )
}

export default Registerform