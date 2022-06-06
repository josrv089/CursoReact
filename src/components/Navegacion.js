import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/system";
import TopHeader from "./TopHeader";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Principal from "./Principal";
import Componentes from "./Componentes";
import Formulario from "./Formulario";
import FormularioFormik from "./FormularioFormik";

function Navegacion() {
  const drawerWidth = 240;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <TopHeader drawerWidth={drawerWidth}></TopHeader>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <Toolbar />
            <Divider />
            <List>
              <Link to="/principal" style={{textDecoration: "none", color: "black"}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Principal"></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/componentes" style={{textDecoration: "none", color: "black"}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Componentes"></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/formulario" style={{textDecoration: "none", color: "black"}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Formulario"></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/formularioFormik" style={{textDecoration: "none", color: "black"}}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Formulario Con Formik"></ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>


            </List>
          </Drawer>
        </Box>
      </Box>
      <Toolbar />

      <Routes>
        <Route path="/principal" element={<Principal />}></Route>
        <Route path="/componentes" element={<Componentes />}></Route>
        <Route path="/formulario" element={<Formulario />}></Route>
        <Route path="/formularioFormik" element={<FormularioFormik />}></Route>
      </Routes>
    </>
  );
}

export default Navegacion;
