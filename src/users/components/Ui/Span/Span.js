import React from 'react';
import { SpanErorr } from './Span.style';

function Span({children}) {
    return (
        <SpanErorr>
            {children}
        </SpanErorr>
    );
}

export default Span;