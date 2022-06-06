import { useFetch } from "../hooks/useFetch";
import { Container } from "@mui/material";
import MUIDataTable from "mui-datatables";

const columns = [
  { name: "id", label: "ID" },
  { name: "name", label: "Nombre" },
  {
    name: "email",
    label: "Correo Electónico",
  },
  { name: "status", label: "Estado" },
  { name: "gender", label: "Genero" },
];

const options ={
    filterType: "checkbox",
    rowsPerPage:5,
    rowsPerPageOptions:[5,10,15,100],
    onTableChange:(action,tableState)=>{
        switch(action){
            case 'search':

            break;
            case 'changePage':

            break;
        }
        
    }
}
function TablaGridMui() {
  let url = "https://gorest.co.in/public/v2/users";
  const { data } = useFetch(url);

  return (
    <>
      <Container maxWidth="md">
        <h1>Datatable mui grid: </h1>
        <div style={{ height: 400, width: "100%" }}>
          {data != null && (
            <MUIDataTable
            title=" Información de usuarios"
              data={data}
              columns={columns}
              options={options}
            ></MUIDataTable>
          )}
        </div>
      </Container>
    </>
  );
}

export default TablaGridMui;
