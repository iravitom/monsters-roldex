import React from "react";
import "./search.styles.css";

export const Search = ({ onChangeEvent, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      onChange={onChangeEvent}
      placeholder="placeholder"
    />
  );
};
