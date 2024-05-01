import React from "react";
import App from "./App";
function CreateArea(props) {
  var [title, setTitle] = React.useState("");
  var [tnote, settnote] = React.useState("");
  function titles(event) {
    setTitle(event.target.value);
  }
  function tnotes(event) {
    settnote(event.target.value);
  }
  function handle(event) {
    event.preventDefault();
    return props.onChecked(title, tnote);
  }
  return (
    <div>
      <form onSubmit={handle}>
        <input
          onChange={titles}
          value={title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={tnotes}
          value={tnote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
