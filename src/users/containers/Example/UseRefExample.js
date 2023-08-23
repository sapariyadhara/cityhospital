import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'reactstrap';

function UseRefExample(props) {
    const [name, setName] = useState('')
    const ref = useRef(0)
    const nameRef = useRef('')
    
    useEffect(() => {
        ref.current = ref.current + 1
    }, [name])

    const handleFocus = (refI) => {
        refI.current.style.backgroundColor = 'red'  
    }
    return (
        <div>
            <br></br><br></br>
            <h1>UseRef Hook Example</h1>
            <input type='text'
                ref={nameRef}
                onFocus={() => handleFocus(nameRef)}
                onChange={(event) => setName(event.target.value)}
            />
            <p>Your Name is : {name}</p>
            <p>No of Time Rendering : {ref.current}</p>
        </div>
    );
}

export default UseRefExample;