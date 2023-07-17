import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { decrement, increment } from '../../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch()
    const counterVal = useSelector(state => state.Counter)
  
    console.log(counterVal);
 

    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement())
    }

    return (
        <>
        <h1>Counter With Redux</h1>
            <Button onClick={() => handleInc()}> + </Button>

            <span> {counterVal.count} </span>

            <Button onClick={() => handleDec()}> + </Button>
        </>
    );
}

export default Counter;