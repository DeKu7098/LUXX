import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Component1 } from './Component1';
import { Component2 } from './Component2';
import { Component3 } from './Component3';

function App() {
  return (
    <div className="App">
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;
