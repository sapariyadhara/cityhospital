import React from "react";
// import { Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

function Test2(props) {
    const hobbies = [
        {
            defaultValue : 'sports' ,
        },
        {
            defaultValue : 'movies' ,
        },
        {
            defaultValue : 'music' ,
        }
]

    let testSchema = Yup.object({
        fname: Yup.string()
            .required("Please enter first name").min(2).max(24)
            .matches(/^[a-z]+$/, "Please enter valid name"),
        mname: Yup.string()
            .required("Please enter middel name").min(2).max(24)
            .matches(/^[a-z]+$/, "Please enter valid name"),
        lname: Yup.string()
            .required("Please enter last name").min(2).max(24)
            .matches(/^[a-z]+$/, "Please enter valid name"),
        email: Yup.string()
            .email("please enter valid email")
            .required("Please enter email"),
        password:Yup.string().matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/ , 'length at least 8 characters').required("Please enter password"),
        confirm_password:Yup.string().oneOf([Yup.ref('password'), null] ,'Password Must Match').required("Please enter confirm password"),
        age: Yup.number().min(0).max(150).required("Please enter Age"),
        mobile: Yup.string()
            .max(10)
            .matches(/^[0-9\b]+$/, "Please Enter Only Number")
            .required("Please enter mobile number"),
        dob: Yup.string()
            .required("Please enter date of birth")
            .test("dob", "Must be in present and past.", function (val) {
                let todate = new Date();
                let bdate = new Date(val);
                console.log(bdate < todate);
                if (bdate < todate) {
                    return true;
                } else {
                    return false;
                }
            }),
        add: Yup.string()
            .required("Please enter Address")
            .test("add", "Maximum 5 word allow", function (val) {
                let arr = val.split(" ");
                if (arr.length > 5) {
                    return false;
                } else {
                    return true;
                }
            }),
        country: Yup.string().required(" Must be selected."),
        gender: Yup.boolean()
            .required()
            .oneOf([0, 1])
            .test("gender", "Gender must be selected.", function (val) {
                console.log(val, "val");
            }),
            hobbies: Yup.boolean().required('Must be selected.')
            .test('hobbies' , 'Must 2 be selected.' ,
            function(val){
                
                console.log(hobbies.length , val);
                if((hobbies.length > '2')){
                    return true
                } else {
                    return false
                }
            }
            ),
            tc: Yup.string()
            .required("Must be selected.")
            .test("dob", "Must be selected.", function (val) {
                if (val.checked === true) {
                    return false;
                } else {
                    return true;
                }
            }),
    });

    const formik = useFormik({
        initialValues: {
            fname: "",
            mname: "",
            lname: "",
            email: "",
            password:"",
            confirm_password:"",
            age: "",
            mobile: "",
            dob: "",
            add: "",
            country: "",
            gender: "",
            tc: "",
            hobbies:""
        },
        validationSchema: testSchema,
        onSubmit: values => {
            console.log(values);

        },
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        formik;
    return (
        <div>
            <form onSubmit={handleSubmit} action="" method="post">
                <h2>Application Form</h2>
                <div className="">
                    <p>Full Name</p>
                    <input
                        type="text"
                        name="fname"
                        placeholder="First Name"
                        onChange={handleChange}
                        value={values.fname}
                        onBlur={handleBlur}
                    />

                    <span style={{ color: "red" }} className="error">
                        {errors.fname && touched.fname ? errors.fname : null}
                    </span>
                    <span style={{ color: "red" }} className="error"></span>
                    <br></br>
                    <input
                        type="text"
                        name="mname"
                        placeholder="Middel Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <span style={{ color: "red" }} className="error">
                        {errors.mname && touched.mname ? errors.mname : null}
                    </span>
                    <br></br>
                    <input
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <span style={{ color: "red" }} className="error">
                        {errors.lname && touched.lname ? errors.lname : null}
                    </span>
                </div>
                <div className="">
                    <p>Email Address</p>
                    <input
                        type="text"
                        name="email"
                        placeholder="Please Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.email && touched.email ? errors.email : null}
                    </span>
                </div>
                <div className="">
                    <p>Email Address</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Please Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.password && touched.password ? errors.password : null}
                    </span>
                </div>
                <div className="">
                    <p>Email Address</p>
                    <input
                        type="password"
                        name="confirm_password"
                        placeholder="Please Enter confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.rpassword}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.confirm_password && touched.confirm_password ? errors.confirm_password : null}
                    </span>
                </div>
                <div class="">
                    <p>Age</p>
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.age && touched.age ? errors.age : null}
                    </span>
                </div>
                <div className="">
                    <p>Mobile Number</p>
                    <input
                        type="text"
                        name="mobile"
                        maxLength=" "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.mobile && touched.mobile ? errors.mobile : null}
                    </span>
                </div>
                <div class="">
                    <p>Date Of Birth </p>
                    <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                    />
                    <span style={{ color: "red" }} className="error">
                        {errors.dob && touched.dob ? errors.dob : null}
                    </span>
                </div>
                <div className="">
                    <p>Address</p>
                    <textarea
                        name="add"
                        id=""
                        cols="50"
                        rows="5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.add}
                    ></textarea>

                    <span style={{ color: "red" }} className="error">
                        {errors.add && touched.add ? errors.add : null}
                    </span>
                </div>
                <div className="">
                    <p>Country</p>
                    <select
                        name="country"
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
                    <span style={{ color: "red" }} className="error">
                        {errors.country && touched.country ? errors.country : null}
                    </span>
                </div>
                <div className="">
                    <p>Gender</p>

                    <div className="form-inline">
                        <p>
                            <input
                                type="radio"
                                name="gender"
                                defaultValue="male"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                            />{" "}
                            Male
                        </p>
                        <p>
                            <input
                                type="radio"
                                name="gender"
                                defaultValue="female"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.gender}
                            />{" "}
                            Female
                        </p>
                        <span style={{ color: "red" }} className="error">
                            {errors.gender && touched.gender ? errors.gender : null}
                        </span>
                    </div>
                </div>
                <div className="">
                    <p>
                        Hobbies <i>(Optional)</i>
                    </p>
                    
                    <div className="form-inline">
                        <p>
                            <input type="checkbox" name="hobbies" defaultValue="sports"  onChange={handleChange} onBlur={handleBlur}
                                value={values.hobbies}/>{" "}
                            Sports
                        </p>
                        <p>
                            <input type="checkbox" name="hobbies" defaultValue="movies"  onChange={handleChange} onBlur={handleBlur}
                                value={values.hobbies}/>{" "}
                            Movies
                        </p>
                        <p>
                            <input type="checkbox" name="hobbies" defaultValue="music"  onChange={handleChange} onBlur={handleBlur}
                                value={values.hobbies}/>{" "}
                            Music
                        </p>
                        <span style={{ color: "red" }} className="error">
                            {errors.hobbies && touched.hobbies ? errors.hobbies : null}
                        </span>
                    </div>
                </div>
                <div class="">
                    <span class="error" id="tcErr"></span>
                    <div class="form-inline">
                        <p>
                            <input type="checkbox" name="tc" defaultValue="0"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            value={values.tc}
                            />
                             Terms & Condition
                        </p>
                        <span style={{ color: "red" }} className="error">
                            {errors.tc && touched.tc ? errors.tc : null}
                        </span>
                    </div>
                </div>

                <div className="">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Test2;
