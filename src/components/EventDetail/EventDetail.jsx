import './EventDetail.css';

// Used to display the details of any order, including the cart (unpaid order)
export default function EventDetail({ event }) {
  if (!event) return null;


  return (
    <div className="EventDetail">
      <div className="section-heading">
        {event.isPaid ?
          <span>EVENT <span className="smaller">{event.eventId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(event.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
      </div>
    </div>
  );
}