import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CoustomCard({value}) {
    return (
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
               {
                   value.url ? 
                   <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                /> : null
               }
                
                <CardBody>
                    <CardTitle tag="h5">
                       {value.mname}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.amount}
                    </CardSubtitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {value.exdate}
                    </CardSubtitle>
                    <CardText>
                        {value.pres}
                    </CardText>
                    {
                        value.btndata ? 
                        <Button>
                        Button
                    </Button> : null
                    }
                   
                </CardBody>
            </Card>
        </div>
    );
}

export default CoustomCard;