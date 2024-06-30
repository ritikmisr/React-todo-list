import React from 'react';

import AppBarComponent from './components/AppBar';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBarComponent />
      <TodoList />
    </div>
  );
}

export default App;
