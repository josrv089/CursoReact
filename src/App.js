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
import { borderRadius, Box } from "@mui/system";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import Componentes from "./components/Componentes";
import TopHeader from "./components/TopHeader";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <div className="App">
      <Navegacion></Navegacion>

      
    </div>
  );
}

export default App;
