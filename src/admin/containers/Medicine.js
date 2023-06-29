import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

let getData = JSON.parse(localStorage.getItem("medicine"));
console.log(getData);

function Medicine(props) {
  const [open, setOpen] = React.useState(false);

  const [getmData, setGetmData] = React.useState(getData);
  console.log(getmData);

  
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "mname", headerName: "Medicine Name", width: 130 },
  { field: "exdate", headerName: "Expire Date", width: 130 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "pres",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

  // React.useEffect(() => {

  //   let rows
  //   console.log(rows); 
  //   if(getmData === null){
  //       rows = []
  //   } else {
  //     rows = [...getmData]
  //   }
  //     setGetmData(getmData)
  // },[getmData])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdddata = (data) => {
    let localData = JSON.parse(localStorage.getItem("medicine"));
    console.log(localData);

    let rnd = Math.floor(Math.random() * 10000);
    let nData = { id: rnd, ...data };

    if (localData === null) {
      localStorage.setItem("medicine", JSON.stringify([nData]));
    } else {
      localData.push(nData);
      localStorage.setItem("medicine", JSON.stringify(localData));
    }
    handleClose();
  };

  const d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1));
  //current date mathi 1 minus karva

  const medicineSchema = Yup.object({
    mname: Yup.string().required("Please Enter Name"),
    exdate: Yup.date()
      .min(nd, "Please Enter Future Date.")
      .required("Please Enter Expire Date"),
    amount: Yup.number()
      .min(0)
      .required("Please Enter Amount")
      .typeError("Please Enter Valid Amount"),
    pres: Yup.string()
      .test("pres", "Please Enter Max 100 Word", function (val) {
        let arr = val.split(" ");
        if (arr.length > 5) {
          return false;
        } else {
          return true;
        }
      })
      .required("Please Enter Prescription"),
  });

  const formik = useFormik({
    initialValues: {
      mname: "",
      exdate: "",
      amount: "",
      pres: "",
    },
    validationSchema: medicineSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      action.resetForm();
      console.log(values);
      handleAdddata(values);
      setGetmData(getmData)
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  return (
    <>
      <div>
        <Button
          style={{ marginLeft: "200px" }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Add Medicine
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Medication Log</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="dense"
                id="mname"
                label="Medicine Name"
                type="text"
                fullWidth
                variant="standard"
                name="mname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mname}
              />
              <span style={{ color: "red" }}>
                {errors.mname && touched.mname ? errors.mname : null}
              </span>
              <TextField
                margin="dense"
                id="date"
                label="Expire Date"
                type="date"
                fullWidth
                variant="standard"
                name="exdate"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.exdate}
              />
              <span style={{ color: "red" }}>
                {errors.exdate && touched.exdate ? errors.exdate : null}
              </span>
              <TextField
                margin="dense"
                id="amount"
                label="Amount"
                type="number"
                fullWidth
                variant="standard"
                name="amount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
              />
              <span style={{ color: "red" }}>
                {errors.amount && touched.amount ? errors.amount : null}
              </span>
              <TextField
                margin="dense"
                id="pres"
                label="Description"
                type="text"
                fullWidth
                variant="standard"
                name="pres"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pres}
              />
              <span style={{ color: "red" }}>
                {errors.pres && touched.pres ? errors.pres : null}
              </span>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </form>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
       
          rows={getmData}
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
