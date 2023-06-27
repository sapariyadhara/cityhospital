import React from "react";
// import { Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

function Test2(props) {

  const today = new Date();
  const birthDate = today.toLocaleDateString()
  
  let testSchema = Yup.object({
    fname: Yup.string()
      .required("Please enter first name").test("fname", "Please Enter First name , middel name , Last name", function (val) {
        let arr = val.split(" ");
        if (arr.length === 3) {
          return true;
        } 
       else {
          return false;
        }
      }),
    email: Yup.string()
      .email("please enter valid email")
      .required("Please enter email"),
    password: Yup.string()
      .matches(
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
        "length at least 8 characters"
      )
      .required("Please enter password"),
    confirm_password: Yup.string().test('confirm_password' ,'Password Must Match' , function(val){
        // console.log(this.parent.password);
        if(this.parent.password === val){
            return true
        } else {
          return false
        }

    } )
      // .oneOf([Yup.ref("password"), null], "Password Must Match")
      .required("Please enter confirm password"),
    age: Yup.number().min(0).max(150).required("Please enter Age").typeError('Please enter Number'),
    mobile: Yup.string()
      .max(10)
      .matches(/^[0-9\b]+$/, "Please Enter Only Number")
      .required("Please enter mobile number"),
    dob: Yup.date().max(today ,'Please enter valid date').required("Please enter date of birth"),    
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
    gender: Yup.string()
      .required(),
    hobbies: Yup.array().min(2 , 'Please 2 Select ' )
      .required("Must be selected."),
    tc: Yup.boolean()
      .required("Must be selected.").oneOf([true], "You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
      confirm_password: "",
      age: "",
      mobile: "",
      dob: "",
      add: "",
      country: "",
      gender: "",
      tc: "",
      hobbies: "",
    },
    validationSchema: testSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;
  return (
    <div>
      <form
        style={{
          width: "750px",
          margin: " 0 auto",
          padding: "20px",
          border: "2px solid black",
        }}
        onSubmit={handleSubmit}
        action=""
        method="post"
      >
        <p style={{ margin: "10px" , fontWeight : 700}}>Full Name</p>
        <div className="" style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <input
              type="text"
              name="fname"
              placeholder="Full Name "
              onChange={handleChange}
              value={values.fname}
              onBlur={handleBlur}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.fname && touched.fname ? errors.fname : null}
            </span>
          </div>
        </div>
        <div style={{ margin: "10px" }}>
          <p style={{fontWeight : 700}} >Email Address</p>
          <input
            type="text"
            name="email"
            placeholder="Please Enter Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br></br>
          <span style={{ color: "red" }} className="error">
            {errors.email && touched.email ? errors.email : null}
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <p style={{fontWeight : 700}}>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Please Enter Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.password && touched.password ? errors.password : null}
            </span>
          </div>
          <div style={{ margin: "10px" }}>
            <p style={{fontWeight : 700}}>Confirm Password</p>
            <input
              type="password"
              name="confirm_password"
              placeholder="Please Enter confirm Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.rpassword}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.confirm_password && touched.confirm_password
                ? errors.confirm_password
                : null}
            </span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px" }}>
            <p style={{fontWeight : 700}}>Age</p>
            <input
              type="text"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.age && touched.age ? errors.age : null}
            </span>
          </div>
          <div style={{ margin: "10px" }}>
            <p style={{fontWeight : 700}}>Mobile Number</p>
            <input
              type="text"
              name="mobile"
              maxLength=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.mobile && touched.mobile ? errors.mobile : null}
            </span>
          </div>
          <div style={{ margin: "10px" }}>
            <p style={{fontWeight : 700}}>Date Of Birth </p>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dob}
            />
            <br></br>
            <span style={{ color: "red" }} className="error">
              {errors.dob && touched.dob ? errors.dob : null}
            </span>
          </div>
        </div>
        <div style={{ margin: "10px" }}>
          <p style={{fontWeight : 700}}>Address</p>
          <textarea
            name="add"
            id=""
            cols="50"
            rows="3"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.add}
          ></textarea>
          <br></br>
          <span style={{ color: "red" }} className="error">
            {errors.add && touched.add ? errors.add : null}
          </span>
        </div>
       <div style={{display : 'flex'}}>
       <div style={{ margin: "10px 100px 10px 10px " ,  }}>
         
          <p style={{fontWeight : 700}}>Country</p>
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
          <br></br>
          <span style={{ color: "red" }} className="error">
            {errors.country && touched.country ? errors.country : null}
          </span>
       
        </div>
        <div style={{ margin: "10px 100px 10px 10px " }}>
          <p style={{fontWeight : 700}}>Gender</p>
            <p>
              <input
                type="radio"
                name="gender"
                defaultValue="male"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'male'}
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
                value={'female'}
              />{" "}
              Female
            </p>
           
            <span style={{ color: "red" }} className="error">
              {errors.gender && touched.gender ? errors.gender : null}
            </span>
          </div>
        <div style={{ margin: "10px" }}>
          <p style={{fontWeight : 700}}>
            Hobbies <i>(Optional)</i>
          </p>

          <div className="form-inline">
            <p>
              <input
                type="checkbox"
                name="hobbies"
                defaultValue="sports"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'sports'}
              />{" "}
              Sports
            </p>
            <p>
              <input
                type="checkbox"
                name="hobbies"
                defaultValue="movies"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'movies'}
              />{" "}
              Movies
            </p>
            <p>
              <input
                type="checkbox"
                name="hobbies"
                defaultValue="music"
                onChange={handleChange}
                onBlur={handleBlur}
                value={'music'}
              />{" "}
              Music
            </p>
           
            <span style={{ color: "red" }} className="error">
              {errors.hobbies && touched.hobbies ? errors.hobbies : null}
            </span>
          </div>
        </div>
       </div>
        <div style={{ margin: "10px" }}>
          <span class="error" id="tcErr"></span>
          <div class="form-inline">
            <p style={{fontWeight : 700}}>
              <input  style={{ margin: "0 10px 0 0" }}
                type="checkbox"
                name="tc"
                defaultValue="0"
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

        <div style={{ margin: "10px" }}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Test2;
