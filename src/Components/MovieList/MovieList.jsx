import React from 'react';
import { useState } from 'react';
import Filter from '../Filter/Filter';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({films}) => {

    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    
    const filtertext = (text) => {
        setText(text)
    }
    const filterrate = (rate) => {
        setRate(rate)
    }
    return (
            <div>
                <Filter filtertext={filtertext} filterrate={filterrate} />
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: "wrap" }} className="adc">
                    {films.filter((el) => 
                    (el.rate.toString() >= rate && el.title.toLowerCase().includes(text.toLowerCase()) )).map((element) =>
                        <MovieCard movie={element}/>
                )}
                </div>
            </div>
    )
};
export default MovieList