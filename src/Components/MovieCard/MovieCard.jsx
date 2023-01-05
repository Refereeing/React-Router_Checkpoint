import React from 'react';
import {Card} from 'react-bootstrap'
import ReactStars from 'react-stars';
import {Button} from 'react-bootstrap';
import {Link, Route, Router, Routes} from "react-router-dom";
import Linking from '../Linking/Linking';

const MovieCard = ({movie}) => {
  console.log(movie.id)
    return (
        <div>
          <Card style={{ width: '18rem', height:"450px", marginTop: "10px", backgroundColor:"grey", textAlign:"center" }}>
              <Card.Img style={{width:"auto", height:"300px"}} variant="top" src={movie.posterUrl}/> 
            <Card.Body>
            <Card.Title style={{color:"blue"}}>{movie.title}</Card.Title>
            <Card.Text>
            </Card.Text>

            <Button variant="warning">
              <Link to={`/movie/${movie.id}`}> more info </Link>
            </Button>

            <div style={{display:"flex", justifyContent:"center"}}>
            <ReactStars
              style={{display:"flex"}}
              count={5}
              value={movie.rate}
              size={30}
              edit={false}
              activeColor="#150E56"
              half={false}/>
            </div>
            </Card.Body>
          </Card>
        </div> 
)}

export default MovieCard