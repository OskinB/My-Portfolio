import React, { useState, useEffect } from "react";
import "./App.scss";
import { createClient } from 'contentful';
import ProjectCard from "./components/ProjectCard";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Create Contentful client
    const client = createClient({
      space: 'adiok1jnhv9f',
      accessToken: 'JYCP8-I1NtiaQu495eLZfxOSV9zoQIrHcHf_fZqkD2A'
    });

    // Get projects - Project / About me  ??????
    client.getEntries().then(entries => {
      setProjects([...projects, ...entries.items]);
      console.log(entries.items);
    });
  }, []);


  return (
    <div>
      <Header/>
      <div className="container">
        <section className="page-title">
          <h1>My Portfolio</h1>
          <h2>Take a look at my work</h2>
        </section>
        <section className="portfolio-cards">
          <ProjectCard project={projects} />
        </section>
      </div>
    </div>
  );
}

export default App;
