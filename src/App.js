import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>What word do you want to look up?</h1>
        <Dictionary defaultKeyword="sunset" />
        <footer className="text-center mb-5">
          <small>
            This project was coded by Analivia Costa and is{" "}
            <a
              href="https://github.com/analiviag/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
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
