import React from 'react';
import Box from '@mui/material/Box';
import DepartmentForm from './DepartmentForm';
import { DataGrid } from '@mui/x-data-grid';
// import { getData } from '../../../redux/action/department.action';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, getData, updateData } from '../../../redux/action/department.action';
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton } from '@mui/material';

function Department(props) {

    const [update, setUpdate] = React.useState(null);

    const dispatch = useDispatch()
    const departD = useSelector(state => state.department)
    // const departmentD = useSelector(state => state.department)
  
    console.log(departD , 'department');
  
    React.useEffect(() => {
  
      dispatch(getData())
  
  
    }, [])

    const handleSubmit = (data) => {
        console.log(data)
        
       
        if (update) {
            dispatch(updateData(data))
        } else {
            dispatch(addData(data))
        }
       
        setUpdate(null)
      
      }
  
      const handleDelete = (id) => {
        dispatch(deleteData(id))
      }

      const handleUpdate = (data) => {
        // dispatch(updateData(data))
        setUpdate(data)
      }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
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
            <DepartmentForm onhandleSubmit={handleSubmit} onUpdate={update}/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={departD.depart}
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

export default Department;