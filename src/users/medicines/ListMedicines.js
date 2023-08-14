import React from "react";
import CoustomCard from "../components/Ui/CoustomCard";
import { Link } from "react-router-dom";


function ListMedicines({ mdata, handleCart1, handleAddToFav }) {
  
  return (
    <>
      {mdata.map((v, i) => {
        return (

          <div class="col-md-6 p-2">
           {/* <Link to={'/Medicine/' + v.id}> */}
              <CoustomCard
                value={v}
                btnVal={'Add to Cart'}
                onClick1={handleCart1}
                handleAddFav={handleAddToFav}
              />
           {/* </Link> */}
          </div>

        );
      })}
    </>
  );
}

export default ListMedicines;
