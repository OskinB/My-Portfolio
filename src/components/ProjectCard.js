import React from "react";
import "../App";

function ProjectCard() {
    return (
        <div>
            <div className="card">
                <div className="port-img">
                    <img src="" alt="Project Cover" />
                </div>
                <div className="port-info">
                    <h2>Title of project 001</h2>
                    <p>Short description of project</p>
                </div>
                <div className="port-btn">
                    <button type="button">Closer look</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
