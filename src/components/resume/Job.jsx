import "./job.scss";

export default function Job({ image, company, title, from, to, description}){
    return (
        <li className='tl-item'>
            <div className="time">{from} - {to || "(current date)"}</div>
            <img className='job-icon' src={`images/${image}`} alt={company} />
            <div className="job-title">{title}</div>
            <div className="job-company"> at {company}</div>
            <div className="job-duration">{from} - {to || "(current date)"}</div>
            <p>{description}</p>
        </li>
    );
}