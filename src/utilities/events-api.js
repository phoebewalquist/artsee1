import sendRequest from './send-request';

const BASE_URL = '/api/events';

export function createNewEvent(event) {
  return sendRequest(BASE_URL, 'POST', {event})
  
}
