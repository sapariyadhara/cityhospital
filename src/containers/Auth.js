import React, { useState } from 'react';

function Auth(props) {
    const [authtype, setAuthtype] = useState('login')
    const [fpass , setFpass] = useState('forgotten')
    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                             authtype === 'login' ?  <h2>Login</h2> :  <h2>Signup</h2>
                        }
                     
                        <p>
                            Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                            aliquam eget nibh eu euismod. Donec dapibus blandit quam
                            volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat.
                            Donec lacinia finibus tortor. Curabitur luctus eleifend odio.
                            Phasellus placerat mi et suscipit pulvinar.
                        </p>
                    </div>
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row justify-content-center">
                            <div className="col-md-7 form-group">
                                {
                                    authtype === 'login' ? null : <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                    />
                                }

                                <div className="validate" />
                            </div>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
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
                            authtype === 'login' ?  <button type="submit">Login</button> : 
                            <button type="submit">Signup</button>
                        }
                           
                        </div>

                        {
                            authtype === 'login' ?   <span>Create a new account ?<a href='#' onClick={() => {setAuthtype('signup')}}> Signup</a>
                            <a href='#'> Forgotten Password ?</a>
                            </span>
                             :
                            <span>Already have an account ?<a href='#'  onClick={() => {setAuthtype('login')}}> Login</a> 
                            </span>
                            
                        }
                       
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Auth;