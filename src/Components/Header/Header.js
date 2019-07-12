import React, { Component } from 'react'
import s from './Header.module.scss'
import styled from 'styled-components'
import {Route, Switch }  from "react-router-dom";
import  {routes} from '../../Scenes/router'
import { Link, withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';

import LogoL from '../../imgs/LogoL.svg';
import Heart from '../../imgs/Heart.svg';
import HeartD from '../../imgs/HeartD.svg';
import LogoD from '../../imgs/LogoD.svg';
import Search from "./components/Search";
import {Button} from "../../smallComponents";


//TEMP
var Api = {
    Auth: [],
};
 Api.Auth.isLoggedIn  = true;
//TEMP


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        let props = {...this.props};
        props.loc = '/' +  props.location.pathname.split('/')[1];


        props.dark = true;
        props.search = true;
        switch(props.loc)    {
           case  routes.login: {props.dark = false;  props.search = false}
           case  routes.register: {props.dark = false; props.search = false}
        }



        return(

            <header className={props.dark ? s.header_dark : s.header}>
                <div className={s.wrapper}>
                    <div className={s.left}>
                        <Link className={s.Logo} to={routes.home}>
                            <img src={props.dark ? LogoD : LogoL} alt='logo' />
                        </Link>
                    </div>
                    <div className={s.right}>
                        <div className={s.sellButton}>
                            <Button>Sell</Button>
                        </div>
                        {Api.Auth.isLoggedIn ? (
                            <div className={s.logButton} onClick={props.hendleLogout}>
                                Logout
                            </div>
                        ) : (
                            <Link className={s.logButton} to={routes.login}>Login</Link>
                        )}
                        <img className={s.like} src={props.dark ? HeartD : Heart} alt='like' />
                    </div>
                </div>
                {props.search ? ( <Search />   ): ( null)}
            </header>

        )
    }
}

const enhencer = compose(
    withRouter,
    withHandlers({
        hendleLogout: (props) => () => {
            Api.Auth.isLoggedIn  = false;
            props.history.push(routes.home);
        }
    }),
);

export default enhencer(Header);