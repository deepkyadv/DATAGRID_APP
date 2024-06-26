import React from 'react';
import './App.css';
import DataGridComponent from './components/DataGridComponents';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Datagrid Using Material UI </h1>
      </header>
      <div className="container">
        <DataGridComponent />
      </div>
    </div>
  );
}

export default App;
