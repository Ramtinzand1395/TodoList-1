import React from 'react';
import { grey } from "@mui/material/colors";
import { toast } from 'react-toastify';
//Mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, TextField , Box, Typography } from '@mui/material';
//Form
import { useFormik } from "formik";
import axios from 'axios';
const TodoForm = ({task, setTask , user , mode}) => {
  const initialValues = {
    task: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        const { status , data} = await axios.post("http://localhost:5000/add-todo", {values , user:user.userId})
        if (status === 201) {
          const rernder = [...task , data.data];
          setTask(rernder);
          toast.success("با موفقیت انجام شد ")
        }
      } catch (err) {
        console.log(err)
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("مشکلی رخ داده است!")
        }
      }
    },
  });
  return (
    <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:mode === "dark" ?grey[600] :  "secondary.main" , color:"white"}}>
            کار های خود را وارد کنید
          </Typography>
      <form autoComplete='off' onSubmit={formik.handleSubmit} >
        <Box sx={{
            display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}>
          <TextField
            size="small"
            fullWidth
            color="success"
            label=" وارد کردن کار "
            name="task"
            variant="outlined"
            value={
              formik.values
                ?.task
            }
            onChange={
              formik.handleChange
            }
            sx={{
                mx:"10px",
            }}
          />
                <Button  type="submit" variant='contained' color="success">
                  اضافه کن 
                </Button>
        </Box>
          </form>
        </CardContent>
    </Card>
  );
}

export default TodoForm