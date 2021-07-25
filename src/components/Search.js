import React from "react";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <input
        onChange={onChange}
        type="text"
        placeholder="검색"
        value={text}
      ></input>
      <button>Search</button>
    </>
  );
};

export default Search;
