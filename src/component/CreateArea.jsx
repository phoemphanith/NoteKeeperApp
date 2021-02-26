import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import { Add } from "@material-ui/icons";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });
  const [isInput, setIsInput] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputNote((prevValue) => {
      return { ...inputNote, [name]: value };
    });
  }

  function handleClick() {
    setIsInput(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          props.onAdd(inputNote);
          setInputNote({ title: "", content: "" });
          setIsInput(false);
          event.preventDefault();
        }}
      >
        {isInput ? <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title} /> : null}
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isInput ? 3 : 1}
          value={inputNote.content}
        />
        <Zoom in={isInput}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
