import { DetailsIcon } from "components/vectors/DetailsIcon";
import { Link, useNavigate } from "react-router-dom";

export const NoteCard = ({ note }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card task-box mx-2,">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <DetailsIcon />
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
                  <button
                    className="dropdown-item"
                    onClick={() => navigate(`/note/${note._id}`)}
                  >
                    View
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate(`/note/${note._id}`)}
                  >
                    delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.note}</p>
        </div>
      </div>
    </div>
  );
};
