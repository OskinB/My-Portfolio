import React, { useState, useEffect } from "react";
import "./App.scss";
import { createClient } from 'contentful';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";


const App = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Create Contentful client
    const client = createClient({
      space: 'adiok1jnhv9f',
      accessToken: 'JYCP8-I1NtiaQu495eLZfxOSV9zoQIrHcHf_fZqkD2A'
    });

    // Get projects - Project / About me 
    client.getEntries().then(entries => {
      setProjects([...projects, ...entries.items]);
      console.log(entries.items);
    });
  }, []);


  return (
    <Router>
      <div>
        <nav>
          <Link to='/' style={{ padding: 10 }}>Portfolio</Link>
          <Link to='/about' style={{ padding: 10 }}>About Me</Link>
        </nav>
        <Route path='/' exact component={Portfolio} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  );
}

export default App;
