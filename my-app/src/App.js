// import logo from './logo.svg';
import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React,{useState}  from 'react';



function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
  }

  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.color='white';
      document.body.style.backgroundColor='#050d42';
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.color='#050d42';
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Welcome to my text utils application"  mode={mode} alert={showAlert}/>
      </div>
      <div className="container text-sm-center fs-0.5">
        <h1>About Us</h1>
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;
