import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';


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
  const theme = useContext(ThemeContext)
  const { id } = useParams()
  const [doctorD, setDoctorD] = useState(doctorF)


  let fData = doctorD.filter((v) => v.id === parseInt(id))


  console.log(fData);


  return (
    <div className={`container1 ${theme.theme}`}>
      {
        <div>

          <div className="pDoctor member d-flex align-items-start">
            <div className="pic1">
              <img
                src={fData[0].url}
                className="img-doctor"
                alt
              />
            </div>
            <div className="member-info1">
              <h4>{fData[0].name}</h4>
              <span style={{fontSize : '24px' ,fontWeight : '500'}}>{fData[0].designation}</span>
              <p style={{marginTop : '10px'}}>
             <h5> About our doctor :</h5> {fData[0].description}
              </p>
              <h5>Professional Memberships</h5>
              <p>
            <p>1. Bombay Orthopaedic Society (BOS)</p>
            <p>2. Association of Spine Surgeons of India (ASSI)</p>
            <p>3. Minimally Invasive Spine Surgeon of India (MISSI)</p>
            <p>4. South Gujarat Orthopaedic Association (SGOA)</p>
            <p>5. Spine Association of Gujarat (SAG)</p>
              </p>
              <div className="social">
                <a target='blank' href='https://twitter.com/i/flow'>
                  <i className="ri-twitter-fill" />
                </a>
                <a target='blank' href='https://www.facebook.com/'>
                  <i className="ri-facebook-fill" />
                </a>
                <a target='blank' href='https://www.instagram.com/'>
                  <i className="ri-instagram-fill" />
                </a>
                <a target='blank' href='https://www.linkedin.com/login'>
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