import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.scss";

import Header from "./components/Header.jsx";

const App = () => {
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
  // console.log(projects);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
