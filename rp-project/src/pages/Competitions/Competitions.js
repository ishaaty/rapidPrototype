import './Competitions.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import CompetitionLevelCard from '../../components/CompetionLevelCard/CompetitionLevelCard'

export default function Competitions() {
    return (
        <div>
            <Header />
            <Menu />
            <h2 class="comp">View Competitions</h2>
            <div className="competition-grid">

                <a href="viewaddevents" ><CompetitionLevelCard name="Regionals" color="#F5585E" /></a>
                <CompetitionLevelCard name="States" color="#FFC511" />
                <CompetitionLevelCard name="Nationals" color="#00529B" />
                <CompetitionLevelCard name="Internationals" color="#00984D" />

            </div>
        </div>
    )
}