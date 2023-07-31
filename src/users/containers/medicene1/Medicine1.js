import React, { useEffect, useState } from "react";
import MedicineList1 from "./MedicineList1";

function Medicine1({ onCartCount }) {
  const [mediData, setMediData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  // const [cardD , setCardD] = useState([])
  // localStorage.getItem("count1")
  useEffect(() => {
    try {
      fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        .then((data) => setMediData(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (val) => {
    console.log(val);
    let mData = mediData;
    console.log(mData, "mData");
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

  const handleAddCart = (id) => {
    console.log("handleAddCart", id, mediData);
    let cardD = JSON.parse(localStorage.getItem("cart"));

    if (cardD === null) {
      console.log("if");
      localStorage.setItem(
        "cart",
        JSON.stringify([
          {
            pid: id,
            qty: 1,
          },
        ])
      );
    } else {
      let fData = cardD.some((v) => v.pid === id);
      if (fData) {
        let index = cardD.findIndex((v) => v.pid === id);
        console.log(index);
        cardD[index].qty++;
        localStorage.setItem("cart", JSON.stringify(cardD));
      } else {
        cardD.push({
          pid: id,
          qty: 1,
        });
        localStorage.setItem("cart", JSON.stringify(cardD));
      }
    }
 onCartCount((prev) => prev + 1);
 
    // localStorage.setItem("count" , JSON.stringify(count)) 
  };

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
          {/* <ListMedicines
            mdata={filterData.length > 0 ? filterData : mediUser}
          />
          <ListMedicines
            mdata={filterData.length > 0 ? filterData : mediUser.medicineD}
            handleCart1={handleCart}
          /> */}

          <MedicineList1 mdData={filterData.length > 0 ? filterData : mediData} onHandleClick={handleAddCart} />
        </div>
      </div>
    </section>
  );
}

export default Medicine1;
