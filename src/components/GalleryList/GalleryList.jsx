import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryItems}) {
    console.log('in galleryList map');
    return (
        <div className="GalleryList">
            {galleryItems.map((galleryItems) => {
                return (
                    <GalleryItem 
                        key={galleryItems.id}
                        galleryItems={galleryItems}
                    />
                )
            })}
        </div>
    )
};


export default GalleryList