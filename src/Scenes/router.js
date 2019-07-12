import {BrowserRouter, Route, Switch }  from "react-router-dom";
import React from 'react';
import Header from "../Components/Header/Header";
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


                <Switch>
                    <Route exact path = {routes.login} >
                        <Header them = "white"/>
                        <LoginPage/>
                    </Route>
                    {/*<Route  component={NotFound}/>*/}
                </Switch>
                {/*<Footer/>*/}

        </BrowserRouter>
    )
}