import { useFormik } from 'formik';
import React, { useContext } from 'react';
import * as Yup from 'yup'
import { H2, H4, I, P } from '../components/Ui/Hadding/Haddinds.style';
import { ThemeContext } from '../../Context/ThemeContext';


function Contect1(props) {

    const theme = useContext(ThemeContext)

    let contact1Schema = Yup.object({
        name: Yup.string().min(2).required('Please enter name').matches(/^[a-z]+$/ , 'Please enter valid name'),
        email: Yup.string().email('please enter valid email').required('Please enter email'),
        subject: Yup.string().required('Please enter subject'),
        message: Yup.string().required('Please enter message')
        .test('message' , 'Maximum 5 word allow',
        function(val){
            let arr = val.split(" ")
            if(arr.length > 5){
                return false ;
            } else {
                return true
            }
        }
        ),
      });

      const formik = useFormik({
        initialValues : {
            name: '',
            email: '',
            subject: '',
            message :''
        },
           validationSchema : contact1Schema ,
           onSubmit: values => {
            console.log(values);
          },
      })

      const {values , errors , touched , handleBlur , handleChange , handleSubmit } = formik

    return (
        <div>
            <main>
            <section id="contact" className={`contact1 ${theme.theme}`}>
                    <div className="container">
                        <div className="section-title">
                            <H2>Contact</H2>
                            <P>
                                Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                                aliquam eget nibh eu euismod. Donec dapibus blandit quam
                                volutpat sollicitudin. Aenean ac turpis ante. Mauris velit
                                sapien, aliquet aliquet rhoncus quis, luctus at neque. Mauris
                                sit amet massa sed orci vehicula facilisis.
                            </P>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-5" >
                            <div className="col-lg-4">
                                <div className="info" style={{padding : '20px' ,  border : '2px solid #fff'}}>
                                    <div className="address">
                                        <I className="bi bi-geo-alt" />
                                        <H4>Location:</H4>
                                        <P> F-505, Inovative Plazza New Delhi, India</P>
                                    </div>
                                    <div className="email">
                                        <I className="bi bi-envelope" />
                                        <H4>Email:</H4>
                                        <P>cityhospital@example.com</P>
                                    </div>
                                    <div className="phone">
                                        <I className="bi bi-phone" />
                                        <H4>Call:</H4>
                                        <P>+91 9988776655</P>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-5 mt-lg-0" style={{padding : '20px' ,  border : '2px solid #fff'}}>
                                <form
                                    action
                                    method="post"
                                    role="form"
                                    className="php-email-form"
                                    onSubmit={handleSubmit}
                                    
                                >
                                    <div className="row">
                                        <div className="col-md-6 form-group">
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
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
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
                                           <span style={{color : 'red'}}  className='error'>{errors.email && touched.email ? errors.email : null}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                      
                                        />
                                        <span style={{color : 'red'}}  className='error'>{errors.subject && touched.subject ? errors.subject : null}</span>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows={5}
                                            placeholder="Message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                         
                                          
                                        />
                                        <span style={{color : 'red'}}  className='error'>{errors.message && touched.message ? errors.message : null}</span>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );


}

export default Contect1;