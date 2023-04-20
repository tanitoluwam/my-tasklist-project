import { CustomErrorComponent } from "components/shared/CustomErrorComponent";
import { http } from "../plugins/Axios";

export const createNote = async (payload) => {
  try {
    const { data } = await http.post("/api/notes", payload);
    return data;
  } catch (error) {
    CustomErrorComponent({ message: error.message });
  }
};

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
