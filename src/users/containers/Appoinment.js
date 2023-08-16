import React, { useContext } from "react";      
import Button from "../components/Ui/Button/Button";
import { H2, P } from "../components/Ui/Hadding/Haddinds.style";
import { ThemeContext } from "../../Context/ThemeContext";
import * as Yup from 'yup';
import { useFormik } from "formik";

function Appoinment(props) {
  const theme = useContext(ThemeContext)
  const appointmentschema = Yup.object({
      name : Yup.string().min(2).required('Please Enter Name.'),
      email : Yup.string().email('Wrong e-mail format').required('Please Enter Email.'),
      phone : Yup.string().min(10).max(10).required('Please Enter Number.'),
      date: Yup.date().min(new Date()).required('Please Enter Date.'),
      department: Yup.string().required(" Must be selected."),
      message: Yup.string()
      .required("Please enter Address")
      .test("message", "Maximum 5 word allow", function (val) {
        let arr = val.split(" ");
        if (arr.length > 5) {
          return false;
        } else {
          return true;
        }
      }),
  })
  const formik = useFormik({
    initialValues : {
      name : '',
      email : '',
      phone : '',
      date : '',
      message : '',
      department : ''
    },
    validationSchema : appointmentschema,
    enableReinitialize : true ,
    onSubmit:(values)=>{
        console.log(values);
    }
  })
  const {values , errors , touched , handleBlur , handleChange , handleSubmit} =  formik
  return (
    <div>
      <main>
        <section id="appointment" className={`appointment ${theme.theme}`}>
          <div className="container">
            <div className="section-title">
              <H2>Make an Appointment</H2>
              <P>
                Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                aliquam eget nibh eu euismod. Donec dapibus blandit quam
                volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                Phasellus placerat mi et suscipit pulvinar.
              </P>
            </div>
            <form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                 <span style={{color : 'red'}}>{errors.name && touched.name ? errors.name : null}</span>

                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                   <span style={{color : 'red'}}>{errors.email && touched.email ? errors.email : null}</span>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                   <span style={{color : 'red'}}>{errors.phone && touched.phone ? errors.phone : null}</span>
                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="date"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    data-msg="Please enter at least 4 chars"
                    value={values.date}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <span style={{color : 'red'}}>{errors.date && touched.date ? errors.date : null}</span>
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    value={values.department}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <div className="validate" />
                  <span style={{color : 'red'}}>{errors.department && touched.department ? errors.department : null}</span>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <span style={{color : 'red'}}>{errors.message && touched.message ? errors.message : null}</span>
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
              </div>
              <div className="text-center">
                <Button type="submit">Make an Appointment</Button>
              {/* <StyledButton type="submit"></StyledButton> */}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Appoinment;
