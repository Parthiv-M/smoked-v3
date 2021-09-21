import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useSmokedState } from "./context";
 
// renders the components according to the routes
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useSmokedState();
    
    return (
        <Route
            path={path}
            render={props =>
                // redirect to sign in page if no token is present
                isPrivate && !Boolean(userDetails.token) ? (
                    <Redirect
                        to={{ pathname: "/signIn" }}
                    />
                )
                : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    )
}
 
export default AppRoutes;