import React, { useCallback, useState } from 'react';
import { Button } from 'reactstrap';
import ListData from './ListData';

function CallbackFun(props) {
    const [theme , setTheme] = useState(false)
    const [number , setNumber] = useState(1)
   
    const themeStyle = {
        backgroundColor: theme ? '#0275d8' : '#fff',
        color : theme ? '#fff' : '#0275d8',
    }

    const getItems = useCallback((n) => {
        return [number , number+n , number+n+1]     
    } , [number])
    return (
        <div style={themeStyle}>
            <br></br><br></br>
            <h1 style={{textAlign : 'center'}}>Callback function</h1>

            <Button onClick={() => setTheme(!theme)}>Theme</Button>
            <input type='text' onChange={(e) => setNumber(parseInt(e.target.value))} />

            <ListData items={getItems}/>
        </div>
    );
}

export default CallbackFun;