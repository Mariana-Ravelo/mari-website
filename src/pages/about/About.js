import myPic from "../../assets/mari.jpg";
import "./about.css"

function About() {
    return (
        <>
            <h1>About me</h1> 
            <div class="about-container">
                <div class="about-description">
                    <h3>I’m a recent <b>master’s graduate</b> from Aberystwyth University now based in London.</h3>
                    <h3>During my degree, I had the opportunity to develop programming solutions for various projects including, 
                        creating <b>robotic simulations</b>, <b>microcontroller programming</b> and developing <b>theoretical physics simulations</b>. 
                        I also like to <b>challenge</b> myself to work on personal projects where I gained knowledge of <b>SQL</b> and <b>web development</b>.</h3> 
                    <h3>I’m eager to get involved with the tech industry to <b>apply my knowledge</b> to solve problems and <b>develop my skills</b>.</h3>
                    <h3>On my free time I enjoy crafting, playing instruments and volunteering.</h3>
                </div>
                <div class="about-pic">
                    <img src={myPic} alt="me" class="myPic" />
                </div>
            </div>
        </>
    )
}

export default About;