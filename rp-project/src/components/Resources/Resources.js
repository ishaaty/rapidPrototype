import './Resources.css'
const Resource = ({ text, link1, link2 }) => {
    return (
        <>
        <div className="resource-box">
            <p className="resource-text">{text}</p>
            <div className="resource-buttons">
                <a href={link1} target="_blank" rel="noopener noreferrer" className="resource-button">
                    Delete
                </a>
                <a href={link2} target="_blank" rel="noopener noreferrer" className="resource-button">
                    Edit
                </a>
            </div>
        </div>
        <div className="center-button-container">
            <button className="center-button">Add New Resource</button>
        </div>
        </>
    );
};

// Resources List Component
const Resources =({ resources }) => {
    return (
        <div className="resources-container">
            {resources.map((resource, index) => (
                <Resource
                    key={index}
                    text={resource.text}
                    link1={resource.link1}
                    link2={resource.link2}
                />
            ))}
        </div>
    );
};
export default Resources;