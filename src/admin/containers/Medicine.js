import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { useFormik } from "formik";

function Medicine(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const medicineSchema = Yup.object({
    name : Yup.string().min(2).max(25).matches(/^[a-zA-Z ]+$/  , 'Please Enter Valid Name').required(),
    medication : Yup.string().required(),
    disease : Yup.string().required(),
    date : Yup.string().required(),
    amount : Yup.number().required()

  })

  const formik = useFormik({
    initialValues : {
        name : '',
        medication:'',
        disease : '',
        date : '',
        amount : ''
    },
    validationSchema : medicineSchema ,
    onSubmit : (values) => {
        console.log(values);
    }
  })

  const {values , errors , touched , handleBlur , handleChange , handleSubmit} = formik

  return (
    <>
      <div>
        <Box height={200} />
        <Button
          style={{ marginLeft: "200px" }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Medication Log</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
              <span style={{color : 'red'}}>{errors.name && touched.name ? errors.name : null}</span>
              <TextField
                autoFocus
                margin="dense"
                id="Medication"
                label="Medication"
                type="text"
                fullWidth
                variant="standard"
                name="medication"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.medication}
              />
               <span style={{color : 'red'}}>{errors.medication && touched.medication ? errors.medication : null}</span>
               <TextField
                autoFocus
                margin="dense"
                id="disease"
                label="Disease"
                type="disease"
                fullWidth
                variant="standard"
                name="disease"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.disease}
              />
               <span style={{color : 'red'}}>{errors.disease && touched.disease ? errors.disease : null}</span>
               <TextField
                autoFocus
                margin="dense"
                id="date"
                label="Date"
                type="date"
                fullWidth
                variant="standard"
                name="date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
              />
               <span style={{color : 'red'}}>{errors.date && touched.date ? errors.date : null}</span>
               <TextField
                autoFocus
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
               <span style={{color : 'red'}}>{errors.amount && touched.amount ? errors.amount : null}</span>
               <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleClose}>
                Submit
              </Button>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </DialogContent>
          <DialogActions>
           
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Medicine;
