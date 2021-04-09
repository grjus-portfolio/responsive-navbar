import React, { Component } from "react";
import "../styles/style.TopBar.css";

export default class TopBar extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">Engineering Toolbox</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Tools</a>
            </li>
            <li>
              <a href="#">Manuals</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>
    );
  }
}
