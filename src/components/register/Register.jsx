import React from 'react'
import { grey } from "@mui/material/colors";
//Mui
import {Container } from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";
//Img
import man from '../../assets/c.png'
//Component
import Registerform from './Registerform'
const Register = ({ value, handleChange , mode }) => {
  return (
    <Container>
    <Grid container sx={{ backgroundColor: mode === "dark" ? "#282a36" : "white" , height: "60vh" }}>
      <Grid md={5} sx={{ display: { xs: "none", md: "block" }, }} >
        <img src={man} alt="man-taking-note" style={{ width: "100%", height: "100%", }} />
      </Grid>
      <Grid xs={12} sm={12} md={7} lg={7} xl={7}>
        <Registerform value={value} handleChange={handleChange} mode={mode} />
      </Grid>
    </Grid>
    </Container>
  )
}

export default Register