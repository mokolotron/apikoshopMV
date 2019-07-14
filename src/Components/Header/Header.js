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
import Api from '../../api/';

//TEMP



function Header(props)
 {
       let loc = '/' +  props.location.pathname.split('/')[1];

       let dark = true;
       let search = true;
        switch(loc)    {
           case  routes.login: {dark = false;  search = false}
           case  routes.register: {dark = false; search = false}
        }

        return(

            <header className={dark ? s.header_dark : s.header}>
                <div className={s.wrapper}>
                    <div className={s.left}>
                        <Link className={s.Logo} to={routes.home}>
                            <img src={dark ? LogoD : LogoL} alt='logo' />
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
                            <Link className ={s.logButton} to={routes.login}>Login</Link>
                        )}
                        <img className={s.like} src={dark ? HeartD : Heart} alt='like' />
                    </div>
                </div>
                {search ? ( <Search />   ): ( null)}
            </header>

        )
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