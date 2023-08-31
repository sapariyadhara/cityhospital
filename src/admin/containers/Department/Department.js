import React from 'react';
import Box from '@mui/material/Box';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';
// import { getData } from '../../../redux/action/department.action';
import { useDispatch, useSelector } from 'react-redux';
// import { addData, deleteData, getData, updateData } from '../../../redux/action/department.action';
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {  IconButton } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// import { addDepartments, deleteDepartments, fetchDepartments, updatedepartments } from '../../../redux/slice/departmentSlice';
import { setAlert } from '../../../redux/slice/alertSlice';
import { adddptData, deletedptData, getdptData, updatedtpData } from '../../../redux/slice/departmentfirebSlice';


function Department(props) {
  const dispatch = useDispatch()
  const departD = useSelector(state => state.departmentf)
  const [update, setUpdate] = React.useState(null);

  console.log(departD, 'department');

  React.useEffect(() => {
    dispatch(getdptData())
  }, [])

  const handleSubmit = (data) => {
    console.log(data)

    if (update) {
      // dispatch(setAlert({ text: "Update Data", color: 'success' }))
      dispatch(updatedtpData(data))
    } else {
      // dispatch(setAlert({ text: "Add Data", color: 'success' }))
      dispatch(adddptData(data))
    }

    setUpdate(null)

  }

  const handleDelete = (data) => {
    // dispatch(setAlert({ text: "Delete Data", color: 'error' }))
    dispatch(deletedptData(data))
  }

  const handleUpdate = (data) => {
    setUpdate(data)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'name', headerName: 'Name', width: 200 },
    
    { field: 'desc', headerName: 'Description', width: 130 },
    { field: 'dpartimg', headerName: 'Department Image', width: 170 },
    {
      field: "action",
      headerName: "Actoin",
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row)}
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
 {/* <>
           <DepartmentForm onhandleSubmit={handleSubmit} onUpdate={update} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={departD.department}
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

          </> */}

      {
        departD.isloading ? <Box sx={{ display: 'flex', width: '200px ' }}>
          <CircularProgress />
        </Box>
          :
          departD.error ? departD.error: 
          <>
           <DepartmentForm onhandleSubmit={handleSubmit} onUpdate={update} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={departD.department}
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

export default Department;