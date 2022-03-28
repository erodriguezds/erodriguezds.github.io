
import Timeline from "./Timeline";

export default function Education({degrees}){
    return (
        <div className="education">
            <div className="section-title">Education</div>
            <Timeline events={degrees.map(degree => ({
                ...degree,
                date: degree.graduationDate,
                place: degree.institute,
            }))} />
        </div>
    );
}