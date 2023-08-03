import React, { createContext } from 'react';

export const CounterContext = createContext({
    count: 0,
    setCount: (delta: number) => { }
})

