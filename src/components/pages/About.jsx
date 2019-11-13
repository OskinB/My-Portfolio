import React, { useState, useEffect } from "react";
import { createClient } from 'contentful';
import "../../App";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import RandomFacts from "../RandomFacts";


const Portfolio = () => {

    const [aboutMe, setAboutMe] = useState([]);

    useEffect(() => {
        // Create Contentful client
        const client = createClient({
            space: 'adiok1jnhv9f',
            accessToken: 'JYCP8-I1NtiaQu495eLZfxOSV9zoQIrHcHf_fZqkD2A'
        });

        // Get projects
        client.getEntries({
            content_type: "aboutMe"
        }).then(entries => {
            setAboutMe([...aboutMe, ...entries.items]);
        });
    }, []);
    // console.log(aboutMe);

    return (
        <div className="container">
            <AboutMe about={aboutMe} />
            <Skills about={aboutMe} />
            <RandomFacts about={aboutMe}/>
        </div>
    );
}

export default Portfolio;