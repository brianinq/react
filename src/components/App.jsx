import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function emojify(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojify)}</dl>
    </div>
  );
}

export default App;
