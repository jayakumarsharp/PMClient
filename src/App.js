import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Layout from "../src/components/Layout";
import { AuthProvider } from "./hooks/useAuth";
import { history } from "./helpers/history";
import Navigation from "./routes-nav/Navigation";

const drawerWidth = 240;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  return (
    <AuthProvider>
      <BrowserRouter history={history}>
  
        
        <CssBaseline />
        <Navigation />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
        
           <Layout></Layout> 
          <Toolbar />
        </Drawer>
        <Container
          components="main"
          sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}
        >
          <Toolbar />

        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
