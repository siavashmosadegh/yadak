import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from '../Pages/Main';
import Header from '../Views/Main/Header';
import routePaths from './NameSpace';

const RoutesList = () => {
    
    return (
        <BrowserRouter>
        
            <Routes>

                <Route 
                    exact
                    path={routePaths.default}
                    element={ <Main /> }
                />

                <Route
                    exact
                    path={routePaths.login}
                    element={ <Header />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default RoutesList;