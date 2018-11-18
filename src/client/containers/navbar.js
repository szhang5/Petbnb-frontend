import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href=" ">
          Home
        </a>
        <a className="navbar-brand" href="#">
          Search Sitter
        </a>
        <a className="navbar-brand" href="#">
          Our Service
        </a>
        <a className="navbar-brand" href="#">
          Contact Us
        </a>
      </nav>
      /*<ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Search Sitter
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Our Service
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">
            Contact Us
          </a>
        </li>
      </ul>*/
      /*<div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          />
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          />
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          />
        </div>
      </div>*/
    );
  }
}

export default Navbar;
