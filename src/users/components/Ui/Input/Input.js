import React from 'react';
import { InputCustom, InputError } from './Input.style';

function Input({ errorText, ...rest }) {
    return (
        <>
            <InputCustom
                {...rest}
                errorText={errorText}
                className="form-control"
            >
            </InputCustom>
            <InputError>
                {errorText}
            </InputError>
        </>
    );
}

export default Input;