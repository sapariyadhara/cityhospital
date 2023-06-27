import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Auth(props) {
    const [authtype, setAuthtype] = useState('login')

    let authObj = {}, initVal = {};
    if (authtype === 'login') {
        authObj = {
            email: Yup.string().email('Wrong e-mail format').required('Please Enter Email.'),
            password: Yup.string().matches(
                /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
                "length at least 8 characters"
              ) .required('Please Enter Password.'),
        }
        initVal = {
            email: '',
            password: '',
        }
    } else if (authtype === 'signup') {
        authObj = {
            name: Yup.string().min(2).required('Please Enter Name.'),
            email: Yup.string().email('Wrong e-mail format').required('Please Enter Email.'),
            password: Yup.string().matches(
                /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
                "length at least 8 characters"
              ).required('Please Enter Password.'),
        }
        initVal = {
            name: '',
            email: '',
            password: '',
        }
    } else {
        authObj = {
            email: Yup.string().email('Wrong e-mail format').required('Please Enter Email.')
        }
        initVal = {
            email: '',
        }
    }

    const formSchema = Yup.object().shape(authObj)



    const formik = useFormik({
        initialValues: initVal,
        validationSchema: formSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            action.resetForm()
            console.log(values);
        },
    })

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = formik
    console.log(errors);

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">

                    <div className="section-title">
                        {
                            authtype === 'login' ? <h2>Login</h2> :
                                authtype === 'forgotten' ? <h2>Reset Password </h2> : <h2>Signup</h2>
                        }
                        {

                            authtype !== 'forgotten' ?
                                <p>  Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                                    aliquam eget nibh eu euismod. Donec dapibus blandit quam
                                    volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                                    Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                                    Phasellus placerat mi et suscipit pulvinar. </p> :
                                <p>
                                    Please enter your email address or mobile number to search for your account.
                                </p>

                        }


                    </div>
                    <form method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                        <div className="row justify-content-center">


                            {
                                authtype === 'login' || authtype === 'forgotten' ? null :
                                    <div className="col-md-7 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />

                                        <span style={{color : 'red'}} className='error'>{errors.name && touched.name ? errors.name : null}</span>
                                    </div>
                            }

                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span style={{color : 'red'}} className='error'>{errors.email && touched.email ? errors.email : null}</span>
                            </div>

                            {

                                authtype === 'login' || authtype === 'signup' ?

                                    <div className="col-md-7 form-group mt-3 mt-md-0">
                                        <>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Your Password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        /> 
                                        <span className='error' style={{color : 'red'}}>{errors.password && touched.password ? errors.password : null}</span>
                                        </>
                                    </div> : null


                            }
                            
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
                            {
                                authtype === 'login' ? <button type="submit">Login</button> :
                                    authtype === 'signup' ? <button type="submit">Signup</button> :
                                        <button type="submit">Submit</button>
                            }

                        </div>

                        {
                            authtype === 'login' ? <span>Create a new account ?<a href='#' onClick={() => { setAuthtype('signup') }}> Signup</a></span>
                                :
                                <span>Already have an account ?<a href='#' onClick={() => { setAuthtype('login') }}> Login</a>
                                </span>

                        }

                        <div className="">
                            {
                                authtype === 'login' ? <a href='#' onClick={() => { setAuthtype('forgotten') }}> Forgotten Password ?</a> : null
                            }
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Auth;