import sendRequest from "./send-request";

const BASE_URL = "/api/events";





export async function updateEvent(id, eventData) {
  try {
    const updatedEvent = await sendRequest(`${BASE_URL}/${id}`, "PUT", eventData);
    return updatedEvent;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
}

export async function getAllEvents() {
  try {
    const events = await sendRequest(BASE_URL, "GET");
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export async function createNewEvent(eventData) {
  try {
    const createdEvent = await sendRequest(BASE_URL, "POST", eventData);
    return createdEvent;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

export function deleteEvent(id) {
  return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE')
}

export function getEventDetails(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}