import { http } from "../plugins/Axios";

export const createNote = async (payload) => http.post("/api/notes", payload);

export const readNotes = async (options) =>
  http.get("/api/notes", { params: options });

export const readNote = async (noteId) => http.get(`/api/notes/${noteId}`);

export const updateNote = async (noteId) =>
  http.put(`/api/notes/${noteId}`, {
    title: "title",
    description: "description",
    note: "note",
  });

export const deleteNote = async () => http.delete("/api/notes/:noteId");
