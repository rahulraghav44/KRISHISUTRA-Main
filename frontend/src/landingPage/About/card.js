import React from 'react';
import './card.css';

function card({Name,link,descr,Color}) {
    return ( 
        <>
        <div className='card' style={Color}>
            <div className='name'>
                <h4>{Name}</h4>
            </div>
            <div className='image'>
                <img className='cardImage' src ={link} alt="imageFruit" />
            </div>
            <div className='descreption'>
                <p>{descr}</p>
            </div>
        </div>
        </>
     );
}

export default card;