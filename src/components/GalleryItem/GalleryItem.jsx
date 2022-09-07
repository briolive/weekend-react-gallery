import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function GalleryItem({galleryItems, likePhoto}){
    const [toggle, setToggle] = useState(true);
    return (
        <Grid item xs={4} key={galleryItems.id}>
                {
                    toggle ? (
                        <img src={galleryItems.path} style={{width: 150 + 'px' }}
                            onClick={() => setToggle(!toggle)}></img>
                    ) : (
                        <div>
                        <img src={galleryItems.path} style={{width: 150 + 'px' }}
                            onClick={() => setToggle(!toggle)}></img>
                            <br/>
                        {galleryItems.description}
                        </div>
                    )
                }
            <br />Likes: {galleryItems.likes}
            <br />
            <button onClick={(event) => likePhoto(galleryItems.id)}>
                Like
            </button>
            </Grid>
    )
};


export default GalleryItem