import React from "react";
import './Filter.css';
import ReactStars from 'react-stars';
import AddMovie from "../AddMovie/AddMovie";

const SearchText = ({ filtertext, filterrate }) => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", background:"cyan"}}>
      <img src="/movie-icon-app.jpg" alt="img" style={{widht:"60px", height:"60px", borderRadius:"20px"}}/>
      <h1 style={{ color: "blue", fontSize: "50px" }} className="titre">
        <span style={{ color: "blue" }}>Movie </span> App
      </h1>
      <div style={{ display: "flex" }}>
        <div style={{display : 'flex', flexDirection :'column', justifyItems:'flex-start'}}>
          <form className="search">  
            <input style={{textAlign:"center", height:"30px", borderRadius:"10px", border:"2px solid blue"}}
              onChange={(event) => filtertext(event.target.value)}
              placeholder="Search Movies"
              type="text"
            />
          </form>
        </div>
        <div style={{ marginLeft:"80px", paddingTop: "10px", textAlign:"center"}}>
          <ReactStars 
            count={5}
            onChange={(newRating) => filterrate(newRating)}
            size={30}
            activeColor="#ffd700"
            half={false}
            className="STARS"
          />
        </div>
      </div>
      <AddMovie/>
    </div>
  );
};

export default SearchText;