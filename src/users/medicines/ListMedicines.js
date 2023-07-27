import React from "react";
import CoustomCard from "../components/Ui/CoustomCard";


function ListMedicines({ mdata ,handleCart1 }) {
  return (
    <>
      {mdata.map((v, i) => {
        return (
          <div class="col-md-6 p-2">
            <CoustomCard
             value={v}
            btnVal={'Add to Cart'}
            onClick1={handleCart1}
              />
          </div>
        );
      })}
    </>
  );
}

export default ListMedicines;
