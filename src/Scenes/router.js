import {BrowserRouter, Route, Switch }  from "react-router-dom";
import React from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoginPage from "./Login/LoginPage";


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
                    <Route exact path = {routes.login} component={LoginPage} />
                    {/*<Route  component={NotFound}/>*/}
                </Switch>
            </div>
                <Footer/>

        </BrowserRouter>
    )
}