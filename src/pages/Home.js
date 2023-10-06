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
                <h2>A Master of Physics graduate in Space Science and Robotics.
                </h2>
            </div>
            <div class="grid-item grid-item-3">
                <button onClick={onBttonClick} class="cvBtton">My CV</button>
            </div>
            <div class="grid-item grid-item-4">
                <h2>Skills and Interests:</h2>
            </div>
            <div class="grid-item grid-item-5">
                <h3>Robotic Simulations</h3>
                <h3>Theoretical Physics Simulations</h3>
                <h3>Microcontroller Programming</h3>
                <h3>Web Development</h3>
            </div>
        </div>
        
    );
};

function onBttonClick (){
    window.open(MariCV, '_blank', 'noopener')
}

export default Home;