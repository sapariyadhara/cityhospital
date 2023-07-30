import React, { useEffect, useState } from "react";
import ListMedicines from "./ListMedicines";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/action/medicine.action";
import { Row } from "reactstrap";
import { addToCart } from "../../redux/action/cart.action";
import { addToFav } from "../../redux/action/myfav.action";

function Medicines(props) {
  const dispatch = useDispatch();
  const mediUser = useSelector((state) => state.Medicine);
  const mFav = useSelector((state) => state.myfav)
  console.log(mFav);
  // console.log(mediUser, "userM");

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    // let localData = JSON.parse(localStorage.getItem('medicine'))
    // if(localData){
    //     setData(localData)
    // }

    //get data with redux
    dispatch(getData());
  }, []);

  const handleChange = (val) => {
    // console.log(val);
    // let localData = JSON.parse(localStorage.getItem("medicine"));
    let mData = mediUser.medicineD
    console.log(mData ,'mData');

    let fData = mData.filter(
      (v) =>
        v.name.toLowerCase().includes(val.toLowerCase()) ||
        v.price.toString().includes(val) ||
        v.expiry.toString().includes(val) ||
        v.desc.toLowerCase().includes(val.toLowerCase())
    );
    setFilterData(fData);

    console.log(fData);
  };

  const handleCart = (id) => {
    console.log("handleCart" , id);
    dispatch(addToCart(id))
  }

  const handleAddToFav = (id) => {
    console.log(id);
      dispatch(addToFav(id))  
  } 


  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Medicines</h2>
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
          <ListMedicines 
          mdata={filterData.length > 0 ? filterData : mediUser.medicineD} 
          handleCart1={handleCart} 
          handleAddToFav={handleAddToFav}
          favData={mFav}
          />
        </div>
      </div>
    </section>
  );
}

export default Medicines;
