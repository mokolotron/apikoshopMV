import {BrowserRouter, Route, Switch }  from "react-router-dom";
import React from 'react';

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Api from '../api';
import {RegisterCont, Home, LoginPage, NotFound} from './'
import PrivateRoute from "../Helpers/PrivateRoute";



export const  routes ={
    home: '/',
    login: '/login',
    register: '/register',

};

export default function Router(){
    return (
        <BrowserRouter>

            <Header />
            <div className={'content'}>
                <Switch>
                    <Route exact path = {routes.home} component={Home} />
                    <PrivateRoute  condition={!Api.Auth.isLoggedIn} path = {routes.login} failed={routes.home} component={LoginPage}  />
                    <PrivateRoute  condition={!Api.Auth.isLoggedIn} path = {routes.register} failed={routes.home} component={RegisterCont}  />

                    <Route  component={NotFound}/>
                </Switch>
            </div>
                <Footer/>

        </BrowserRouter>
    )
}