import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <p><strong>Contact me!</strong></p>
            <div class="wrapper">
                <a href="mailto:maravelo200@gmail.com" class="fa fa-google"></a>
                <a href="https://www.linkedin.com/in/mariana-ravelo-guedez/" class="fa fa-linkedin" target="_blank" rel="noreferrer"></a>
                <a href="https://github.com/Mariana-Ravelo" class="fa fa-github" target="_blank" rel="noreferrer"></a>
            </div>
        </footer> 
    );
};

export default Footer;
