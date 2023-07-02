import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
// import NewEventPage from "../NewEventPage/NewEventPage";
import CreateEventPage from "../CreateEventPage/CreateEventPage";
import NavBar from "../../components/NavBar/NavBar";
import EventsList from "../../components/EventsList/EventsList"
import EventDetail from "../../components/EventDetail/EventDetail"


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar />
      {user ? (
        
          <Routes>
            <Route path="/events" element={<EventsList />} />
            <Route path="/events/new" element={<CreateEventPage />} />
            <Route path="/events/:id/details" element={< EventDetail />} />
            <Route path="/*" element={<Navigate to="/events" />} />
          </Routes>
        
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
