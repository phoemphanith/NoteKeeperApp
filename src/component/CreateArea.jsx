import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputNote((prevValue) => {
      return { ...inputNote, [name]: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.onAdd(inputNote);
          setInputNote({ title: "", content: "" });
          event.preventDefault();
        }}
      >
        <input onChange={handleChange} name="title" placeholder="Title" value={inputNote.title} />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputNote.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
