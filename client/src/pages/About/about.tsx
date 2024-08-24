import React from "react";
import './about.css';
import aboutImage from '../About/about.jpg';

export const About:React.FC=()=>{
    return(
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="About us" />
            </div>
            <div className="about-content">
            <h3>Welcome to Recipe Hub!</h3>
                
                <p>Where flavors meet creativity and culinary passion knows no bounds. Our platform is a melting pot of diverse tastes, offering a space for food lovers to discover, create, and share recipes that inspire and delight. Whether you're a seasoned chef or a home cook, join us in celebrating the art of cooking.</p>
            
                    <p>We are a group of enthusiastic undergraduates from the Department of ICT at the University of Sri Jayewardenepura. This website is the culmination of our 3rd-year final project for the Web Application Development course module. Our mission is to unite food enthusiasts across the globe, fostering a vibrant community that celebrates culinary creativity. Meet our team....</p>    
                    <ul>
                        <li> A.D.K.Chamika</li>
                        <li>P.G.B.Malshani</li>
                        <li>R.M.H.D.Rajaguru</li> 
                        <li> D.D.T.O.Wickramaratne</li>
                    </ul>
                    <h3>Contact Us</h3>
                    <div className='contact'>
                    <p >We'd love to hear from you! Reach out to us at:<br/>
                    Email: <a href="mailto:recipehub@gmail.com">recipehub@gmail.com</a></p>
                    </div>
            </div>
            
        </div>
        
        
    );
}