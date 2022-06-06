import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid,Radio,RadioGroup,TextField } from "@mui/material";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";

import * as Yup from 'yup';

function FormularioFormik() {


    const schema = Yup.object({
        name : Yup.string()
            .min(3,"El nombre debe tener minimo 3 caracteres")
            .max(25,"El nombre no puede ser mayor a 25 caracteres")
            .required("El nombre es requerido"),
        email : Yup.string()
            .email("El email no es valido")
            .required("El email es requerido")            
    })

    const formik = useFormik({
        initialValues: {
            name:"",
            email:"", 
            user:"", 
            sexo:"hombre"
        },
        onSubmit:(values)=>{
            //Hacer validaciones.
            //Conectarnos a un api...
            // Depende de la respuesta del api, cargar datos, redireccionar pantallas
            alert(JSON.stringify(values));
        },
        validationSchema: schema
    })
  return (
    <>
      <h1>Formulario con Formik</h1>

      <Container maxWidth="md">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  id="name"
                  label="Nombre"
                  name="name"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </FormControl>
            </Grid>


            <Grid item xs={8}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  id="user"
                  label="Usuario"
                  name="user"
                  variant="outlined"
                  value={formik.values.user}
                  onChange={formik.handleChange}
                  error={formik.touched.user && Boolean(formik.errors.user)}
                  helperText={formik.touched.user && formik.errors.user}
                />
              </FormControl>
            </Grid>

            <Grid item xs={8}>
              <FormControl>
                <FormLabel id="lblSexo">Sexo</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="mujer"
                  name="sexo"
                  id="sexo"
                  value={formik.values.sexo}
                  onChange={formik.handleChange}
                  
                >
                  <FormControlLabel
                    value="mujer"
                    control={<Radio />}
                    label="Mujer"
                  />
                  <FormControlLabel
                    value="hombre"
                    control={<Radio />}
                    label="Hombre"
                  />
                </RadioGroup>
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

export default FormularioFormik;
