import { styled } from "styled-components";


export const InputCustom = styled.input`
    border : 1px solid #000;
    display: block;
    width: 100%;

    &:focus{
        border : 1px solid pink;
    };
    &::placeholder{
        color : #000;
    }
`;
