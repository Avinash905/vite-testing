import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import fetchData from "../helper/apiCall";

function App() {
  const [count, setCount] = useState(0);

  const getUser = async (e) => {
    try {
      const temp = await fetchData(`/user/getuser`);
      setUsers(temp);
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [count]);

  return (
    <div className="App">
      <div>
        <a
          href="https://dunna-avinash.netlify.app/"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://github.com/Avinash905"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Testing vite react because create-react-app is not recommended by
        official react docs.
      </p>
    </div>
  );
}

export default App;
