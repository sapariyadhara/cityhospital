import { useFormik} from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

function Auth1(props) {
    const [authtype, setAuthtype] = useState('login')
    const [reset, setReset] = useState(false)

    const formSchema = Yup.object({
        name : Yup.string().required('Please Enter Name.'),
        email : Yup.string().email('Wrong e-mail format').required('Please Enter Email.'),
        password : Yup.string().required('Please Enter Password.'),
    })

  
    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : '',
        } ,
        validateSchema : formSchema ,
        onSubmit : values => {
            console.log(values);
        }
    })
    
    const {values , errors , touched , handleBlur , handleSubmit , handleChange} = formik


    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">

                    <div className="section-title">
                        {
                            reset ? <h2> Reset Password </h2> :
                                authtype === 'login' ? <h2>Login </h2> : <h2>Signup</h2>
                        }
                        {

                            reset  ?
                                <p>   Please enter your email address or mobile number to search for your account.
                                   </p> :
                                <p>
                                     Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                                    aliquam eget nibh eu euismod. Donec dapibus blandit quam
                                    volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                                    Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                                    Phasellus placerat mi et suscipit pulvinar.
                                </p>

                        }


                    </div>
                    <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                        <div className="row justify-content-center">


                            {
                                authtype === 'login' || reset === true ? null :
                                    <div className="col-md-7 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            // data-rule="minlen:4"
                                            // data-msg="Please enter at least 4 chars"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <div className="validate" />
                                        <span>{errors.name}</span>
                                      
                                    </div>
                            }
                            
                            <span className='error'>{authtype === 'signup' ? errors.name && touched.name ? errors.name : null : null}</span>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    // data-rule="email"
                                    // data-msg="Please enter a valid email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <div className="validate" />
                                <span className='error'>{errors.email && touched.email ? errors.email : null}</span>

                            </div>

                            {
                                 reset ? null :  <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <div className="validate" />
                                <span className='error'>{errors.password && touched.password ? errors.password : null}</span>
                            </div> 
                                
                             

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
                                reset === true ? <button type="submit">Submit</button> :
                                    authtype === 'signup' ? <button type="submit">Signup</button> :
                                        <button type="submit">Login</button>
                            }

                        </div>

                        {
                            authtype === 'login' ? <span>Create a new account ?<a href='#' onClick={() => { { setAuthtype('signup'); setReset(false) } }}> Signup</a></span>
                                :
                                <span>Already have an account ?<a href='#' onClick={() => { { setAuthtype('login'); setReset(false) } }}> Login</a>
                                </span>

                        }

                        <div className="">
                            {
                                authtype === 'login' ? <a href='#' onClick={() => { setReset(true) }}> Forgotten Password ?</a> : null
                            }
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Auth1;