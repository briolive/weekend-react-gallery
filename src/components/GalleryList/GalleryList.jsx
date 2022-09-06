import React, { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryItems, likePhoto}) {
    console.log('in galleryList map');
    return (
        <div className="GalleryList">
            {galleryItems.map((galleryItems) => {
                return (
                    <GalleryItem 
                        key={galleryItems.id}
                        galleryItems={galleryItems}
                        likePhoto={likePhoto}
                    />
                )
            })}
        </div>
    )
};


export default GalleryList