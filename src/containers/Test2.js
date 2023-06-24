import React from 'react';
// import { Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import * as Yup from 'yup'
import { useFormik } from 'formik';


function Test2(props) {
    let testSchema = Yup.object({
        fname: Yup.string().required('Please enter first name').matches(/^[a-z]+$/, 'Please enter valid name'),
        mname: Yup.string().required('Please enter middel name').matches(/^[a-z]+$/, 'Please enter valid name'),
        lname: Yup.string().required('Please enter last name').matches(/^[a-z]+$/, 'Please enter valid name'),
        email: Yup.string().email('please enter valid email').required('Please enter email'),
        age: Yup.number().min(0).max(150).required('Please enter Age'),
        mobile: Yup.string().max(10).matches(/^[0-9\b]+$/, 'Please Enter Only Number').required('Please enter mobile number'),
        dob: Yup.string().required('Please enter date of birth')
            .test('dob', 'Must be in present and past.',
                function (val) {
                    let todate = new Date()
                    let bdate = new Date(val)
                    console.log(bdate < todate);
                    if (bdate < todate) {
                        return true;
                    } else {
                        return false;
                    }
                }
            ),
        add: Yup.string().required('Please enter Address')
            .test('add', 'Maximum 5 word allow',
                function (val) {
                    let arr = val.split(" ")
                    if (arr.length > 5) {
                        return false;
                    } else {
                        return true
                    }
                }
            ),
        country :Yup.string().required(' Must be selected.'),
        gender:Yup.string().required('Must be selected.')
        .test('gender' , 'Must be selected.',
                function(val){
                    console.log("'Must be selected.");
                }
        ),
        tc: Yup.string().required('Must be selected.')
        .test('dob', 'Must be selected.',
            function (val) {
              
               
                if (val.checked === true ) {
                    return false;
                } else {
                    return true;
                }
            }
        ),


    });

    const formik = useFormik({
        initialValues: {
            fname: '',
            mname: '',
            lname: '',
            email: '',
            age:'',
            mobile: '',
            dob: '',
            add: '',
            country: '',
            gender: '',
            tc: ''
        },
        validationSchema: testSchema,
        onSubmit: values => {

        },
    })

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik
    return (
        <div>
            <form name="contactForm" onSubmit={handleSubmit} action="/examples/actions/confirmation.php" method="post">
                <h2>Application Form</h2>
                <div className="">
                    <p>Full Name</p>
                    <input type="text" name="fname" placeholder='First Name' onChange={handleChange} value={values.fname} 
                    onBlur={handleBlur}/>

                    <span style={{ color: 'red' }} className="error" >{errors.fname && touched.fname ? errors.fname : null}</span>
                    <span style={{color : 'red'}} className='error'></span>  
                    <br></br>
                    <input type="text" name="mname" placeholder='Middel Name' onChange={handleChange}   onBlur={handleBlur} />

                    <span style={{ color: 'red' }} className="error" >{errors.mname && touched.mname ? errors.mname : null}</span>
                    <br></br>
                    <input type="text" name="lname" placeholder='Last Name' onChange={handleChange}   onBlur={handleBlur}/>

                    <span style={{ color: 'red' }} className="error" >{errors.lname && touched.lname ? errors.lname : null}</span>
                </div>
                <div className="">
                    <p>Email Address</p>
                    <input type="text" name="email" placeholder='Please Enter Email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <span style={{ color: 'red' }} className="error" >{errors.email && touched.email ? errors.email : null}</span>
                </div>
                <div class="">
                    <p>Age</p>
                    <input type="text" name="age" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}/>
                    <span style={{ color: 'red' }} className="error" >{errors.age && touched.age ? errors.age : null}</span>
                </div>
                <div className="">
                    <p>Mobile Number</p>
                    <input type="text" name="mobile" maxLength=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                    />
                    <span style={{ color: 'red' }} className="error" >{errors.mobile && touched.mobile ? errors.mobile : null}</span>
                </div>
                <div class="">
                    <p>Date Of Birth </p>
                    <input type="date" name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                    />
                    <span style={{ color: 'red' }} className="error" >{errors.dob && touched.dob ? errors.dob : null}</span>
                </div>
                <div className="">
                    <p>Address</p>
                    <textarea name="add" id="" cols="50" rows="5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.add}
                    ></textarea>


                    <span style={{ color: 'red' }} className="error" >{errors.add && touched.add ? errors.add : null}</span>
                </div>
                <div className="">
                    <p>Country</p>
                    <select name="country" 
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.country}
                    >
                        <option value={0}>Select</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                    </select>
                    <span style={{ color: 'red' }} className="error" >{errors.country && touched.country ? errors.country : null}</span>
                </div>
                <div className="">
                    <p>Gender</p>
                    <span className="error" id="genderErr" />
                    <div className="form-inline">
                        <p><input type="radio" name="gender" defaultValue="male"  /> Male</p>
                        <p><input type="radio" name="gender" defaultValue="female" /> Female</p>
                        <span style={{ color: 'red' }} className="error" >{errors.gender && touched.gender ? errors.gender : null}</span>
                    </div>
                </div>
                <div className="">
                    <p>Hobbies <i>(Optional)</i></p>
                    <span className="error" id="hobbyErr" />
                    <div className="form-inline">
                        <p><input type="checkbox" name="hobbies" defaultValue="sports" /> Sports</p>
                        <p><input type="checkbox" name="hobbies" defaultValue="movies" /> Movies</p>
                        <p><input type="checkbox" name="hobbies" defaultValue="music" /> Music</p>
                    </div>
                </div>
                <div class="">

                    <span class="error" id="tcErr"></span>
                    <div class="form-inline">
                        <p><input type="checkbox" name="tc" value="0"  /> Terms & Condition</p>

                    </div>
                </div>

                <div className="">
                    <input type="submit" defaultValue="Submit" />
                </div>
            </form>

        </div>
    );
}


export default Test2;