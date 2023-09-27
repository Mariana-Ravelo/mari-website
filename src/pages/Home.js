import React from "react";
import MariCV from "../assets/MariCV.pdf";
import myPic from "../assets/mari.jpg";

function Home() { 
    console.log(myPic);   
    return (
        <div class="grid-container">
            <div class="grid-item grid-item-1">
                <img src={myPic} alt="me" class="myPic" />
            </div>
            <div class="grid-item grid-item-2">
                <h1>Hello, I'm Mariana</h1>
                <h2>A Master of Physics graduate in Space Science and Robotics looking forward to apply my knowledge
                    of astrophysics and robotic simulations, while developing my skills. I have a keen interest in space robotics
                    and I'm enthusiastic to get involved with the space industry.
                </h2>
               
            </div>
            <div class="grid-item grid-item-3">
                <button onClick={onBttonClick} class="cvBtton">My CV</button>
            </div>

        </div>
        
    );
};

function onBttonClick (){
    window.open(MariCV, '_blank', 'noopener')
}

export default Home;