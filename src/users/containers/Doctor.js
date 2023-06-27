import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const doctorF = [
  {
    id: 1,
    name: 'Atha Smith',
    designation: 'Chief Medical Officer',
    description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretiumac.',
    url: '../assets/img/doctors/doctors-1.jpg'
  },
  {
    id: 2,
    name: 'John White',
    designation: 'Anesthesiologist',
    description: 'Aenean ac turpis ante. Mauris velit sapien.',
    url: '../assets/img/doctors/doctors-2.jpg'
  },
  {
    id: 3,
    name: 'Umika Loha',
    designation: 'Cardiology',
    description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
    url: '../assets/img/doctors/doctors-3.jpg'
  },
  {
    id: 4,
    name: 'Daimy Smith',
    designation: 'Neurosurgeon',
    description: ' Morbi vulputate, tortor nec pellentesque molestie, erosnisi ornare purus.',
    url: '../assets/img/doctors/doctors-4.jpg'
  }
]

function Doctor(props) {
  const { id } = useParams()
  const [doctorD, setDoctorD] = useState(doctorF)


  let fData = doctorD.filter((v) => v.id === parseInt(id))


  console.log(fData);


  return (
    <div>
      {
        <div className="col-lg-6">

          <div className="member d-flex align-items-start">
            <div className="pic">
              <img
                src={fData[0].url}
                className="img-doctor"
                alt
              />
            </div>
            <div className="member-info">
              <h4>{fData[0].name}</h4>
              <span>{fData[0].designation}</span>
              <p>
                {fData[0].description}
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
      }
    </div>
  );
}

export default Doctor;