import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as Yup from 'yup'
import { useFormik } from 'formik';


function DepartmentForm({onhandleSubmit , onUpdate}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (onUpdate) {
          formik.setValues(onUpdate)
          handleClickOpen();
        }
      }, [onUpdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const departmentSchema = Yup.object({
        name: Yup.string().required("Please Enter Name"),
        desc: Yup.string().required("Please Enter Description"),
        dpartimg : Yup.mixed().required("Please Upload Image")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            desc: '',
            dpartimg : ''
        },
        validationSchema: departmentSchema,
        enableReinitialize: true,
        onSubmit: (value, action) => {
            action.resetForm();
            console.log(value);
            handleClose()
            onhandleSubmit(value)
        }
    })

    const { errors, values, touched, handleBlur, handleChange, handleSubmit , setFieldValue } = formik
    return (
        <>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Department
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Department</DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>

                        <form onSubmit={handleSubmit}>
                            <TextField
                                margin="dense"
                                id="name"
                                name='name'
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={values.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span style={{color : 'red'}}>{errors.name && touched.name ? errors.name : null}</span>
                            <TextField
                                margin="dense"
                                id="desc"
                                name='desc'
                                label="Dscription"
                                type="desc"
                                fullWidth
                                variant="standard"
                                value={values.desc}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span style={{color : 'red'}}>{errors.desc && touched.desc ? errors.desc : null}</span>
                            <TextField
                                margin="dense"
                                id="dpartimg"
                                name='dpartimg'
                                // label="Department Image"
                                type="file"
                                fullWidth
                                variant="standard"
                                onBlur={handleBlur}
                                onChange={(event) => setFieldValue("dpartimg" , event.target.files[0])}
                            />
                            <span style={{color : 'red'}}>{errors.dpartimg && touched.dpartimg ? errors.dpartimg : null}</span>
                            {
                        values.dpartimg === '' ? '' :  
                         <img src={typeof values.dpartimg === 'string' ? values.dpartimg : URL.createObjectURL(values.dpartimg) } style={{width : '50px' , height : '50px'}}/>

                      }
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Submit</Button>
                            </DialogActions>
                        </form>
                    </DialogContent>



                </Dialog>
            </div>

        </>
    );
}

export default DepartmentForm;