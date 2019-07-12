import React from 'react';

import s from './Button.module.scss';

function Button({ children = "defText", color = '#349A89', ...props}){

    return(
        <button className={s.button} {...props} style={{background: color}}>
            <div className={s.button_container}>
                {children}
            </div>
        </button>
    );
}





export default Button;