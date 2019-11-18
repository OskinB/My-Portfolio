import React, { useState, useEffect } from "react";
import { createClient } from 'contentful';
import "../../App";
import ProjectCard from "../ProjectCard";
import Intro from "../Intro";

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Create Contentful client
        const client = createClient({
            space: "adiok1jnhv9f",
            accessToken: "JYCP8-I1NtiaQu495eLZfxOSV9zoQIrHcHf_fZqkD2A"
        });

        // Get projects
        client
            .getEntries({
                content_type: "project"
            })
            .then(entries => {
                setProjects([...projects, ...entries.items]);
            });
    }, []);

    return (
        <div className="container">
            <Intro/>
            <div className="section-title">
                <h1>My Portfolio</h1>
                <h2>Take a look at my work</h2>
            </div>
            <ProjectCard projects={projects} />
        </div>
    );
}

export default Portfolio;