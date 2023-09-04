import React, { useContext, useEffect, useState } from "react";
import ListMedicines from "./ListMedicines";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../redux/action/myfav.action";
import { addToCart } from "../../redux/slice/cartSlice";
import { ThemeContext } from "../../Context/ThemeContext";
import { getMedicData } from "../../redux/slice/medicineSlice";

function Medicines(props) {
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch();
  const mediUser = useSelector((state) => state.medicinef);
  const mFav = useSelector((state) => state.myfav)
  console.log(mFav);
  console.log(mediUser, "userM");

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
   
    dispatch(getMedicData());
  }, []);

  const handleChange = (val) => {
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
    dispatch(addToCart({pid : id, qty : 1}))
  }

  const handleAddToFav = (id) => {
    console.log(id ,mFav );
      dispatch(addToFav(id))  
  } 


  return (
    <section id="contact" className={`contact ${theme.theme}`}>
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
          <button type="button" class="btn btn-outline-primary"  style={{backgroundColor : '#ed3c0d' , border : '#fff' , color : '#fff'}}>
            search
          </button>
        </div>
        <div class="row">
          <ListMedicines 
          mdata={filterData.length > 0 ? filterData : mediUser.medic} 
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
