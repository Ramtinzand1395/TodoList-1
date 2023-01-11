import React from 'react';
import { toast } from 'react-toastify';
//Mui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, TextField, Box } from '@mui/material';
//Form
import { useFormik } from "formik";
import axios from 'axios';
//Icon
import { CheckCircle , SendAndArchive} from '@mui/icons-material';
const EditeTodo = ({ modalId, modalTask , handleClose, setTask , user}) => {
    const initialValues = {
        task:modalTask,
      };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            try {
                const { status, data } = await axios.put("http://localhost:5000/edit-todo", { values , modalId , user })
                if (status === 200) {
                    setTask(data.updatedpost);
                    handleClose()
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
                                mx: "10px",
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "center",
                            }}>
                            <Button type="submit" variant='contained' color="info" sx={{marginX:"10px"}} endIcon={<SendAndArchive />}>
                                تغییر
                            </Button>
                            <Button  type="submit" variant='contained' color="info"  endIcon={<CheckCircle />} >
                                انجام شد
                            </Button>
                        </Box>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
}

export default EditeTodo