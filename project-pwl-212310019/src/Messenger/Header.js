import React from "react";
import image from "../asset/download.png"
export default function Headers() {
  return (
    <header className="navbar navbar-expand-lg bg-primary bg-gradient sticky-top" style={{background: 'linear-gradient(to right, #007bff, #00bfff)'}}>
      <div className="container-fluid">
        <h1 className="fw-bold">
          <img
            src={image}
            height={48}
            width={48}
            className=""
          />
          IBI Kesatuan
        </h1>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-inline-secondary" type="submit">
            Search
          </button>
        </form>
        <div>
          <ul className="navbar-nav">
            <a className="nav-link active" href="#">
              Home
            </a>
            <li className="nav-link" href="#">
              -
            </li>
            <a className="nav-link" href="#">
              PWL
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
