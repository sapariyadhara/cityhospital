import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

function DoctorForm({onhandleSubmit , onUpdate}) {
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

    const doctorSchema = Yup.object({
        name: Yup.string()
          .min(2)
          .max(25)
          .matches(/^[a-zA-Z ]+$/, "Please Enter Valid Name")
          .required("Please Enter Name"),
        designation: Yup.string().required("Please Enter Designation"),
        description: Yup.string()
          .test("pres", "Please Enter Max 100 Word", function (val) {
            let arr = val.split(" ");
            if (arr.length > 5) {
              return false;
            } else {
              return true;
            }
          })
          .required("Please Enter Description"),
        imgd: Yup.string().required("Please Add Photo")
        
      });
    
     
    
      const formik = useFormik({
        initialValues: {
          name: "",
          designation: "",
          description: "",
          imgd: ""    
        },
        validationSchema: doctorSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
          let rnd = Math.floor(Math.random() * 10000) 
          let dV = {id : rnd , ...values}
          console.log(dV);
          console.log(values);
          action.resetForm();
          onhandleSubmit(dV);
        },
      });
    
      const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        formik;
    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Doctors
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Doctors</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
                        Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
                        erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam
                        ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu sagittis nec.
                        Phasellus a eleifend elit.
                    </DialogContentText>
                    <form method="post" onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            name="name"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <span style={{ color: "red" }}>
                            {errors.name && touched.name ? errors.name : null}
                        </span>
                        <TextField
                            margin="dense"
                            id="designation"
                            label="Designation"
                            type="text"
                            name="designation"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.designation}
                        />
                        <span style={{ color: "red" }}>
                            {errors.designation && touched.designation
                                ? errors.designation
                                : null}
                        </span>
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            type="text"
                            name="description"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        <span style={{ color: "red" }}>
                            {errors.description && touched.description
                                ? errors.description
                                : null}
                        </span>
                        <br></br>
                        <br></br>
                        <input
                            type="file"
                            id="imgd"
                            name="imgd"
                            // accept="../assets/img/doctors/*"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imgd}
                        ></input>
                        <span style={{ color: "red" }}>
                            {errors.imgd && touched.imgd ? errors.imgd : null}
                        </span>

                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default DoctorForm;