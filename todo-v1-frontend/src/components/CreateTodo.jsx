import { useState } from "react";

export function CreateTodo() {
  // local state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false,
            }),
          }).then(async function (response) {
            const data = await response.json();
            alert("todo created");
          });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
