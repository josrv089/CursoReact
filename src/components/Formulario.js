import { Box, Button, Container, FormControl, Grid, TextField } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

function Formulario() {
  const [values, setValues] = useState({ name: "", email: "", user: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    
    setValues({
      ...values,
      [name]: value,
    });
    
  };


  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(JSON.stringify(values));
  }
  return (
    <>
      <h1>Formulario</h1>

      <Container maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  id="name"
                  label="Nombre"
                  name="name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  id="user"
                  label="Nombre Usuario"
                  name="user"
                  variant="outlined"
                  value={values.user}
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <FormControl sx={{ m: 1 }} variant="standard">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Enviar
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Formulario;
