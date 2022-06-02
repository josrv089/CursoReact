import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function TopHeader({drawerWidth}) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        >
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mi aplicación
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopHeader;
