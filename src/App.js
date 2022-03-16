import logo from "./logo.svg";
import "./App.css";

const theNumber = 333;
const singer = {name:"Hasan", address: "barisal"}

//another way to add style.
const singerStyle = {
  color: "purple",
  backgroundColor: "white"
}

/* 
JSX =>
============================================= 
-javaScript xml.
-allows us to write html in react.
-writhing and adding html in react in easier.
*/

function App() {
  return (
    <div className="App">
      {/* have to use className instead of class */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude. react . how are you</h3>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* here dont need to use "$" to declare template sting's variable. */}
        <p style={singerStyle}>name: {theNumber}</p>
        <p style= {{backgroundColor:"red",color:"yellow"}}>name: {singer.name} </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
