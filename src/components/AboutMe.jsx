import React from "react";
import "../App";

const AboutMe = (props) => {

    return (
        <div>
            {props.about.length &&
                props.about.map((about, index) => {
                    return (
                        <div  key={index} className="page-about">
                            <div className="section-title">
                                <h1>{about.fields.pageTitle}</h1>
                                <h2>{about.fields.name}</h2>
                            </div>
                            <div className="about-info">
                                <p className="about-info">{about.fields.personalDescription}</p>
                                <div>
                                    <img src="" alt="Selfie"/>
                                    <h3>For more information or CV, </h3>
                                    <h3>contact me</h3>
                                    <h4>{about.fields.contactEmail}</h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default AboutMe;