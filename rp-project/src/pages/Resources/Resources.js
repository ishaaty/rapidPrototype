import './Resources.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Resources from '../../components/Resources/Resources';

const ResourcesPage = () => {
  const userRole = 'admin'; // FOR TESTING MAKE IT 'admin' TO TEST ADMIN OR ANYTHING ELSE TO TEST PARTICIPANT
  const resourcesData = [
    {
      text: 'Deca+',
      link1: 'https://example.com/link1',
      link2: 'https://example.com/link2',
    },
    {
      text: 'Naviance',
      link1: 'https://example.com/link3',
      link2: 'https://example.com/link4',
    },
    {
      text: 'PDF Forms',
      link1: 'https://example.com/link5',
      link2: 'https://example.com/link6',
    },
    {
      text: 'Community Pass',
      link1: 'https://example.com/link7',
      link2: 'https://example.com/link8',
    },
  ];

  return (
    <div className="resources-page">
      <Header />
      <Menu />
      <h1>Resources</h1>
      <Resources resources={resourcesData} userRole={userRole} />
    </div>
  );
};

export default ResourcesPage;
