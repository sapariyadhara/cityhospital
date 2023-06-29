import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MedicationIcon from '@mui/icons-material/Medication';

export default function Doctor() {
  const [open, setOpen] = React.useState(false);

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
    imgd: Yup.string().required("Please Add Photo"),
    listlink : Yup.array().min(3 , 'Please 3 Select ' ).required('Please Select Hobbies')
    
  });

 

  const formik = useFormik({
    initialValues: {
      name: "",
      designation: "",
      description: "",
      imgd: "",
      listlink : ""
    },
    validationSchema: doctorSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <div>
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
            {/* <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                onChange={handleChange}
              onBlur={handleBlur}
              value={values.listlink}
              name="listlink"
                label= <MedicationIcon /> 
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                onChange={handleChange}
              onBlur={handleBlur}
              value={values.listlink}
              name="listlink"
                label=<MedicationIcon />
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                onChange={handleChange}
              onBlur={handleBlur}
              value={values.listlink}
              name="listlink"
                label=<MedicationIcon />
              />
               <span style={{ color: "red" }}>
              {errors.listlink && touched.listlink
                ? errors.listlink
                : null}
            </span>
            </FormGroup> */}

            {/* <div style={{ margin: "10px" }}>
              <p style={{ fontWeight: 700 }}>
                Hobbies <i>(Optional)</i>
              </p>

                  <input
                    type="checkbox"
                    name="hobbies"
                    defaultValue="sports"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={
                      <a href="/#">
                        {" "}
                        <i className="ri-twitter-fill" />
                      </a>
                    }
                  />{" "}
                  <a href="/#">
                    {" "}
                    <i className="ri-twitter-fill" />
                  </a>
              
                  <input
                    type="checkbox"
                    name="hobbies"
                    defaultValue="movies"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={
                      <a href="/#">
                        <i className="ri-facebook-fill" />
                      </a>
                    }
                  />{" "}
                  <a href="/#">
                    <i className="ri-facebook-fill" />
                  </a>
              
                  <input
                    type="checkbox"
                    name="hobbies"
                    defaultValue="music"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={
                      <a href="/#">
                        <i className="ri-instagram-fill" />
                      </a>
                    }
                  />{" "}
                  <a href="/#">
                    <i className="ri-instagram-fill" />
                  </a>
              
                  <input
                    type="checkbox"
                    name="hobbies"
                    defaultValue="music"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={
                      <a href="/#">
                        <i className="ri-linkedin-box-fill" />
                      </a>
                    }
                  />{" "}
                  <a href="/#">
                    <i className="ri-linkedin-box-fill" />
                  </a>

                <span style={{ color: "red" }} className="error">
                  {errors.hobbies && touched.hobbies ? errors.hobbies : null}
                </span>
              </div> */}
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
