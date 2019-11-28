import React, { Component } from "react";
import Dubizzle from './experience/Dubizzle';
import Scantech from './experience/Scantech';
import Pivot from './experience/Pivot';
class Experience extends Component {
    render() {
        return(
            <div class="common experience" id="experience">
                <h1>Experience</h1>
                <Dubizzle/>
                <Scantech/>
                <Pivot/>
            </div>
        )
    }
}

export default Experience;