import './Home.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

export default function Home() {
    return (
        <>
            <Header />
            <Menu />
            <div className="home-container">
                <div className="calendar-container">
                <h3>Calendar</h3>
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?src=10a7c2a9d9f433e04cbbb485579fa2c8d25039b6946d2399148e6afb1c52b051%40group.calendar.google.com&ctz=America%2FNew_York" 
                        style={{ border: 0 }} 
                        width="500vh" 
                        height="400vh" 
                        frameBorder="0" 
                        scrolling="no"
                    ></iframe>
                </div>
                <div className="sidebar-container">
                    <div className="announcements-box">
                        <h3>Announcements</h3>
                        <ul>
                            <li>Bake Sale - October 9</li>
                            <li>Signup to volunteer!</li>
                        </ul>
                    </div>
                    <div className="events-box">
                        <h3>Upcoming Events</h3>
                        <ul>
                            <li>Competition - March 20</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
