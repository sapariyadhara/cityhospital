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
import { addDoctor, deletDoctor, getData, updateData } from "../../../redux/action/doctor.action";
import { DataGrid } from "@mui/x-data-grid";
import DoctorForm from "./DoctorForm";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CircularProgress from '@mui/material/CircularProgress';


export default function Doctor() {
  const [update, setUpdate] = React.useState(null);

  const dispatch = useDispatch()
  const doctorD = useSelector(state => state.Doctor)

  console.log(doctorD , 'Doctor');

  React.useEffect(() => {

    dispatch(getData())


  }, [])

  const handleSubmit = (data) => {
    if (update) {
      dispatch(updateData(data))
    } else {
      dispatch(addDoctor(data))
    }
    setUpdate(null)

    // console.log(data , 'sdvsv');

    // console.log(dispatch(addDoctor(data)));
  }

  const handleDelete = (id) => {
    dispatch(deletDoctor(id))
  }

  const handleUpdate = (data) => {
    // dispatch(updateData(data))
    setUpdate(data)
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "designation", headerName: "Designation", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "imgd", headerName: "Img", width: 130 },
    {
      field: "action",
      headerName: "Actoin",
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => handleUpdate(params.row)}
          >
            <EditNoteIcon />
          </IconButton>
        </>
      ),
      width: 130,
    },

  ];

  return (
    <>
      {
        doctorD.loading ?  <Box sx={{ display: 'flex' , width : '200px '}}>
        <CircularProgress />
    </Box> : 
    doctorD.error ? 'Something went wrong ' : 
          <>
            <DoctorForm onhandleSubmit={handleSubmit} onUpdate={update} />
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
      }


    </>
  );
}
