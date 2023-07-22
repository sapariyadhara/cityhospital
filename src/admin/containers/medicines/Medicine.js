import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MedicineForm from "./MedicineForm";
import { useDispatch, useSelector } from "react-redux";
import { addData, deteleData, getData, updateData } from "../../../redux/action/medicine.action";

function Medicine(props) {
  //redux with fetch Api
  const dispatch = useDispatch()
  const medicineData = useSelector(state => state.Medicine)
  console.log(medicineData , 'gdf');


  const [getmData, setGetmData] = React.useState([]); //1
  const [update, setUpdate] = React.useState(null);
  //3  //5

  React.useEffect(() => {
    // let getnewData = JSON.parse(localStorage.getItem("medicine"));

    // if (getnewData !== null) {
    //   setGetmData(getnewData);
    // }

    dispatch(getData())
  }, []);

  const handleSubmit = (data) => {
    console.log(data);
    if(update){
      dispatch(updateData(data))
    } else {
      dispatch(addData(data))
    }
   
    // let localData = JSON.parse(localStorage.getItem("medicine"));
    // console.log(localData);

    // let rnd = Math.floor(Math.random() * 10000);
    // let nData = { id: rnd, ...data };

    // if (localData === null) {
    //   localStorage.setItem("medicine", JSON.stringify([nData]));
    //   setGetmData([nData]);
    // } else {
    //   if (update) {
    //     let uData = localData.map((v) => {
    //       if (v.id === data.id) {
    //         return data;
    //       } else {
    //         return v;
    //       }
    //     });
    //     localStorage.setItem("medicine", JSON.stringify(uData));
    //     setGetmData(uData);
    //   } else {
    //     localData.push(nData);
    //     localStorage.setItem("medicine", JSON.stringify(localData));
    //     setGetmData(localData);
    //   }
    // }
    setUpdate(null);
  };

  const handleDelete = (id) => {
    // let localData = JSON.parse(localStorage.getItem("medicine"));
    // let fData = localData.filter((v, i) => v.id !== id);
    // setGetmData(fData);
    // localStorage.setItem("medicine", JSON.stringify(fData));

    dispatch(deteleData(id))
  };

  const handleUpdate = (data) => {
    // let localData = JSON.parse(localStorage.getItem("medicine"));
    // console.log(localData);
    // formik.setValues(row)
    // handleClickOpen();
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

  //2
  return (
    <>
      <MedicineForm onHandleSubmit={handleSubmit} onUpdate={update} />

      {/* 4 6 */}
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={medicineData.medicineD}
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
