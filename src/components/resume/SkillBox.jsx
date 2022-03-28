import "./skills.scss";

export default function SkillBox({skillGroups}){
    return (
        <div id="skills-box">
            {skillGroups.map(group => (
                <div className="skills-group w50">
                    <div className="title">{group.groupName}</div>
                    <ul>
                        {group.skills.map(skill => <li>{skill}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}