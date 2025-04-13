import React from 'react';
import Hero from './hero';
import TextArea from './textArea';
import BottomHome from './bottomHome';
import Service from './Service';
import Uncle from './Uncle';
import Slider from './slider';

function HeroPage() {
    return ( 
        <>
        <Hero/>
        <TextArea/>
        <Slider/>    
        <Service/>   
        <Uncle/>
        <BottomHome/>
        
        </>
     );
}

export default HeroPage;