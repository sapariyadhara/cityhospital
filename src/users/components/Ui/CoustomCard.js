import React, { useContext } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeContext } from '../../../Context/ThemeContext';

function CoustomCard({ value, btnVal, onClick1, handleAddFav }) {
    const theme = useContext(ThemeContext)
    // const handleAddFav = (id) => {
    //     console.log(id , value); 
    // }
    return (
        <>
            <Card className={`h44 ${theme.theme}`}>
                {
                    value.url ?
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        /> : null
                }

                <CardBody>
                    <CardTitle tag="h5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{value.name}</h4>
                        <label id="switch" className="switch">
                            <input type="checkbox" />
                            <FavoriteIcon id='sliderround' className="slider round" onClick={() => handleAddFav(value.id)} />
                        </label>

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