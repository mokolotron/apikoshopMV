import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {routes} from "../router";


function LoginPage() {


        return (
           <div >
               <p>Login</p>
               <Link to={routes.register}> Register</Link>
           </div>
        )

}

export default LoginPage;