import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </header>
    </>
  );
};
