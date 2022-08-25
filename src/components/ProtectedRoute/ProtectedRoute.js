import React from "react";
import { Redirect } from "react-router";

const ProtectedRoute = ({ children, loggedIn}) => {
    if (loggedIn) {
        return children;
    };

    return <Redirect to="/"/>
}

export default ProtectedRoute;