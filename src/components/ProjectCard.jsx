import React from "react";
import "../App";
import ProjectModal from "./ProjectModal";

const ProjectCard = (props) => {

    return (
        <div>
            {props.projects.length &&
                props.projects.map((project, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card-info">
                                <div className="port-img">
                                    <img src={project.fields.projectCover.fields.file.url} alt="Cover" />
                                </div>

                                <div className="port-info">
                                    <h2>{project.fields.nameOfProject}</h2>
                                    <h4>{project.fields.projectNameInfo}</h4>
                                </div>

                                <div className="port-btn">
                                    <a href={"#" + project.sys.id}>Closer Look</a>
                                </div>
                                <ProjectModal key={index} project={project} />
                            </div>

                        </div>
                    );
                })}
        </div >
    );
}

export default ProjectCard; 