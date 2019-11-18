import React from "react";
import "../App";

const RandomFacts = (props) => {
    console.log(props);
    return (
        <div className="container">
            {props.about.length &&
                props.about.map((random, index) => {
                    return (
                        <div key={index} className="page-about-random">
                            <div className="section-title">
                                <h1>Random Facts</h1>
                            </div>
                            <div className="random-facts">
                                {random.fields.randomFacts.length &&
                                    random.fields.randomFacts.map((fact, index) => {
                                        return (
                                            <div className="fact">
                                                <img src={require('../assets/facts.png')} alt="Bulletin" />
                                                <p key={index}>{fact}</p>
                                            </div>
                                        );
                                    })}
                            </div>
                            <div className="my-github">
                            <p>Go to my</p>
                            <a href={random.fields.githubLink} > <img src={require('../assets/github-icon.png')} alt="GitHub" /></a>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default RandomFacts;