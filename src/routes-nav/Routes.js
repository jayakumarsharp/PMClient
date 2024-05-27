import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../components/home/home";
import SearchResults from "../components/search/SearchResults";
import QuoteDetailed from "../components/detailed/QuoteDetailed";
import Portfolio from "../components/portfolio/Portfolio";
import LoginForm from "../components/user/LoginForm";
import SignupForm from "../components/user/SignupForm";
import ProfileForm from "../components/user/ProfileForm";
import NewPortfolioForm from "../components/portfolio/NewPortfolioForm";

import SecurityComponent from '../components/Security/Listsecuritycomponent';
import PriceHomePageApp from '../components/Price/Homepage';
import AddSecurityForm from '../components/Security/AddSecurity';
import FileImportComponent from '../components/dataimport/FileImportComponent';
import HomePage from '../components/home/homecomponent';
import AnalyticsComponent from '../components/Stockdata/Analysis';
import PageWithTabs from '../components/Stockdata/PageWithTabs';



function Routepage() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/signup" element={<SignupForm />} />
      <Route element={<ProtectedRoute />}>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/signup" element={<SignupForm />} />
        <Route exact path="/profile" element={<ProfileForm />} />
        <Route exact path="/portfolio/add" element={<NewPortfolioForm />} />
        <Route exact path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/detailed" element={<QuoteDetailed />} />
        <Route
                path="/security"
                element={<SecurityComponent />}
            />
            <Route
                path="/price"
                element={<PriceHomePageApp />}
            />
            <Route path="/addsecurity" element={<AddSecurityForm />} />

            <Route path="/dataimport" element={<FileImportComponent />} />

            <Route path="/" element={<HomePage />} />

            <Route path="/analytics" element={<AnalyticsComponent />} />

            <Route path="/page-with-tabs" element={<PageWithTabs />} />
      </Route>

      {/* <Navigate to="/home" /> */}
    </Routes>
  );
}

export default Routepage;
