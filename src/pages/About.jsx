import picture from '/assets/images/Profile.jpg'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="page">
            <div className="page-header bg-filter">
                <h1>About Me</h1>
            </div>
            
            <div className = "about-me-page bg-filter justify-center mt-10">
                <h2 className="w-full">Hello! My name is Hy and </h2>
                <h2 className="w-full">I'm a full stack web developer</h2> 
                <div className ="flex flex-wrap justify-center">
                    <div className = "flex p-2 m-2 justify-start">
                        <img src={picture} width="500px" className="about-me-profile-picture m-auto"></img>
                    </div>
                    <div className = "about-me-text-container p-2 m-2 text-left">
                        <p> Thank you for visiting my profile page!</p>
                        <p> I will soon be completing an intense six-month Coding Bootcamp run by Monash University.</p>
                        <p> I consider myself motivated, driven, methodical and meticulous in my work and take pride in excelling at problem solving to meet end-user needs.</p>
                        <p> I would love the opportunity to put my skillset to use, I have a strong background in the Australian public health system with almost 20 years experience. I am passionate in Digital Health industry but I am also open to venturing outside my comfort zone.</p>
                        
                        <p> Please take a look around my portfolio and don't hesitate to contact me!  </p>
                        <div className="text-center">
                            <Link to="/Contact" className="link about-me-contact-me">Contact Me</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
