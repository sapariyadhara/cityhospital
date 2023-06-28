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
    mname : Yup.string().min(2).max(25).matches(/^[a-zA-Z ]+$/  , 'Please Enter Valid Name').required('Please Enter Name'),
    exdate : Yup.date().min(new Date() , 'Please Enter Future Date.').required('Please Enter Expire Date'),
    amount : Yup.number().min(0).required('Please Enter Amount'),
    pres:Yup.string().test('pres' , 'Please Enter Max 100 Word' , function(val){
      let arr = val.split(" ");
      if (arr.length > 5) {
        return false;
      } else {
        return true;
      } 
    }).required('Please Enter Prescription')
  })

  const formik = useFormik({
    initialValues : {
        mname : '',
        exdate : '',
        amount : '',
        pres : ''
    },
    validationSchema : medicineSchema ,
    enableReinitialize : true,
    onSubmit : (values , action) => {
        action.resetForm()
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
          Open Medication Log
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Medication Log</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
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
              <span style={{color : 'red'}}>{errors.mname && touched.mname ? errors.mname : null}</span>
               <TextField
                autoFocus
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
              />
               <span style={{color : 'red'}}>{errors.exdate && touched.exdate ? errors.exdate : null}</span>
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
               <TextField
                autoFocus
                margin="dense"
                id="pres"
                label="Prescription"
                type="text"
                fullWidth
                variant="standard"
                name="pres"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pres}
              />
               <span style={{color : 'red'}}>{errors.pres && touched.pres ? errors.pres : null}</span>
               <Button  onClick={handleClose}>Cancel</Button>
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
