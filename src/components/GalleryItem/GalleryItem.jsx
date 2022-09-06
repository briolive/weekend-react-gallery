import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

function GalleryItem({galleryItems, likePhoto}){
    const [toggle, setToggle] = useState(true);

    return (
        <Grid container spacing={2}>
        <Card variant="outlined" sx= {{ width: 300, height: 350 }} key={galleryItems.id}>
            <CardContent>
                {
                    toggle ? (
                        <img src={galleryItems.path} style={{width: 150 + 'px' }}
                            onClick={() => setToggle(!toggle)}></img>
                    ) : (
                        <div>
                        <img src={galleryItems.path} style={{width: 150 + 'px' }}
                            onClick={() => setToggle(!toggle)}></img>
                        <p>{galleryItems.description}</p>
                        </div>
                    )
                }
            <br />
            <button onClick={(event) => likePhoto(galleryItems.id)}>
                Like
            </button>
            <br />Likes: {galleryItems.likes}
            </CardContent>
            </Card>
            </Grid>
    )
};


export default GalleryItem