import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { AppBar, Typography, Container } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import SearchForm from "../components/search/SearchForm";

function Navigation() {
  const { currentUser, logout } = useAuth();

  const loggedInNav = () => {
    return (
      <AppBar className="justify-content-end">
        <Typography>Signed in as: </Typography>
        <Link as={NavLink} to="/profile" className="">
          <u>{currentUser.username}</u>
        </Link>
        <Link as={NavLink} to="/" onClick={logout}>
          Log Out
        </Link>
      </AppBar>
    );
  };

  const loggedOutNav = () => {
    return (
      <AppBar className="justify-content-end">
        <Link as={NavLink} to="/login">
          Login
        </Link>
        <Link as={NavLink} to="/signup">
          Sign Up
        </Link>
      </AppBar>
    );
  };

  return (
    <AppBar bg="light" variant="light" className="mb-3">
      <Container>
        <Link as={Link} to="/">
          Portfolio Manager
        </Link>
        <AppBar className="flex-grow-1 me-3">
           <SearchForm /> 
        </AppBar>
        {currentUser ? loggedInNav() : loggedOutNav()}
      </Container>
    </AppBar>
  );
}

export default Navigation;
