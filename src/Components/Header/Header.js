import React, { Component } from 'react'
import classes from './Header.module.css'
import styled from 'styled-components'
import {Route, Switch }  from "react-router-dom";
import  {routes} from '../../Scenes/router'

import logo from '../../imgs/logo.svg';
import heart from '../../imgs/heart.png';



const Image = styled.img`
    cursor: pointer;
    height 42px;
`;

const ImageHeart = styled(Image)`
    position: relative;
    
    
    height: 18px;
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
                <Image src={logo} onClick={()=>console.log('TODO: readres to home')} />
                <ImageHeart src={heart} onClick={()=>console.log('TODO: show favorite products ')} />


            </div>
    </div>

        )
    }
}

export default Header