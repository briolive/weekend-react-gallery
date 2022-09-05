import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function GalleryItem({galleryItems}){
    const [toggle, setToggle] = useState(false);

    return (
        <Grid container spacing={2}>
        <Card variant="outlined" sx= {{ width: 275, height: 275 }} key={galleryItems.id}>
            <CardContent>
                {
                    toggle ? (
                        <p onClick={() => setToggle(!toggle)}>{galleryItems.description}</p>
                    ) : (
                        <img src={galleryItems.path} width="150px"
                            onClick={() => setToggle(!toggle)}></img>
                    )
                }
            <br />Likes: {galleryItems.likes}
            <br />
            </CardContent>
            </Card>
            </Grid>
    )
};


export default GalleryItem