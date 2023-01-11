import React from 'react'
import { grey } from "@mui/material/colors";
//MUI
import { Container } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2";
//Img
import man from '../../assets/man-taking-note.png'
//Components
import LoginForm from './LoginForm';
const Login = ({ value, handleChange , mode }) => {
  return (
    <Container>
            <Grid container sx={{ backgroundColor: mode === "dark" ? "#282a36" : "white" , height: "60vh" }}>
              <Grid md={8} sx={{ display: { xs: "none", md: "block"}}}>
                <img src={man} alt="man-taking-note" style={{ width: "100%",height: "100%"}}/>
              </Grid>
              <Grid xs={12} sm={12}md={4} lg={4} xl={4}>
                <LoginForm value={value} handleChange={handleChange} mode={mode} />
              </Grid>
            </Grid>
          </Container>
  )
}

export default Login