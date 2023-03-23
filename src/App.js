import React from 'react';
import './App.css';
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './actionprovider';
import MessageParser from './messageparser';
import config from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
    </div>
  );
}

export default App;
