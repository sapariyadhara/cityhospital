import React from "react";
import { Link } from "react-router-dom";

const doctorData = [
  {
    id : 1 ,
    name : 'Atha Smith',
    designation : 'Chief Medical Officer' ,
    description : 'Duis sagittis rutrum neque, quis tincidunt arcu pretiumac.',
    url : '../assets/img/doctors/doctors-1.jpg'
  } ,
  {
    id : 2 ,
    name : 'John White',
    designation : 'Anesthesiologist' ,
    description : 'Aenean ac turpis ante. Mauris velit sapien.',
    url : '../assets/img/doctors/doctors-2.jpg'
  } ,
  {
    id : 3 ,
    name : 'Umika Loha',
    designation : 'Cardiology' ,
    description : 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
    url : '../assets/img/doctors/doctors-3.jpg'
  } ,
  {
    id : 4 ,
    name : 'Daimy Smith',
    designation : 'Neurosurgeon' ,
    description : ' Morbi vulputate, tortor nec pellentesque molestie, erosnisi ornare purus.',
    url : '../assets/img/doctors/doctors-4.jpg'
  }
]

function Doctors(props) {
  
  return (
    <div>
      <main>
        <section id="doctors" className="doctors">
          <div className="container">
            <div className="section-title">
              <h2>Doctors</h2>
              <p>
                Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
                Suspendisse sem risus, molestie vitae arcu et, tincidunt viverra
                erat. Quisque in lectus id nulla viverra sodales in a risus.
                Aliquam ut sem ex. Duis viverra ipsum lacus, ut pharetra arcu
                sagittis nec. Phasellus a eleifend elit.
              </p>
              <Link to={'/Doctor/1'}  >Doctor1</Link>
              <Link to={'/Doctor/2'}  >Doctor2</Link>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="../assets/img/doctors/doctors-1.jpg"
                      className="img-doctor"
                      alt
                    />
                  </div>
                  <div className="member-info">
                    <h4>Atha Smith</h4>
                    <span>Chief Medical Officer</span>
                    <p>
                      Duis sagittis rutrum neque, quis tincidunt arcu pretium
                      ac.
                    </p>
                    <div className="social">
                      <a href>
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href>
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href>
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href>
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="../assets/img/doctors/doctors-2.jpg"
                      className="img-doctor"
                      alt
                    />
                  </div>
                  <div className="member-info">
                    <h4>John White</h4>
                    <span>Anesthesiologist</span>
                    <p>Aenean ac turpis ante. Mauris velit sapien.</p>
                    <div className="social">
                      <a href>
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href>
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href>
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href>
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="../assets/img/doctors/doctors-3.jpg"
                      className="img-doctor"
                      alt
                    />
                  </div>
                  <div className="member-info">
                    <h4>Umika Loha</h4>
                    <span>Cardiology</span>
                    <p>
                      Curabitur luctus eleifend odio. Phasellus placerat mi.
                    </p>
                    <div className="social">
                      <a href>
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href>
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href>
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href>
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="../assets/img/doctors/doctors-4.jpg"
                      className="img-doctor"
                      alt
                    />
                  </div>
                  <div className="member-info">
                    <h4>Daimy Smith</h4>
                    <span>Neurosurgeon</span>
                    <p>
                      Morbi vulputate, tortor nec pellentesque molestie, eros
                      nisi ornare purus.
                    </p>
                    <div className="social">
                      <a href>
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href>
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href>
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href>
                        {" "}
                        <i className="ri-linkedin-box-fill" />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Doctors;
