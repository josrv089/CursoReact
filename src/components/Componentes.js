import {
    AppBar,
    Button,
    ButtonBase,
    ButtonGroup,
    Checkbox,
    Divider,
    Fab,
    FormControl,
    FormControlLabel,
    FormLabel,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    TextField,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Componentes() {

    const MiButton = styled(ButtonBase)(({ theme }) => ({
        height: 50,
        width: 50,
        backgroundColor: "#fff",
        borderColor: "#818",
        border: "1px solid #818",
        borderRadius: "50px",
        "&:hover": {
          backgroundColor: "#888",
        },
      }));
    
  return (
    <>
      <h1>Hola</h1>
      <Button variant="contained" color="secundary" size="small">
        Text
      </Button>
      <Button variant="contained" color="secundary" size="small">
        Text
      </Button>
      <br />
      <MiButton
        onClick={() => {
          alert("Hola");
        }}
      >
        Click
      </MiButton>

      <br />
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        orientation="vertical"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>...</Button>
      </ButtonGroup>

      <Divider></Divider>
      <Checkbox color="error" defaultChecked />
      <Divider />
      <Fab color="primary" aria-label="add">
        <ArrowCircleDownIcon />
      </Fab>

      <Divider></Divider>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>

      <Divider />
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
    </>
  );
}

export default Componentes;
