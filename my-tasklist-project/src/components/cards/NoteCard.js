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
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link className="dropdown-item" to="/note/:id">
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/note/1">
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
