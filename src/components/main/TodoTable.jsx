import React, { useState } from 'react'
//Mui
import { Box, Button, Modal, Typography } from '@mui/material';
//table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditeTodo from './EditeTodo';
const TodoTable = ({ task, confirm , setTask , user  , mode}) => {

    const [open, setOpen] = useState(false);
    const [modalId, setModalId] = useState();
    const [modalTask, setModalTask] = useState();
    const handleOpen = (id, task) => {
        setOpen(true);
        setModalId(id)
        setModalTask(task)
    }
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <TableContainer component={Paper} dir={"rtl"} sx={{ padding: "5px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>شماره</TableCell>
                        <TableCell align="left">کار ها</TableCell>
                        <TableCell align="left">تاریخ ایجاد</TableCell>
                        <TableCell align="left">ویرایش</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {task && task.map((row, index) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{index + 1}</TableCell>
                            <TableCell component="th" scope="row"> {row.task} </TableCell>
                            <TableCell align="left">{row.creatAt}</TableCell>
                            <TableCell align="left">
                                <Button  sx={{ mx: "5px" }} onClick={() => confirm(row._id, row.task)} variant='contained' color={'error'}> حذف </Button>
                                <Button variant='contained' onClick={()=>handleOpen(row._id, row.task)} color={'success'}> تغییر </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" sx={{color:mode === "dark" ? "#bd93f9" : "#E43D40"}}variant="h6" component="h2">
                                            تغییر {modalTask}
                                        </Typography>
                                        <EditeTodo user={user} setTask={setTask} handleClose={handleClose} modalId={modalId} modalTask={modalTask} />
                                    </Box>
                                </Modal>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TodoTable