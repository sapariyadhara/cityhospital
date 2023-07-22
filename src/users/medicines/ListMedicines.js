import React from "react";
import CoustomCard from "../components/Ui/CoustomCard";
import { Col } from "reactstrap";

function ListMedicines({ mdata }) {
  return (
    <>
      {mdata.map((v, i) => {
        return (
          <div class="col-md-6 p-2">
            <CoustomCard value={v} />
          </div>
        );
      })}
    </>
  );
}

export default ListMedicines;
