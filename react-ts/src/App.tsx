import "./App.css";
import Card from "./component/Card";
import Header from "./component/Header";
import Users from "./component/Users";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Card />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <div>
        <h2>User</h2>
        <p>Test de obtención de usuarios usando UseEffect y api externa</p>
        <Users />
        </div>
    </div>
  );
}

export default App;
