import './App.css';
import Alert from './components/Alert';

import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

import React, {useState} from 'react';

// import About from './components/About';

// import {
//   createBrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
       setAlert(null);
    }, 1500);

  }

  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <Route> */}

    <NavBar title="Hello" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path='/'>
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
        </Route>
      </Switch>
    
    
    </Route> */}
    <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
    </div>

    </>
  );
}

export default App;
