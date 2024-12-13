import './Regionals.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

export default function Regionals() {
    return (
        <div>
            <Header />
            <Menu />

            <div className="button-containerr">
                <a href="viewaddevents">
                    <button class="type">View & Add Events</button>
                </a>

                <a href="finalizeevents">
                    <button class="type">Finalize Events</button>
                </a>
            </div>


        </div>
    )
}