
import Job from "./Job";
import './timeline.scss';

export default function ExperienceTimeline(props){
    return (
        <div className="jobs-box">
            <div className="section-title">Work experience</div>
            <ul className="work-experience timeline">
                {props.jobs.map(job => <Job {...job} />)}
            </ul>
        </div>
    );
}