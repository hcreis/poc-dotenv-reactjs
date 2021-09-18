import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("aaa: ", process.env);
  console.log("bbb: ", process.env.REACT_APP_NOT_SECRET_CODE);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{process.env.NODE_ENV}</p>
      </header>
    </div>
  );
}
export default App;
