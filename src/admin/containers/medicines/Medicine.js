import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MedicineForm from "./MedicineForm";
import { useDispatch, useSelector } from "react-redux";
import { addMedicData, deleteMedicData, getMedicData, updateMedicData } from "../../../redux/slice/medicineSlice";

function Medicine(props) {

  const dispatch = useDispatch()
  const medicineData = useSelector(state => state.medicinef)
  console.log(medicineData , 'gdf');


  const [getmData, setGetmData] = React.useState([]); //1
  const [update, setUpdate] = React.useState(null);
  //3  //5

  React.useEffect(() => {

    dispatch(getMedicData())
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
    if(update){
      dispatch(updateMedicData(data))
    } else {
      // dispatch(addData(data))
      dispatch(addMedicData(data))
    }
    setUpdate(null);
  };

  const handleDelete = (data) => {
    dispatch(deleteMedicData(data))
  };

  const handleUpdate = (data) => {
    setUpdate(data);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Medicine Name", width: 130 },
    { field: "expiry", headerName: "Expire Date", width: 90 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "desc",
      headerName: "Description",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 300,
    },
    { field: "mediImg", headerName: "Medecine Img", width: 90 },
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

  //2
  return (
    <>
      <MedicineForm onHandleSubmit={handleSubmit} onUpdate={update} />

      {/* 4 6 */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={medicineData.medic}
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

export default Medicine;
