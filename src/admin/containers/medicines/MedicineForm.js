import React from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { json } from "react-router-dom";

function MedicineForm(props) {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true)
        props.setOpen(true);
        
      };
    
      const handleClose = () => {
        setOpen(false)
        props.setOpen(false);
      };

    const d = new Date();
    let nd = new Date(d.setDate(d.getDate() - 1));
    //current date mathi 1 minus karva
  
    const medicineSchema = Yup.object({
      mname: Yup.string().required("Please Enter Name"),
      exdate: Yup.date()
        .min(nd, "Please Enter Future Date.")
        .required("Please Enter Expire Date"),
      amount: Yup.number()
        .min(0)
        .required("Please Enter Amount")
        .typeError("Please Enter Valid Amount"),
      pres: Yup.string()
        .test("pres", "Please Enter Max 100 Word", function (val) {
          let arr = val.split(" ");
          if (arr.length > 5) {
            return false;
          } else {
            return true;
          }
        })
        .required("Please Enter Prescription"),
    });
  
    const formik = useFormik({
      initialValues: {
        mname: "",
        exdate: "",
        amount: "",
        pres: "",
      },
      validationSchema: medicineSchema,
      enableReinitialize: true,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values , 'Submit');
        props.handleAdddata(values)
        handleClose();
      },
    });
  
   
  
    const { values, errors, touched, setValues , handleBlur, handleChange, handleSubmit} =
      formik;
  
    return (
        <>
            <div>
                <Button
                    style={{ marginLeft: "200px" }}
                    variant="outlined"
                    onClick={handleClickOpen}
                >
                    Add Medicine
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Medication Log</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit} >
                            <TextField
                                margin="dense"
                                id="mname"
                                label="Medicine Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                name="mname"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.mname}
                            />
                            <span style={{ color: "red" }}>
                                {errors.mname && touched.mname ? errors.mname : null}
                            </span>
                            <TextField
                                margin="dense"
                                id="date"
                                label="Expire Date"
                                type="date"
                                fullWidth
                                variant="standard"
                                name="exdate"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.exdate}
                                setValues={setValues.exdate}
                            />
                            <span style={{ color: "red" }}>
                                {errors.exdate && touched.exdate ? errors.exdate : null}
                            </span>
                            <TextField
                                margin="dense"
                                id="amount"
                                label="Amount"
                                type="number"
                                fullWidth
                                variant="standard"
                                name="amount"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.amount}
                            />
                            <span style={{ color: "red" }}>
                                {errors.amount && touched.amount ? errors.amount : null}
                            </span>
                            <TextField
                                margin="dense"
                                id="pres"
                                label="Description"
                                type="text"
                                fullWidth
                                variant="standard"
                                name="pres"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.pres}
                            />
                            <span style={{ color: "red" }}>
                                {errors.pres && touched.pres ? errors.pres : null}
                            </span>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </form>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default MedicineForm;