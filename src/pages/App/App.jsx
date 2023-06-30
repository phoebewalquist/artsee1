import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewEventPage from "../NewEventPage/NewEventPage";
import CreateEventPage from "../CreateEventPage/CreateEventPage";
import NavBar from "../../components/NavBar/NavBar";
import EventsList from "../../components/EventsList/EventsList"


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
            <Route path="/events" element={<EventsList />} />
          </Routes>
        
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
