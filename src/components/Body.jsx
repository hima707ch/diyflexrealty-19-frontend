import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import PropertyListingPage from "./PropertyListingPage/Body.jsx";
import PropertyDetailPage from "./PropertyDetailPage/Body.jsx";
import UserRegistrationPage from "./UserRegistrationPage/Body.jsx";
import UserLoginPage from "./UserLoginPage/Body.jsx";
import UserDashboardPage from "./UserDashboardPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/propertylistingpage" element={<PropertyListingPage />} />
        <Route path="/propertydetailpage" element={<PropertyDetailPage />} />
        <Route path="/userregistrationpage" element={<UserRegistrationPage />} />
        <Route path="/userloginpage" element={<UserLoginPage />} />
        <Route path="/userdashboardpage" element={<UserDashboardPage />} />
            </Routes>
        </Router>
    );
};

export default Body;