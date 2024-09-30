import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary />
        <footer className="text-center">
          <small>
            This project was coded by Analivia Costa and is{" "}
            <a
              href="https://github.com/analiviag/dictionary-project"
              target="_blank"
            >
              open-sourced on GitHub
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
