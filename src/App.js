
//import ReactStars from 'react-stars';

import './App.css';
import React,{ useState } from 'react';
import MovieList from "./Components/MovieList/MovieList";
import Linking from './Components/Linking/Linking';
import {Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [films, setFilms] = useState([
    {
        id:uuidv4(),
        posterUrl: "https://i.pinimg.com/originals/aa/15/42/aa15422cb191838cd1b4737c7325d1fc.jpg",
        title: "Vikings",
        description: "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit...",
        rate: 2,
        trailer : "https://www.youtube.com/embed/9GgxinPwAGc"

    },
    
    {
        id:uuidv4(),
        posterUrl: "http://img.over-blog-kiwi.com/0/95/30/84/20191024/ob_7e7b43_1571909767-action-dossier-de-presse-na.jpg",
        title: "Narcos",
        description: "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
        rate: 1,
        trailer : "https://www.youtube.com/embed/1lKLgzi6STw"

    },
    {
        id:uuidv4(),
        posterUrl: "https://i.pinimg.com/originals/e4/00/1e/e4001e0103f9a2270e8634a8cc566065.jpg",
        title: "La Casa de Papel",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain. Starring:Úrsula Corberó, Álvaro Morte, Itziar Ituño",
        rate: 4,
        trailer :"https://www.youtube.com/embed/hMANIarjT50"

    },
    {
        id:uuidv4(),
        posterUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        title: "Game of Thrones",
        description: "Nine noble families struggle with each other for control of the fairy land of Westeros, while an ancient enemy awaits .",
        rate: 3,
        trailer :"https://www.youtube.com/embed/gcTkNV5Vg1E"

    },

]);

  return (
        <div className="App" style ={{background :'white'}}>
          <Routes>
              <Route path="/movie/:id" element={<Linking films={films} />}/>
              <Route path="/" element={<MovieList films={films} />}/>
          </Routes>
        </div>
  );
}

export default App;