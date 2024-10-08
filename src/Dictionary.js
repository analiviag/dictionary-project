import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleSearch(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "bba264o26c1cdt003d73631d7a2a1f27";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleSearch);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
