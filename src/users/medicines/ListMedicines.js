import React from "react";
import CoustomCard from "../components/Ui/CoustomCard";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


function ListMedicines({ mdata ,handleCart1 ,handleAddToFav}) {
  return (
    <>
      {mdata.map((v, i) => {
        return (
          <div class="col-md-6 p-2">
            <CoustomCard
             value={v}
            btnVal={'Add to Cart'}
            onClick1={handleCart1}
            handleAddFav={handleAddToFav}
              />
          </div>
        );
      })}
    </>
  );
}

export default ListMedicines;
