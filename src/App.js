import React from 'react';
import './App.css';
import DataGridComponent from './components/DataGridComponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Grid </h1>
      </header>
      <div className="container">
        <DataGridComponent />
      </div>
    </div>
  );
}

export default App;
