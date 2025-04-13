import React from 'react';
import './card.css';

function TempFruitCard({Name,link,descr,color}) {
    return ( 
        <>
        <div className='card' style={color}>
            <div className='name'>
                <h4>{Name}</h4>
            </div>
            <div className='image'>
                <img style={{margin:"0 0  50rem  3rem"}} src={link} alt="imageFruit" />
            </div>
            <div className='descreption'>
                <p>{descr}</p>
            </div>
        </div>
        </>
     );
}

export default TempFruitCard;