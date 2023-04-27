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
import {toast} from "react-toastify"

export const Dashboard = () => {
  const [notes, setNotes] = useState([]);
 const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => setIsOpen(true);
  const hideModal = () => setIsOpen(false);

  const getNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await readNotes({ sortBy: "asc", page: 1, limit: 2 });
      setNotes(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-between w-100 py-4">
          <h2 className="s-2 text-light">
            <Greeting /> {user?.name}
          </h2>
          <Link to="/create" className="text-decoration-none text-secondary">
            <AddNoteIcon />
          </Link>
        </div>
        <div className="row mt-5">
          {notes?.map((note) => (
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
