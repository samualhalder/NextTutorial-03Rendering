import { log } from "console";
import React from "react";
import Links from "./Links";
import SearchBar from "./SearchBar";

function Navbar() {
  console.log("navbar is loaded");

  return (
    <div>
      <Links />
      <SearchBar />
    </div>
  );
}

export default Navbar;
