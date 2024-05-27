// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SecurityComponent from './Security/Listsecuritycomponent';
import PriceHomePageApp from './Price/Homepage';
import AddSecurityForm from './Security/AddSecurity';
import FileImportComponent from './dataimport/FileImportComponent';
import HomePage from './home/homecomponent';
import AnalyticsComponent from './Stockdata/Analysis';
import PageWithTabs from './Stockdata/PageWithTabs';


const PageRoutes = () => {

    return (
        <Routes>
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

        </Routes>
    );
};

export default PageRoutes;
