import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  var [Title, settitle] = React.useState([[]]);
  function add(title, text) {
    settitle([...Title, [title, text]]);
  }
  function deleted(id) {
    var arr = [];
    Title.filter((title, index) => {
      if (index != id) {
        arr.push(title);
      }
    });
    settitle(arr);
  }
  function print(event, index) {
    if (event.length != 0) {
      return (
        <Note
          id={index}
          title={event[0]}
          content={event[1]}
          onCheck={deleted}
        />
      );
    }
  }
  return (
    <div>
      <Header />
      <CreateArea onChecked={add} />
      {Title.map(print)}
      <Footer />
    </div>
  );
}

export default App;
