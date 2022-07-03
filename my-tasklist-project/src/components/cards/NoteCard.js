import React from "react";
import { Link } from "react-router-dom";

export const NoteCard = ({ item }) => {
  return (
    <div>
      <div className="card task-box mx-2">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{item.title}</h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link className="dropdown-item" to="/create">
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={`/note/${item.id}`}>
                    View
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="card-text">{item.content}</p>
        </div>
      </div>
    </div>
  );
};
