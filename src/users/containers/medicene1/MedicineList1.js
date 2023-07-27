import React from 'react';
import CoustomCard from '../../components/Ui/CoustomCard';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";

function MedicineList1({mdData , onHandleClick }) {
    console.log(mdData , 'mdData');
    return (
        <>
        {mdData.map((v, i) => {
        return (
            <div class="col-md-6 p-2">
            <Card>
              {
                v.url ?
                  <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                  /> : null
              }

              <CardBody>
                <CardTitle tag="h5">
                  {v.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Price : {v.price}
                </CardSubtitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  {v.expiry}
                </CardSubtitle>
                <CardText style={{ height: '60px', overflow: 'auto' }}>
                  {v.desc}
                </CardText>

                <Button onClick={() => onHandleClick(v.id)}>
                  Add to Cart
                </Button>

              </CardBody>
            </Card>
          </div>
        );
      })}
      </>
    );
}

export default MedicineList1;