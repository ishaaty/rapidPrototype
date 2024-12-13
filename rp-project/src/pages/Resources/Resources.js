import './Resources.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Resources from '../../components/Resources/Resources'


const ResourcesPage = (userRole) => {
    const resourcesData = [
      {
        text: "Deca+",
        link1: "https://example.com/link1",
        link1Label: "Delete",
        link2: "https://example.com/link2",
        link2Label: "Edit",
      },
      {
        text: "Naviance",
        link1: "https://example.com/link3",
        link1Label: "Delete",
        link2: "https://example.com/link4",
        link2Label: "Edit",
      },
      {
        text: "PDF Forms",
        link1: "https://example.com/link3",
        link1Label: "Delete",
        link2: "https://example.com/link4",
        link2Label: "Edit",
      },
      {
        text: "Community Pass",
        link1: "https://example.com/link3",
        link1Label: "Delete",
        link2: "https://example.com/link4",
        link2Label: "Edit",
      },
    ];
  
    return (
      <div className="resources-page">
        <h1>Resources</h1>
        <Resources resources={resourcesData} />
      </div>
    );
  };
  
  export default ResourcesPage;