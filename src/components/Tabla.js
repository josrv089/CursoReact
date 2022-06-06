import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useFetch } from "../hooks/useFetch";

function Tabla() {
  let url = "https://jsonplaceholder.typicode.com/users";
  const { data } = useFetch(url);

  return (
    <>
      <Container maxWidth="md">
        <h1>Tabla: </h1>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {" "}
            {/* size="small"  */}
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Usuario</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Telefono</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data != null &&
                data.map((fila) => (
                  <TableRow
                    key={fila.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {fila.id}
                    </TableCell>
                    <TableCell align="right">{fila.name}</TableCell>
                    <TableCell align="right">{fila.username}</TableCell>
                    <TableCell align="right">{fila.email}</TableCell>
                    <TableCell align="right">{fila.phone}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Tabla;
