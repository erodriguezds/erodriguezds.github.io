

import './timeline.scss';

export default function Timeline({title, events}){
    return (
        <ul className="work-experience timeline">
            {events.map(event => (
                <li className='tl-item'>
                    <img className='icon' src={`images/${event.icon}`} alt={event.title} />
                    <div className="date">{event.date}</div>
                    <div className="title">"{event.title}"</div>
                    <div className="subtitle">{event.subtitle}</div>
                    <div className="place">at {event.place}</div>
                    <p>{event.description}</p>
                </li>
            ))}
        </ul>
    );
}