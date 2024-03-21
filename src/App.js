import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743'
      showAlert("Dark mode enable", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert("Light mode enable", "success")
    }
  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About us" toggleText='Enable DarkMode' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm heading="Add text below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
    </>
  );
}

export default App;
