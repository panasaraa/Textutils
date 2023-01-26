import './App.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "danger");
      document.title = 'Textutils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "danger");
      document.title = 'Textutils - Light Mode';
    }


  }

  return (
    <>
      {/* <Navbar title="Textutils" aboutText='Textutils'/> */}
      {/* <Navbar/> */}
       <Router> 
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
           <Switch>
            <Route exact path="/">
              <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze Below" />
             </Route> 
             <Route path="/about">
              <About mode={mode} />
            </Route> 
          </Switch>
        </div>
       </Router>
    </>
  );
}

export default App;
