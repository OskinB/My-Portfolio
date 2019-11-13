import React from "react";
import "../App";

const Skills = (props) => {
    console.log(props);
    return (
        <div>
            {props.about.length &&
                props.about.map((random, index) => {
                    return (
                        <div key={index} className="page-about">
                            <div className="section-title">
                                <h1>Random Facts</h1>
                            </div>
                            <img src="../assets/github-icon-dark.png" alt="GitHub"/>
                            <p>> {random.fields.randomFacts}</p>
                            <p>{random.fields.githubLink}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default Skills;