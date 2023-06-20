import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const doctorF = [
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

function Doctor(props) {
    const {id} = useParams()
    const {fData} = useParams()
    const [doctorD , setDoctorD] = useState(doctorF)
    console.log(id ,doctorD );

    
    return (
        <div>
            <h1>Hellow {id}</h1>
        </div>
    );
}

export default Doctor;