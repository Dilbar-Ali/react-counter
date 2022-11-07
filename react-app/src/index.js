import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






















function SumEquation(a,b){
    
  try{
      console.log("This is try ")
      throw("This through some Error")
      
  }
  catch(err){
      console.log("This is is "+err)
  }
  finally{
      return a+b;
  }
  
}
let x=5;

let y=10;
console.log(`The sum of ${x} and ${y} is  = ${SumEquation(x,y)}`)