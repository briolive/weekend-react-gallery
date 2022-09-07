import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList({galleryItems, likePhoto}) {
    return (
        <Grid container spacing={2}>
            {galleryItems.map((galleryItems) => {
                return (
                    <GalleryItem 
                        key={galleryItems.id}
                        galleryItems={galleryItems}
                        likePhoto={likePhoto}
                    />
                )
            })}
        </Grid>
    )
};


export default GalleryList