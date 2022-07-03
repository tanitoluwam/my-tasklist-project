import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const CreateNote = ({ item }) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <div className="row">
      <div className="col-6 w-50 ">
        <form>
          <div className="mb-3  w-75 mx-auto mt-5">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control mb-5  mx-auto py-2 border-bottom border-dark"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="notes" className="form-label mt-3">
              Notes
            </label>
            <textarea
              className="form-control  border border-dark"
              id="notes"
              name="notes"
              rows="15"
              placeholder="edit your notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between w-25 mx-auto">
            <button className="btn btn-lg text-light rounded-pill cta-btn mt-2">
              cancel
            </button>
            <button className="btn btn-lg text-light rounded-pill cta-btn mt-2">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className=" col-6 bg-white container w-50 vh-100">
        <div className="row flex justify-content-center h-100">
          <div className="bg-dark text-light p-5">
            <div className="d-flex justify-content-between">
              <h5 className="border-bottom mb-2">{title}</h5>
            </div>
            <p className="note-details">{notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
