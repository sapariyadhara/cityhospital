import React, { useContext } from "react";
import Button from "../components/Ui/Button/Button";
import { H2, P } from "../components/Ui/Hadding/Haddinds.style";
import { ThemeContext } from "../../Context/ThemeContext";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { aptAdd, aptgetData } from "../../redux/slice/appoinmentSlice";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PhoneIcon from '@mui/icons-material/Phone';


function Appoinment(props) {
  
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch()

  //tabs
  const [value, setValue] = React.useState('1');

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };
  const handleListApt = () => {
    console.log("grerb");
    dispatch(aptgetData())
  }
  const appointmentschema = Yup.object({
    name: Yup.string().min(2).required('Please Enter Name.'),
    email: Yup.string().email('Wrong e-mail format').required('Please Enter Email.'),
    phone: Yup.string().min(10).max(10).required('Please Enter Number.'),
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
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
      department: ''
    },
    validationSchema: appointmentschema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      dispatch(aptAdd(values))
    }
  })
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik
  return (
    <div>
      <main>
        <section id="appointment" className={`appointment ${theme.theme}`}>
          <Box sx={{ width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <TabList style={{marginLeft : '37%'}} onChange={handleChange1} aria-label="lab API tabs example">
                  <Tab icon={<img src="https://th.bing.com/th/id/R.8af91f57f8c241b9eca1fbf064fea0ff?rik=HVrs31QvgGykDQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_374561.png&ehk=epUj5IjRoUtRFb1O5RhoxFF1VfER5aF8NEbMfBv1SAg%3d&risl=&pid=ImgRaw&r=0" 
                  style={{ width: '30px', height: '30px' }}></img>}
                  label="Book Appoinment" 
                  value="1" />
                  <Tab 
                  onClick={handleListApt}
                   icon={<img src="https://cdn1.iconfinder.com/data/icons/finance-solid-icons-vol-2/48/076-1024.png"
                    style={{ width: '30px', height: '30px' }}
                  ></img>} 
                  label="List Appoinment" 
                  value="2" />
                </TabList>
              </Box>
              <TabPanel value="1"> <div className="container">
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
                      <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span>

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
                      <span style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : null}</span>
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
                      <span style={{ color: 'red' }}>{errors.phone && touched.phone ? errors.phone : null}</span>
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
                      <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}</span>
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
                      <span style={{ color: 'red' }}>{errors.department && touched.department ? errors.department : null}</span>
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
                    <span style={{ color: 'red' }}>{errors.message && touched.message ? errors.message : null}</span>
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
              </div></TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Box>

        </section>
      </main>
    </div>
  );
}

export default Appoinment;
