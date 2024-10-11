import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="section">
        <h4>{props.meaning.partOfSpeech}</h4>

        <div>
          <p>
            <strong>Definition: </strong>
            {props.meaning.definition}
          </p>
        </div>

        <Example example={props.meaning.example} />

        <br />

        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
