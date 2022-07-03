import React from "react";
import "./App.css";
import {ForgotPassword}from "./pages/auth/ForgotPassword";
import {Login} from "./pages/auth/Login";
import {Register} from "./pages/auth/Register";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { NoteDetails } from "./pages/auth/NoteDetails";
import { CreateNote } from "./components/notes/CreateNote";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="note/:id" element = {<NoteDetails />} />
          <Route path="create" element = {<CreateNote/>} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
