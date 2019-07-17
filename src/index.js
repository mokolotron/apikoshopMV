import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './Store/createStore'
import {connect, Provider} from "react-redux";

function mapStateToProps(state) {
    return {
        isLoading: state.app.isLoading,
    }
}

const AppConnected = connect(mapStateToProps)(App);




ReactDOM.render(
    <Provider store={Store}>
        <AppConnected />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
