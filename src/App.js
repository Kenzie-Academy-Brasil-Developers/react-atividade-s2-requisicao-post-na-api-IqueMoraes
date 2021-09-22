import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Login from "./components/Login";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {login ? <Display /> : <Login setLogin={setLogin} />}
      </header>
    </div>
  );
}

export default App;
