import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Button from "../components/Ui/Button/Button";
import Input from "../components/Ui/Input/Input";
import { H2, P } from "../components/Ui/Hadding/Haddinds.style";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassRequest, loginRequest, signinWithGoogle, signupRequest } from "../../redux/action/auth.action";
import { ThemeContext } from "../../Context/ThemeContext";
import { ButtonBase, CircularProgress } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';




function Auth(props) {
  const theme = useContext(ThemeContext)

  const [authtype, setAuthtype] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const authdata = useSelector(state => state.auth)
  console.log(authdata);



  const continueWithGoogle = () => {
    dispatch(signinWithGoogle())
  }

  const handleLogin = (values) => {
    dispatch(loginRequest({
      data: values,
      callback: (route) => {
        navigate(route);
      }
    }))

  };

  const handleRegister = (values) => {
    dispatch(signupRequest(values))

  };

  const handleForgotten = (values) => {
    dispatch(forgotPassRequest(values))
  };

  let authObj = {},
    initVal = {};
  if (authtype === "login") {
    authObj = {
      email: Yup.string()
        .email("Wrong e-mail format")
        .required("Please Enter Email."),
      password: Yup.string()
        .matches(
          /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
          "length at least 8 characters"
        )
        .required("Please Enter Password."),
    };
    initVal = {
      email: "",
      password: "",
    };
  } else if (authtype === "signup") {
    authObj = {
      name: Yup.string().min(2).required("Please Enter Name."),
      email: Yup.string()
        .email("Wrong e-mail format")
        .required("Please Enter Email."),
      password: Yup.string()
        .matches(
          /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
          "length at least 8 characters"
        )
        .required("Please Enter Password."),
    };
    initVal = {
      name: "",
      email: "",
      password: "",
    };
  } else {
    authObj = {
      email: Yup.string()
        .email("Wrong e-mail format")
        .required("Please Enter Email."),
    };
    initVal = {
      email: "",
    };
  }

  const formSchema = Yup.object().shape(authObj);

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: formSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      console.log(values);
      localStorage.setItem("auth", JSON.stringify(values));
      navigate("/Medicine");
      if (authtype === "login") {
        handleLogin(values);
      } else if (authtype === "signup") {
        handleRegister(values);
      } else if (authtype === "forgotten") {
        handleForgotten(values);
      }
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    formik;
  // console.log(errors);

  return (
    <div>
      <section id="appointment" className={`appointment ${theme.theme}`}>
        <div className="container">
          <div className="section-title">
            {authtype === "login" ? (

              <H2>Login</H2>
            ) : authtype === "forgotten" ? (
              <H2>Reset Password </H2>
            ) : (
              <H2>Signup</H2>
            )}
            {authtype !== "forgotten" ? (
              <P>
                {" "}
                Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                aliquam eget nibh eu euismod. Donec dapibus blandit quam
                volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                Phasellus placerat mi et suscipit pulvinar.{" "}
              </P>
            ) : (
              <P>
                Please enter your email address or mobile number to search for
                your account.
              </P>
            )}
          </div>

          {
            authdata.isloading ?
              <div>
                <div style={{ display: 'block', textAlign: 'center' }}> <CircularProgress /> </div>
                <form
                  method="post"
                  role="form"
                  className="php-email-form"
                  onSubmit={handleSubmit}
                  aria-disabled='true'
                >
                  <div className="row justify-content-center">
                    {authtype === "login" || authtype === "forgotten" ? null : (
                      <div className="col-md-7 form-group">
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          errorText={errors.name && touched.name
                            ? errors.name
                            : null}
                          disabled
                        />

                      </div>
                    )}

                    <div className="col-md-7 form-group mt-3 mt-md-0">
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errorText={errors.email && touched.email
                          ? errors.email
                          : null}
                        disabled
                      />
                    </div>
                    {authtype === "login" || authtype === "signup" ? (
                      <div className="col-md-7 form-group mt-3 mt-md-0">
                        <>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            errorText={errors.password && touched.password
                              ? errors.password
                              : null}
                            disabled
                          />
                        </>
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your appointment request has been sent successfully. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    {authtype === "login" ? (
                      <Button type='primary'>Login</Button>
                    ) : authtype === "signup" ? (
                      <Button type='secendory'>Signup</Button>
                    ) : (
                      <Button type='outlined'>Submit</Button>
                    )}
                  </div>


                  {authtype === "login" ? (
                    <span>
                      Create a new account ?
                      <a
                        href="#"
                        onClick={() => {
                          setAuthtype("signup");
                        }}
                      >
                        {" "}
                        Signup
                      </a>
                    </span>
                  ) : (
                    <span>
                      Already have an account ?
                      <a
                        href="#"
                        onClick={() => {
                          setAuthtype("login");
                        }}
                      >
                        {" "}
                        Login
                      </a>
                    </span>
                  )}

                  <div className="">
                    {authtype === "login" ? (
                      <a
                        href="#"
                        onClick={() => {
                          setAuthtype("forgotten");
                        }}
                      >
                        {" "}
                        Forgotten Password ?
                      </a>
                    ) : null}
                  </div>
                </form>
              </div>


              :
              <form
                method="post"
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit}
              >
                <div className="row justify-content-center">
                  {authtype === "login" || authtype === "forgotten" ? null : (
                    <div className="col-md-7 form-group">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errorText={errors.name && touched.name
                          ? errors.name
                          : null}
                      />
                    </div>
                  )}

                  <div className="col-md-7 form-group mt-3 mt-md-0">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      errorText={errors.email && touched.email
                        ? errors.email
                        : null}
                    />


                  </div>

                  {authtype === "login" || authtype === "signup" ? (
                    <div className="col-md-7 form-group mt-3 mt-md-0">
                      <>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Your Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          errorText={errors.password && touched.password
                            ? errors.password
                            : null}
                        />
                      </>
                    </div>
                  ) : null}
                </div>

                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your appointment request has been sent successfully. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  {authtype === "login" ? (
                    <>
                      <Button type='primary'>Login</Button>
                    </>
                  ) : authtype === "signup" ? (
                    <Button type='primary'>Signup</Button>
                  ) : (
                    <Button type='outlined'>Submit</Button>
                  )}
                </div>

                <div style={{ marginTop: '20px' }} className="text-center">
                  {authtype === "login" ? (
                    <ButtonBase
                      onClick={() => continueWithGoogle()}
                      style={{
                        color: '#ff6337', background: '#fff', border: '2px solid #ff6337'
                        , padding: '10px', borderRadius: '30px', fontWeight: '600'
                      }}

                    > <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                      style={{ width: '30px', height: '30px', marginRight: '10px' }}>
                      </img> Continue With Google</ButtonBase>
                  ) : authtype === "signup" ? (
                    <ButtonBase
                      onClick={() => continueWithGoogle()}
                      style={{
                        color: '#ff6337', background: '#fff', border: '2px solid #ff6337'
                        , padding: '10px', borderRadius: '30px', fontWeight: '600'
                      }}

                    > <img src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"
                      style={{ width: '30px', height: '30px', marginRight: '10px' }}>
                      </img> Continue With Google</ButtonBase>
                  ) : (
                    null
                  )}
                </div>

                {authtype === "login" ? (
                  <span>
                    Create a new account ?
                    <a
                      href="#"
                      onClick={() => {
                        setAuthtype("signup");
                      }}
                    >
                      {" "}
                      Signup
                    </a>
                  </span>
                ) : (
                  <span>
                    Already have an account ?
                    <a
                      href="#"
                      onClick={() => {
                        setAuthtype("login");
                      }}
                    >
                      {" "}
                      Login
                    </a>
                  </span>
                )}

                <div className="">
                  {authtype === "login" ? (
                    <a
                      href="#"
                      onClick={() => {
                        setAuthtype("forgotten");
                      }}
                    >
                      {" "}
                      Forgotten Password ?
                    </a>
                  ) : null}
                </div>
              </form>
          }


        </div>
      </section>
    </div>
  );
}

export default Auth;
