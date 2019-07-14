import {BrowserRouter, Route, Switch }  from "react-router-dom";
import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Api from '../api';




import PrivateRoute from "../Helpers/PrivateRoute";
import {NotFound, Home, LoginPage} from "./";


export const  routes ={
    home: '/',
    login: '/login',
    register: '/register',
    auth: '/auth',
};

export default function Router(){
    return (
        <BrowserRouter>

            <Header />
            <div className={'content'}>
                <Switch>
                    <Route exact path = {routes.home} component={Home} />
                    <PrivateRoute exact condition={!Api.Auth.isLoggedIn} path = {routes.login} failed={routes.home} component={LoginPage}  />

                    <Route  component={NotFound}/>
                </Switch>
            </div>
                <Footer/>

        </BrowserRouter>
    )
}