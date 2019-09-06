import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/projects')
    .then(res => {
      console.log("response", res.data)
      setProjects(res.data)
    })
    .catch(error => console.log('error', error.response))
  }, [])

  return (
    <div className="App">
      {projects.map(pro => {
        return(
          <div key={pro.id}>
            <h3>{pro.name}</h3>
            <p>{pro.description}</p>
          </div>
        )
      })}
  </div>
  );
}

export default App;
