import React, { useEffect, useState } from 'react';
// import * as React from 'react';
import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import { CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';



function MediicineU(props) {
    const [mData, setMData] = useState([])
    const [svalue, setSvalue] = useState('')
    console.log(mData);

    const handleChange = (i) => {
        // setSvalue(value);
        console.log(i);
    }
    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem("medicine"))
        console.log(getData);
        if(mData !== null){
            setMData(getData)
        }

      

    }, [])


    return (
        <>

            <div class="input-group" style={{ width: '600px', margin: ' 20px auto' }}>
                <input type="search" name='search' value={svalue} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                    onChange={() => handleChange(svalue)} />
                <button type="button" class="btn btn-outline-primary" >search</button>
            </div>
            {/* <input type='search' name='search' id='search' placeholder='Search Here'></input> */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '20px'
            }}>


                {
                    mData.map((v, i) => {
                        return (
                            <Card
                                style={{
                                    width: '18rem',
                                    margin: '20px'
                                }}
                            >
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {v.mname}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.exdate}
                                    </CardSubtitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {v.amount}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.pres}
                                    </CardText>
                                    <Button>
                                        Button
                                    </Button>
                                </CardBody>
                            </Card>
                        )
                    })
                }

            </div>
        </>
    );
}

export default MediicineU;