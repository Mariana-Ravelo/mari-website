import React from "react";
import {useRef} from "react";
import {FaAngleDown} from "react-icons/fa";
import MariCV from "../../assets/MariCV.pdf";
import myPic from "../../assets/mari.jpg";
import Tabs from './Tabs';
import "./home.css"

function Home() { 
    console.log(myPic); 

    const onBttonClick = () => {
        window.open(MariCV, '_blank', 'noopener')
    }

    const ref = useRef(null);
    
    const scrollDownClick = () => {
        ref.current?.scrollIntoView({behaviour: 'smooth'});
    };

    return (
        <div>
            <div className="home-section-1">
                <div className="home-container">
                    <div className="home-pic-cv">
                        <div className="home-pic"> <img src={myPic} alt="me" class="myPic" /> </div>
                        <div className="home-cv"> <button onClick={onBttonClick} class="cvBtton">My CV</button> </div>
                    </div>
                    <div className="home-description">
                        <h1>Hello, I'm Mariana</h1>
                        <h2>A Master of Physics graduate in Space Science and Robotics. </h2>
                    </div>

                </div>
                <div className="scroll-button-container">
                    <button className="scroll-button" onClick={scrollDownClick}><FaAngleDown/></button>
                </div>  
            </div>

            <div className="skills-section">
                <div ref={ref} className="skills-title">
                    <h1>Skills</h1>
                </div>
                <div className="tabs-container">
                    <Tabs />
                </div>
                
            </div>


            <div style={{ height: '50rem' }} />
            
        </div>

    );
}

export default Home;