import { styled } from "styled-components";


export const InputCustom = styled.input`
    border : ${props => props.errorText !== '' ? '1px solid pink' : '1px splid grey'};
   
`;

export const InputError = styled.span`
    display : ${props => props.errorText !== '' ? 'inline=block' : 'none'};
    color : red ;
`;
