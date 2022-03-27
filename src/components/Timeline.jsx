import './timeline.css';

export default function Timeline(props){
    return (
        <ul>
            {props.items.map(item => {
                return (
                    <li>
                        <div className="time">{item.time}</div>
                        <p>{item.text}</p>
                    </li>
                );
            })}
        </ul>
    );
}