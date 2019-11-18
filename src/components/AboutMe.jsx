import React from "react";
import "../App";

const AboutMe = (props) => {

    return (
        <div className="container">
            {props.about.length &&
                props.about.map((about, index) => {
                    return (
                        <div key={index} className="page-about-me">
                            <div className="section-title">
                                <h1>{about.fields.pageTitle}</h1>
                                <h3>{about.fields.name}</h3>
                            </div>
                            <div className="about-info">
                                <p>{about.fields.personalDescription}</p>
                                <div className="about-right-column">
                                    <img src={about.fields.selfImage.fields.file.url} alt="Selfie" />
                                    <div className="contact">
                                        <h3>For more information or CV, </h3>
                                        <h3 className="contact-blue">contact me</h3>
                                        <h4>{about.fields.contactEmail}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default AboutMe;