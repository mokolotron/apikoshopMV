import React from 'react';
import s from './Input.module.scss'

export default function Input({ rsrc , lsrc, ...props}){

    return(
        <div className={s.container}>
            {lsrc? (<img className={s.icon} src={lsrc} alt='Image'  />): null}
            <input className={s.input} type = 'text' {...props}/>
            {rsrc? (<img className={s.icon} src={rsrc} alt='Image'  />): null}
        </div>
    )
}