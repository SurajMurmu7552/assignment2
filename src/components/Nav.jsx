import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { searchQuery } from "../redux/searchSice.js";

export default function Nav() {
  const dispatch = useDispatch();

  function handleSearch(e) {
    dispatch(searchQuery(e.target.value));
  }

  return (
    <div className="nav">
      <div className="nav-container container">
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/shortlisted">shortlisted</Link>
          </li>
          <li className="nav-link">
            <Link to="/rejected">rejected</Link>
          </li>
        </ul>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
