import React from 'react';
import { InputCustom } from './Input.style';

function Input({children , placeholder , onBlur , type ,name}) {
    console.log(type ,name);
    return (
       <InputCustom type={type} placeholder={placeholder} onBlur={onBlur} >
            {children}
       </InputCustom>
    );
}

export default Input;