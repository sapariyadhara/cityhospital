import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import { Button } from 'reactstrap';

function Buttons(props) {
    const [count , setCount] = useContext(CounterContext)
    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>Add</Button>
            <Button onClick={() => setCount(count - 1)}>Remove</Button>
        </div>
    );
}

export default Buttons;