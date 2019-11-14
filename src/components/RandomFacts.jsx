import React from "react";
import "../App";

const RandomFacts = (props) => {
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
                            <div className="random-facts">
                                <p> > {random.fields.randomFacts}</p>
                            </div>
                            <p>Go to my</p>
                            <a href={random.fields.githubLink} target="_blank" > <img src={require('../assets/github-icon-dark.png')} alt="GitHub" /></a>
                        </div>
                    );
                })}
        </div>
    );
}

export default RandomFacts;