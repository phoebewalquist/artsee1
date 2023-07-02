import "./EventDetail.css";
import { useEffect, useState } from "react";
import * as eventsAPI from "../../utilities/events-api";
import { useParams } from "react-router-dom"
// Used to display the details of any order, including the cart (unpaid order)

export default function EventDetail() {
  const [event, setEvent] = useState({});
  const params = useParams()
  console.log(params.id)
  const id = params.id
  useEffect(function () {
    async function getDetails() {
      const details = await eventsAPI.getEventDetails(id);
      console.log(details)
      setEvent(details)
    } 
    getDetails();
  },[]);
  return (
    <form className="EventDetail">
      <h3>{event.title}</h3>
      <p>{event.details}</p>
      <p>{event.eventDate}</p>
      <p>{event.eventTime}</p>
      <p>{event.eventCategory}</p>
    </form>
  );
}
