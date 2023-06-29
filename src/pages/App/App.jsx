import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewEventPage from "../NewEventPage/NewEventPage";
import CreateEventPage from "../CreateEventPage/CreateEventPage";
import NavBar from "../../components/NavBar/NavBar";


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar />
      {user ? (
        
          <Routes>
            <Route
              path="/events/new"
              element={<NewEventPage user={user} setUser={setUser} />}
            />
            <Route path="/events" element={<CreateEventPage />} />
            <Route path="/*" element={<Navigate to="/events/new" />} />
          </Routes>
        
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
