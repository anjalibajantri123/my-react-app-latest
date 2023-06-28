// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // SHOW ALERT 
  // need to pass parameters in function showalert function
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(()=>setAlert(null),3000);
   
  } 

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2a676e";
      showAlert("Dark Mode is Enabled","success");
      document.title = "Text Utilies - Dark Mode";
      // setInterval(()=>{
      //   document.title = "Text Utilies is Amazing Mode";  
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install Text Utilies Now";  
      // },2000);

    }else{
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light Mode as been Enabled","success");
      document.title = "Text Utilies - Light Mode";
      }  
    }

  return (
    <>
   
    {/* <Navbar mainTitle = 'TextUtils' homeText= 'Home' aboutText= 'About' /> */} 
      <Navbar mainTitle = 'TextUtils'  mode ={mode} toggleMode={toggleMode} />
      <Alert alert= {alert} />
      <div className='container my-3'>
          <Textform taheading= 'Enter the text' mode ={mode} toggleMode={toggleMode} showAlert={showAlert} />
          <About/>
      </div>
    

   
      {/* <BrowserRouter>
      <Navbar mainTitle = 'TextUtils'  mode ={mode} toggleMode={toggleMode} />
      <Alert alert= {alert} />
        <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='textform' element={<Textform taheading= 'Enter the text' mode ={mode} toggleMode={toggleMode} showAlert={showAlert} />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
 
  );
}

export default App;
