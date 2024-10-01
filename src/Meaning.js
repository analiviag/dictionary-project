import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definition.map((index, definition) => (
        <div key={index}>
          <p>{definition.definition}</p>
          <br />
          <em>{definition.example}</em>
        </div>
      ))}
    </div>
  );
}
