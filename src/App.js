import "./styles/style.css";
import React from "react";
import News from "./components/News/News";

function App() {
  return (
      <div className="Wrapper">
        <h1>Лента новостей</h1>
        <News />
      </div>
  );
}

export default App;
