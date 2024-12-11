// contains competition and resources
// optional: participants and fundraisers
import './Menu.css';

export default function Menu(){
    return (
        <div className="sidebar">
            <h1 style={{ color: "#00529B", alignItems: "center" }}>Menu</h1>
            <ul className="menu-list">
                <li><a href="home" className="menu-link">Home</a></li>
                <li><a href="competitions" className="menu-link">Competitions</a></li>
                <li><a href="fundraisers" className="menu-link">Fundraisers</a></li>
                <li><a href="participants" className="menu-link">Participants</a></li>
                <li><a href="resources" className="menu-link">Resources</a></li>
            </ul>
        </div>
    );
}
