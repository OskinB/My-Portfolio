import React from "react";
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import "../App";

const ProjectCard = (props) => {

    // const richTextOptions = {
    //   renderNode: {
    //     'embedded-asset-block': (node, children) =>
    //       `<img src="${node.data.target.fields.image.fields.file.url}" width="400">`
    //   }
    // };

    return (
        <div>
            {props.project.length &&
                props.project.map((project, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="port-info">
                                <h2>Title - {project.fields.nameOfProject}</h2>
                                <h4>Subtitle - {project.fields.projectNameInfo}</h4>
                                <p>Short description - {project.fields.shortDescriptionOfTheProject}</p>
                            </div>
                            <div className="port-img">
                                <img src='{project.fields.projectScreenshots.fields.file.url}' alt="Project Cover" />
                            </div>
                            <div className="port-btn">
                                <button type="button">Closer look</button>
                            </div>
                        </div>
                    );
                })}
        </div >
    );
}

export default ProjectCard; 