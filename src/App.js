import './App.css';
import Search from './Components/Search';
import Images from './Components/Images';
import LoadMore from './Components/LoadMore';
import ImageInfo from './Components/ImageInfo';
import React, { useState, useEffect } from 'react';

function App() {
  const [query,setQuery] = useState('');
  const [copy,setCopy] = useState('random');
  const v=1;//random variable so that useEffect only runs one time.
  const [showInfo,setShowInfo]= useState('false');
  const [counter,setCounter]= useState(0);
  const [images,setImages] =useState([]);
  //to set query
  const inp = (e)=>{
    setQuery(e.target.value);
    //setShowInfo(false);
  }
  //to set images and counter and show info.
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=ZrWKw5ISTwv1nN_9iQFwi3NMWSpTPwmFNx6_r86Aex4&query=${query}&per_page=30`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.results);
      setCounter(8);
      setShowInfo(true);
    })
    setCopy(query);
  }
  //to initially set random photos
  useEffect(() => {
    setQuery('random')
    fetch(`https://api.unsplash.com/search/photos/?client_id=ZrWKw5ISTwv1nN_9iQFwi3NMWSpTPwmFNx6_r86Aex4&query=random&per_page=30`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.results);
      setCounter(8);
      setShowInfo(true);
    })
  },[v]);
  //to increase counter on clicking load more.
  const increaseCounter=()=>{
    setCounter(counter+8);
  }
  return (
    <div className="App">
      <Search inp={inp} fetchImages={fetchImages} images={images} query={query}/>
      <ImageInfo showInfo={showInfo} copy={copy} images={images}/>
      <Images images={images} counter={counter} />
      <LoadMore counter={counter} increaseCounter={increaseCounter} images={images}/>
    </div>
  );
}

export default App;
