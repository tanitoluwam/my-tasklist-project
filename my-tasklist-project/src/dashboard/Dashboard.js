import { useState } from "react";
import { Navbar } from "../components/navigation/Navbar";
import { FormModal } from "../components/modal/FormModal";
import { NoteCard } from "../components/cards/NoteCard";
import { Link } from "react-router-dom";
import { Greeting } from "../components/greeting/Greeting";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const notes = [
    {
      id: 1,
      title: "Monday",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      title: "Tuesday",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      title: "Wednesday",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      title: "Thursday",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-between w-100 py-4">
          <h2 className="s-2 text-light"> <Greeting /> </h2>
          <Link to="/create" className="text-decoration-none text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-plus-lg add-note-btn"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>   
            </Link>
          
        </div>
        <div className="row mt-5">
          {/* looping through the notes array */}
          {notes.map((item, index) => (
            <div className="col-md-3">
              <NoteCard key={index} item={item} />
              {/* item props passed to be recieved in the notecard*/}
            </div>
          ))}
        </div>
      </div>

      <FormModal isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
};
