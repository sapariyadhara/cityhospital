import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MedicationIcon from '@mui/icons-material/Medication';
import { useDispatch, useSelector } from "react-redux";
import { addDoctor, getData } from "../../../redux/action/doctor.action";
import { DataGrid } from "@mui/x-data-grid";
import DoctorForm from "./DoctorForm";


export default function Doctor() {

  const dispatch = useDispatch()
  const doctorD = useSelector(state => state.Doctor)

  console.log(doctorD.dData , 'Doctor');

  React.useEffect(() => {
   
      dispatch(getData())
 
   
  } , [])

  const handleSubmit = (data) => {
      console.log(data);
      dispatch(addDoctor(data))
  }




    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 130 },
      { field: "price", headerName: "Price", width: 130 },   
    ];

  return (
    <>
     
    <DoctorForm onhndleSubmit={handleSubmit}/>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
           rows={doctorD.dData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
