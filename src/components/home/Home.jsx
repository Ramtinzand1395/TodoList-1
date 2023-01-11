import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
//MUI
import { Box, Fab } from "@mui/material";
//Img
import background from "../../assets/background.png";
import backgroundDarkMode from "../../assets/backgroudblack.jpg";
//Components
import Register from "../register/Register";
import TabPanel from "../tabs/TabPanel";
import Login from "../login/Login";
import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import { blue, yellow } from "@mui/material/colors";
const Home = ({ handelMode, mode }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Helmet>
        <title> ورود | ثبت نام </title>
      </Helmet>
      <Box
        sx={{
          backgroundImage: mode === "dark" ? `url(${backgroundDarkMode})` : `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          overflow: "hidden",
        }}
        
      >
        <Box sx={{ marginTop: "30px", marginLeft: "10px" }}>
          <Fab
            sx={{
              backgroundColor: mode === "dark" ? yellow[300] : blue[300],
              color: mode === "dark" ? "black" : "white",
              ":hover": {
                backgroundColor: mode === "dark" ? yellow[500] : blue[500],
              },
            }}
            onClick={handelMode}
            variant="extended"
          >
            {mode === "dark" ? (
              <WbSunnyOutlined sx={{ mr: 1 }} />
            ) : (
              <NightlightOutlined sx={{ mr: 1 }} />
            )}
            {mode === "dark" ? "تم روز" : "تم شب"}
          </Fab>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TabPanel value={value} index={0}>
            <Login value={value} handleChange={handleChange} mode={mode} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Register value={value} handleChange={handleChange} mode={mode} />
          </TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default Home;
