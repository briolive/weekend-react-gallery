import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';


function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  // called when page loads
  useEffect(() => {
    console.log('useEffect - page load');
    fetchGallery();
  }, []);

  // make a GET request to our server
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      // our array is response.data
      setGalleryItems(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong in GET!');
    });
  };

  const likePhoto = (galleryId) => {
    console.log('in markAsPurchased!');
    console.log('galleryId', galleryId);
    console.log('galleryId.likes', galleryId.likes)
    axios({
      method: 'PUT',
      url: `gallery/like/${galleryId}`
    }).then((response) => {
      fetchGallery();
    }).catch((error) => {
      alert('Something went wrong in PUT!');
    })
  };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <Container>
        <GalleryList 
          galleryItems={galleryItems}
          likePhoto={likePhoto}
          />
        </Container>
      </div>
    );
}

export default App;
