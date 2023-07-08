import { styled } from "styled-components";


export const InputCustom = styled.input`
    border : 1px solid #000;
    display: block;
    width: 100%;
    outline : none;
    &:focus{
        border : 2px solid blue;
        outline: blue;
        background:#ff6337;
        color:#fff;
        &::placeholder{
            color : #fff;
        }
    }
    &::placeholder{
        color : #000;
    }
   
`;
