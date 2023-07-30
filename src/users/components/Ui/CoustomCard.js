import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CoustomCard({ value, btnVal, onClick1, handleAddFav }) {
    // const handleAddFav = (id) => {
    //     console.log(id , value); 
    // }
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
                    <CardTitle tag="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{value.name}</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <FavoriteIcon className="slider round" onClick={() => handleAddFav(value.id)} />
                            {/* <span className="slider round" ><FavoriteBorderOutlinedIcon  className="slider round" onClick={() => handleAddFav(value.id)} /> </span> */}
                        </label>

                        {/* <span id='span1'> <FavoriteBorderOutlinedIcon className="slider round" onClick={() => handleAddFav(value.id)} /></span> */}
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