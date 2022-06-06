import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useFetch } from "../hooks/useFetch";

const columns = [
  { field: "id", headerName: "ID", width: 90, type: "number" },
  { field: "name", headerName: "Nombre", width: 150, editable: true },
  {
    field: "email",
    headerName: "Correo Electónico",
    width: 150,
    editable: false,
  },
  { field: "status", headerName: "Estado", width: 100, editable: true },
  { field: "gender", headerName: "Genero", width: 80, editable: true },
];

function TablaGrid() {
  let url = "https://gorest.co.in/public/v2/users";
  const { data } = useFetch(url);

  console.log("DATA>>> ", data);

  return (
    <>
      <Container maxWidth="md">
        <h1>Data </h1>
        <div style={{ height: 400, width: "100%" }}>
          {data != null && (
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            ></DataGrid>
          )}
        </div>
      </Container>
    </>
  );
}

export default TablaGrid;
