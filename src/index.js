import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MusicContextProvider } from "./store/music";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MusicContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MusicContextProvider>
);

