import React ,{useState,useEffect}from "react";
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";

const Linking =({films}) =>{

    let {id}=useParams ()
  
    const [movie , setMovie]=useState({})

    useEffect(() => {
        let x = films.filter((film)=> film.id === id)
    setMovie(x[0])
    }, [films])
    
console.log(films)
console.log(id)
console.log(movie)
    return (

        <div style={{width:"700px", height:"500px", background :'cyan', borderStyle: 'none', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"20px", backgroundColor:"cyan", marginTop:"20px", margin:"auto"}}>
            <h1 style={{fontFamily:"Cambria", fontSize:"50px", color:"red", textAlign:"center"}}>{movie.title}</h1>
            <h2 style={{fontFamily:"Cambria", fontSize:"20px", color:"grey", textAlign:"center"}}><span style={{color:"blue", fontFamily:"Cambria"}}>Description</span>: {movie.description}</h2>
            <div style={{display:"flex", justifyContent:"center"}}><iframe style={{display:"flex", justifyContent:"center", borderRadius:"20px"}} width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </div>)
}

export default Linking