import React, { useEffect, useState } from 'react';
import MedicineList1 from './MedicineList1';

function Medicine1(props) {
    const [mediData , setMediData] = useState([])

    useEffect(() => {
     
        try{
            fetch("http://localhost:3004/medicines")
            .then((response) => response.json())
            .then((data) => setMediData(data) )
            .catch((error) => console.log( error))
        } catch(error){
            console.log( error)
        }
         
    } , [])

    
  const handleChange = (val) => {
    // console.log(val);
    // let localData = JSON.parse(localStorage.getItem("medicine"));
    // let mData = mediData
    // console.log(mData ,'mData');

    // let fData = mData.filter(
    //   (v) =>
    //     v.name.toLowerCase().includes(val.toLowerCase()) ||
    //     v.price.toString().includes(val) ||
    //     v.expiry.toString().includes(val) ||
    //     v.desc.toLowerCase().includes(val.toLowerCase())
    // );
    // setFilterData(fData);

    // console.log(fData);
  };

 const handleAddCart = (id) => {
    console.log('handleAddCart' , id);
 }

    return (
        <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Medicines1</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          </div>
        </div>
        <div className="container">
          <div
            class="input-group"
            style={{ width: "600px", margin: " 20px auto" }}
          >
            <input
              type="search"
              name="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={(e) => handleChange(e.target.value)}
            />
            <button type="button" class="btn btn-outline-primary">
              search
            </button>
          </div>
          <div class="row">
            {/* <ListMedicines mdata={filterData.length > 0 ? filterData :  mediUser} /> */}
            {/* <ListMedicines 
            mdata={filterData.length > 0 ? filterData : mediUser.medicineD} 
            handleCart1={handleCart}
            /> */}

            <MedicineList1 mdData={ mediData} onHandleClick={handleAddCart}/>

          </div>
        </div>
      </section>
    );
}

export default Medicine1;