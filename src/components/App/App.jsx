import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  const [galleryList, setGalleryList] = useState([]);

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
      setGalleryList(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong in GET!');
    });
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <GalleryList />
          {galleryList.map((item) => {
              return <li key={item.id}>
                <img src={item.path} width="100px"></img>
                <br />{item.description}
                <br />Likes: {item.likes}
                </li>
            })}
      </div>
    );
}

export default App;
