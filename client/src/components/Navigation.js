import React, { Component } from "react";
import { NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';


class Navigation extends Component {
    render() {
        return(
            <div>
                <nav class="vertical-menu" id="mainNav">
            
                    <div class="container">
                    <div class="intro">
                        <h2>
                            <Link 
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='some-class' 
                                activeClass='active'
                            >
                            Suhana <br/> Ayisha
                            </Link>    
                        </h2>
                        <h3>
                            Full Stack Developer
                        </h3>
                        <hr></hr>
                    </div>   
                        <div >
                            <ul >
                                <li >
                                    <Link 
                                    to="about" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    >
                                    About Me
                                    </Link>  
                                </li>
                                <li >
                                    <Link 
                                    to="experience" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    >
                                    Experience
                                    </Link>  
                                    
                                </li>
                                <li >
                                    <Link 
                                    to="projects" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    >
                                    Projects
                                    </Link>  
                                </li>
                                <li >
                                    <Link 
                                    to="skills" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    >
                                    Skills
                                    </Link> 
                                    
                                </li>
                                <li >
                                    <Link 
                                    to="education" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    >
                                    Education
                                    </Link>
                                </li>
                                <li >
                                    <Link 
                                    to="contact" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500} 
                                    className='some-class' 
                                    activeClass='active'
                                    offset={0}
                                    >
                                    Contact
                                </Link>
                                </li>
                            </ul>
                        
                       
                        </div>
                        
                    </div>
                </nav>
            </div>
        )
    }

}

export default Navigation;