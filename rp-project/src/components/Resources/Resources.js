import './Resources.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

// Single Resource Component
const Resource = ({ text, link1, link2, userRole }) => {
  return (
    <div className="resource-box">
      <p className="resource-text">{text}</p>
      {userRole === 'admin' && (
        <div className="resource-buttons">
          <a href={link1} target="_blank" rel="noopener noreferrer" className="resource-button">
            Delete
          </a>
          <a href={link2} target="_blank" rel="noopener noreferrer" className="resource-button">
            Edit
          </a>
        </div>
      )}
    </div>
  );
};

// Resources List Component
const Resources = ({ resources, userRole }) => {
  return (
    <>
      <Header />
      <Menu />
      <div className="resources-container">
        {resources.map((resource, index) => (
          <Resource
            key={index}
            text={resource.text}
            link1={resource.link1}
            link2={resource.link2}
            userRole={userRole}
          />
        ))}
      </div>
      {userRole === 'admin' && (
        <div className="center-button-container">
          <button className="center-button">Add New Resource</button>
        </div>
      )}
    </>
  );
};

export default Resources;
