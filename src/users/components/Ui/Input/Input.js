import React from 'react';
import { InputCustom } from './Input.style';

function Input({children , placeholder ,name , type , onBlur}) {
 
    console.log(type ,name);
    return (
       <InputCustom type={type} placeholder={placeholder} >
            {children}
       </InputCustom>
    );
}

export default Input;