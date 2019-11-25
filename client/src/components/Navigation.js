import React, { Component } from "react";
import { NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return(
            <div>
                <nav class="vertical-menu" id="mainNav">
            
                    <div class="container">
                        <h2>
                        <NavLink to='/' activeClassName='is-active' exact={true}>Suhana <br/> Ayisha</NavLink> 
                        </h2>
                        <h3>
                            Full Stack Developer
                        </h3>
                        <hr></hr>
                        
                        <div >
                            <ul >
                                <li >
                                    <NavLink to='/about' activeClassName='is-active' exact={true}>About Me</NavLink> 
                                </li>
                                <li >
                                    <NavLink to='/experience' activeClassName='is-active' exact={true}>Experience</NavLink>   
                                </li>
                                <li >
                                    <NavLink to='/projects' activeClassName='is-active' exact={true}>Projects</NavLink>     
                                </li>
                                <li >
                                    <NavLink to='/skills' activeClassName='is-active' exact={true}>Skills</NavLink>     
                                </li>
                                <li >
                                    <NavLink to='/education' activeClassName='is-active' exact={true}>Education</NavLink>     
                                </li>
                                <li >
                                    <NavLink to='/contact' activeClassName='is-active' exact={true}>Contact</NavLink>     
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