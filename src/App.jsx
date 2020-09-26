import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import importedStore from './redux/store'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Provider store={importedStore}>
            <Counter />
          </Provider>
        </Router>
      </header>
    </div>
  );
}

export default App;