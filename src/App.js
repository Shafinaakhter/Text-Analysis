import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Text from './components/text/Text';
// import Project from './components/projects/Project';
// import Contact from './components/contact/Contact';
// import Home from './components/home/Home';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
    }else{
      setMode("light");
      document.body.style.backgroundColor = '#0c6396';
    }
  }  


  return (
    <div className="App">
     <Navbar mode={mode} toggleMode={toggleMode} />
     {/* <Home /> */}
     {/* <Project /> */}
     {/* <Contact /> */}

     <Text />
    </div>
  );
}

export default App;
