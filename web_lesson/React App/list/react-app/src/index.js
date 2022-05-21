import React from 'react';
import ReactDOM from 'react-dom/client';
import Solution from './components/solution';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Solution />
    </div>
    
  </React.StrictMode>
);

