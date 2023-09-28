import myPic from "../assets/mari.jpg";

function About() {
    return (
        <div class="flex-container">
            <div class="flex-1">
                <h2>About me</h2> 
                <hr></hr>
            </div>
            <div class="flex-2">
                <h2> helloelloello</h2>
                <img src={myPic} alt="me" class="myPic" />
            </div>
        </div>
    )
}

export default About;