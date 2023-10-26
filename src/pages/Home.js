import React from "react";
import {useRef} from 'react';
import {FaAngleDown} from "react-icons/fa";
import MariCV from "../assets/MariCV.pdf";
import myPic from "../assets/mari.jpg";
import Tabs from './Tabs';

function Home() { 
    console.log(myPic); 
    const ref = useRef(null);
    
    const scrollDownClick = () => {
        ref.current?.scrollIntoView({behaviour: 'smooth'});
    };

    return (
        <div>
            <div class="home-container">
                <div class="home-pic-cv">
                    <div class="home-pic"> <img src={myPic} alt="me" class="myPic" /> </div>
                    <div class="home-cv"> <button onClick={onBttonClick} class="cvBtton">My CV</button> </div>
                </div>
                <div class="home-description">
                    <h1>Hello, I'm Mariana</h1>
                    <h2>A Master of Physics graduate in Space Science and Robotics.</h2>
                </div>

            </div>

            <button class="scroll-button" onClick={scrollDownClick}><FaAngleDown/></button>

            <div style={{height: '20rem'}}/>

            <div ref={ref}>
                <Tabs />
            </div>

            <div style={{ height: '50rem' }} />
            
        </div>

    );
}

function onBttonClick (){
    window.open(MariCV, '_blank', 'noopener')
}

export default Home;