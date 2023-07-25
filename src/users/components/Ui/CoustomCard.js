import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CoustomCard({ value, btnVal, onClick1 }) {
    return (
        <>
            <Card>
                {
                    value.url ?
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        /> : null
                }

                <CardBody>
                    <CardTitle tag="h5">
                        {value.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Price : {value.price}
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.expiry}
                    </CardSubtitle>
                    <CardText style={{ height: '60px', overflow: 'auto' }}>
                        {value.desc}
                    </CardText>
                    {
                        btnVal ? 
                        <Button onClick={() => onClick1(value.id)}>
                            {btnVal}
                        </Button> : null
                    }



                </CardBody>
            </Card>
        </>
    );
}

export default CoustomCard;