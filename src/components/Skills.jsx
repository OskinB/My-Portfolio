import React from "react";
import "../App";

const Skills = (props) => {
    console.log(props);
    return (
        <div>
            {props.about.length &&
                props.about.map((skills, index) => {
                    return (
                        <div key={index} className="page-about">
                            <div className="section-title">
                                <h1>My Skills</h1>
                                <h2>Texti text?</h2>
                            </div>
                            <div className="skills-info">
                                <div>
                                    <h3>Intermediate</h3>
                                    <img src="{skills.fields.skillsIntermediate.fields}" alt="Programming Language" />
                                </div>
                                <div>
                                    <h3>Beginner</h3>
                                    <img src="{skills.fields.skillsBeginner.fields}" alt="Programming Language" />
                                </div>
                            </div>    
                        </div>
                    );
                })}
        </div>
    );
}

export default Skills;