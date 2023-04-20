import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="textContainer">
      <h1>patneal.codes</h1>
      <h2>Software Engineer @ DEPT</h2>
      <h3>A less terrible personal site <i>ideally</i> coming "soon-ish"</h3>
    </div>
    <ul className="socialLinks">
      <li><a href="https://github.com/patnealcodes">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/patnealcodes/">LinkedIn</a></li>
    </ul>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
