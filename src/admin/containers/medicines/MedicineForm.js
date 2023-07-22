import React, { useEffect } from 'react';
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

function MedicineForm({ onHandleSubmit, onUpdate }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (onUpdate) {
      formik.setValues(onUpdate)
      handleClickOpen();
    }
  }, [onUpdate])


  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1));
  //current date mathi 1 minus karva

  const medicineSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    expiry: Yup.date()
      .min(nd, "Please Enter Future Date.")
      .required("Please Enter Expire Date"),
      price: Yup.number()
      .min(0)
      .required("Please Enter Amount")
      .typeError("Please Enter Valid Amount"),
      desc: Yup.string()
      .test("pres", "Please Enter Max 100 Word", function (val) {
        let arr = val.split(" ");
        if (arr.length > 100) {
          return false;
        } else {
          return true;
        }
      })
      .required("Please Enter Prescription"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      expiry: "",
      price: "",
      desc: "",
    },
    validationSchema: medicineSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      action.resetForm();
      console.log(values, 'Submit');
      onHandleSubmit(values)
      handleClose();
    },
  });



  const { values, errors, touched, setValues, handleBlur, handleChange, handleSubmit } =
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
                id="name"
                label="Medicine Name"
                type="text"
                fullWidth
                variant="standard"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
              <span style={{ color: "red" }}>
                {errors.name && touched.name ? errors.name : null}
              </span>
              <TextField
                margin="dense"
                id="date"
                label="Expire Date"
                type="date"
                fullWidth
                variant="standard"
                name="expiry"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.expiry}
                setValues={setValues.expiry}
              />
              <span style={{ color: "red" }}>
                {errors.expiry && touched.expiry ? errors.expiry : null}
              </span>
              <TextField
                margin="dense"
                id="price"
                label="Price"
                type="number"
                fullWidth
                variant="standard"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
              />
              <span style={{ color: "red" }}>
                {errors.price && touched.price ? errors.price : null}
              </span>
              <TextField
                margin="dense"
                id="pres"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                name="desc"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.desc}
              />
              <span style={{ color: "red" }}>
                {errors.desc && touched.desc ? errors.desc : null}
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