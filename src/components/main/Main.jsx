import { Box, Button, Container, Fab, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Grid from "@mui/material/Unstable_Grid2";
//IMG
import background from "../../assets/background.png";
import backgroundDarkMode from "../../assets/backgroudblack.jpg";
//Component
import TodoTable from "./TodoTable";
import {
  NightlightOutlined,
  WbSunnyOutlined,
  ExitToAppTwoTone,
} from "@mui/icons-material";
import { blue, yellow } from "@mui/material/colors";
const Main = ({ handelMode, mode }) => {
  const [task, setTask] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [user, setUser] = useState([]);
  const [data, setDelete] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (!cookies.jwt) {
          navigate("/");
        } else {
          const { data, status } = await axios.post(
            "http://localhost:5000/users/todo",
            {},
            { withCredentials: true }
          );
          const { data: task } = await axios.get(
            "http://localhost:5000/add-todo",
            { params: { data } }
          );
          if (!data) {
            removeCookie("jwt");
            navigate("/");
          } else {
            setUser(data.data.user);
            setDelete(data);
          }
          if (task) {
            setTask(task);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const logOut = () => {
    removeCookie("jwt", { path: "/" });
    navigate("/");
  };
  //alert
  const confirm = (taskId, task) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Box
            dir="rtl"
            style={{
              backgroundColor: "#FABEC0",
              border: `1px solid red`,
              borderRadius: "1em",
              padding: "20px",
            }}
          >
            <Typography variant="body1" color={"black"}>
              پاک کردن{" "}
            </Typography>
            <Typography variant="body1" color={"primary.main"}>
              مطمئنی که میخوای {task} رو پاک کنی ؟
            </Typography>
            <Button
              onClick={() => {
                deleteTask(taskId);
                onClose();
              }}
              color={"success"}
              variant="contained"
              sx={{ margin: "10px" }}
            >
              مطمئن هستم
            </Button>
            <Button onClick={onClose} color={"warning"} variant="contained">
              انصراف
            </Button>
          </Box>
        );
      },
    });
  };
  const deleteTask = async (taskId) => {
    const { status } = await axios.delete("http://localhost:5000/add-todo", {
      params: { taskId },
    });
    if (status === 200) {
      const { data: task } = await axios.get("http://localhost:5000/add-todo", {
        params: { data },
      });
      if (!data) {
        removeCookie("jwt");
        navigate("/");
      } else {
        setUser(data.data.user);
      }
      if (task) {
        setTask(task);
      }
    }
  };
  return (
    <>
      <Helmet>
        <title> صفحه اصلی </title>
      </Helmet>
      <Box
        sx={{
          backgroundImage:
            mode === "dark"
              ? `url(${backgroundDarkMode})`
              : `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
          sx={{ backgroundColor: "primary.main", padding: "10px" }}
        >
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
          <Fab color="warning" onClick={logOut} variant="extended">
            <ExitToAppTwoTone sx={{ mr: 1 }} />
            خروج
          </Fab>
        </Box>
        <Container maxWidth="xl">
          <Grid container spacing={4} sx={{ mt: "20px" }}>
            <Grid xs={12} md={6}>
              <TodoForm task={task} setTask={setTask} user={user} mode={mode} />
            </Grid>
            <Grid xs={12} md={6}>
              <TodoTable
                setTask={setTask}
                task={task}
                confirm={confirm}
                user={user}
                mode={mode}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Main;
