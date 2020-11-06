import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className="logo" icon="list-alt" />
      <h1>Todo List</h1>
    </header>
  );
};

export default Header;
