import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { routes } from '../Scenes/router';



function PrivateRoute({ component: Component, condition: Condition, failed: failed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>{
        
        return(
            Condition ? (
            <Component {...props} />
          ) : (
            <Redirect to={failed} />
          )
        )
      }}
    />
  );
}


  


export default PrivateRoute;