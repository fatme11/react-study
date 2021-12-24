import logo from './logo.svg';
import './App.css';
import ShoppingList from "./components/ShoppingList";
import * as ReactDOM from "react-dom";
import React from "react";


function App() {
  // const element = <h1>hello, world</h1>;
  const element = React.createElement(
    'h1',
    {
      className: 'greeting'
    },
    'hello, world!'
  )

  return (
    <div className="App">
      <ShoppingList name={'哼'}/>
      {element}
    </div>
  );
}

export default App;
