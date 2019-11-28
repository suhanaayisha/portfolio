import React, { Component } from "react";

class Dubizzle extends Component {
    render() {
        return(
            <div class="experience-comp" >
                <h2 class="company">Dubizzle</h2>
                <h2 class="role"> Software Developer, Intern </h2>
                <ul>
                    <li>Worked with python web apps and wrote unit tests for the same using pytest frameworks such as tavern. </li>
                    <li>Used docker to create, deploy and run applications within containers. </li>
                    <li>Wrote code for react applications and tested the user interface using Cypress and Jest.</li>
                    <li>Wrote pipelines to deploy most of the frontend applications on an application using Jenkins.</li>
                    <li>The applications were deployed on AWS cloud computing services</li>
                    <li>Integrated tools such as Lighthouse with Jenkins to get the performance analytics of the deployed applications.</li>
                    <li>Migrating the applications from github to gitlab</li>
                </ul>
                

            </div>
        )
    }
}

export default Dubizzle;