import React from "react";
import "./App.css";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { NoteDetails } from "./pages/NoteDetails";
import { CreateNote } from "./components/notes/CreateNote";
import { AuthContextProvider } from "context/AuthContext/AuthContext";
import { LoadingContextProvider } from "context/LoadingContext/LoadingContext";

function App() {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Login />;
  }
  return (
    <LoadingContextProvider>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="note/:id" element={<NoteDetails />} />
          <Route path="create" element={<CreateNote />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthContextProvider>
    </LoadingContextProvider>
  );
}

export default App;
