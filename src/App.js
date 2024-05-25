import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import  { Login } from "./login";
import  { Register } from "./register";

function App() {
  const [form, setForm] = useState ('login');
  const tForm = (formNam) => {
    setForm (formNam);
  }
  return (
    <div className="App">
      {
      form === "login" ? <Login onFormSwitch={tForm}/> : <Register/>
      }
    </div>
  );
}

export default App;
