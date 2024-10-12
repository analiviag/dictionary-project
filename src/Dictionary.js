import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleSearch(response) {
    setResults(response.data);
  }

  function handlePhotosSearch(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "bba264o26c1cdt003d73631d7a2a1f27";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleSearch);

    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;

    axios.get(imgApiUrl).then(handlePhotosSearch);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="form"
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <div className="hint">e.g. car, flower, book, etc</div>
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
