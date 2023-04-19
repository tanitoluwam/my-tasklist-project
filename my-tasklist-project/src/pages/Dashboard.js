import { useState, useEffect } from "react";
import { Navbar } from "../components/navigation/Navbar";
import { FormModal } from "../components/modal/FormModal";
import { NoteCard } from "../components/cards/NoteCard";
import { Link } from "react-router-dom";
import { Greeting } from "utils/Greeting";
import { readNotes } from "service";
import { AddNoteIcon } from "components/vectors/AddNoteIcon";
import { useAuthContext } from "context/AuthContext/AuthContext";
import { useLoadingContext } from "context/LoadingContext/LoadingContext";

export const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const { isLoading, setIsLoading } = useLoadingContext();
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);
  const { userProfile, getUserProfile } = useAuthContext();

  const getNotes = async () => {
    const options = { sortBy: "asc", page: 1, limit: 2 };
    try {
      setIsLoading(true);
      const { data } = await readNotes(options);
      setNotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
    getUserProfile();
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-between w-100 py-4">
          <h2 className="s-2 text-light">
            <Greeting /> {userProfile?.name},
          </h2>
          <Link to="/create" className="text-decoration-none text-secondary">
            <AddNoteIcon />
          </Link>
        </div>
        <div className="row mt-5">
          {notes.map((note) => (
            <div className="col-md-3" key={note._id}>
              <NoteCard note={note} />
            </div>
          ))}
        </div>
      </div>
      <FormModal isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
};
