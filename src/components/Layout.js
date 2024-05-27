import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, List, ListItem, Button } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

const Layout = () => {
  const { currentUser } = useAuth();
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "security", link: "/security" },
    { name: "price", link: "/price" },
    { name: "import", link: "/dataimport" },
    { name: "Analytics", link: "/analytics" },
    { name: "pagetabs", link: "/page-with-tabs" },
  ];
  return (
    <div>
      {currentUser != null && (
        <List>
          {menuItems.map((item, index) => (
            <ListItem component={Link} to={item.link} key={index}>
              <Button variant="text" component={Link} to={item.link}>
                {item.name}
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Layout;
