import React from "react";
import "../App";

const Skills = (props) => {
    console.log(props);
    return (
        <div>
            {props.about.length &&
                props.about.map((skills, index) => {
                    return (
                        <div key={index} className="page-about-skills">
                            <div className="container">
                                <h1>My Skills</h1>
                                <div className="skills-info">
                                    <div className="skill-level">
                                        <h3>Intermediate</h3>
                                        <div className="skill">
                                            {skills.fields.skillsIntermediate.length &&
                                                skills.fields.skillsIntermediate.map((skills, index) => {
                                                    return (
                                                        <img key={index} src={skills.fields.file.url} alt="Programming Language" />
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    <div className="skill-level">
                                        <h3>Beginner</h3>
                                        <div className="skill">
                                            {skills.fields.skillsBeginner.length &&
                                                skills.fields.skillsBeginner.map((skills, index) => {
                                                    return (
                                                        <img key={index} src={skills.fields.file.url} alt="Programming Language" />
                                                    );
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default Skills;