import React, { Component } from 'react'
import classes from './Header.module.css'
import styled from 'styled-components'
import {Route, Switch }  from "react-router-dom";
import  {routes} from '../../Scenes/router'

import logo from '../../imgs/logo.svg';
import heart from '../../imgs/heart.png';



const Image = styled.img`

    
`;



class Header extends Component {

    constructor(props) {
        super(props);

            if(props.them === "white")
                this.clasHeader = classes.whiteHeader;
            else  this.clasHeader = classes.header;

    }

    render(){



        return (
    <div className={classes.wraper}>
            <div className={this.clasHeader}>
                <img className={classes.logo} src={logo} onClick={()=>console.log('TODO: readres to home')} />
                <div className={classes.right}>
                    <button className={classes.buttonSell} >
                        <div className={classes.textInButton}>
                            Sell
                        </div>
                    </button>
                    <div className={classes.login}>Login</div>
                <img  className={classes.heart} src={heart} onClick={()=>console.log('TODO: show favorite products ')} />
                </div>


            </div>
    </div>

        )
    }
}

export default Header