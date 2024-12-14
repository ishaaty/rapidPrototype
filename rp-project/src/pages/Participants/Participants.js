import './Participants.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import ParticipantCard from '../../components/ParticipantCard/ParticipantCard'
import AdminCard from '../../components/AdminCard/AdminCard'
import ExportCard from '../../components/ExportCard/ExportCard'

export default function Participants(props) {

    const renderAdminContent = () => {
        if (props.userRole === 'admin' || true) {
            return (
                <ExportCard />
            );
        }
        return null; // Return nothing if not admin
    };

    return (
        <>
            <Header />
            <Menu />

            {/* <div className="main-content"> */}
            <div>
                <h1 id="partheader">Participants</h1>
                <div class="partcontainer">
                    <div>
                    <div>
                        <h3 id="advisors">Advisors</h3>
                        <AdminCard name="Mr. Gutierrez" email="josgut@bergen.org" year="20XX" />
                    </div>
                    <div>
                        <h3 id="board">Board Members</h3>
                        <ParticipantCard name="Jeannelle Tellado" email="jeatel25@bergen.org" grade="2025" events="Regional Binder" />
                    </div>
                    <div>
                        <h3 id="member">Members</h3>
                        <ParticipantCard name="Isha Tyagi" email="ishtya25@bergen.org" grade="2025" events="Regional Roleplay" />
                        <ParticipantCard name="Julia Thompson" email="jultho25@bergen.org" grade="2025" events="Regional Binder" />
                        <ParticipantCard name="Ashley Johnson" email="ashjoh25@bergen.org" grade="2025" events="Regional Roleplay" />
                    </div>

                    </div>
                    <div id="exportcontainer">
                        {renderAdminContent()}
                    </div>

                </div>
            </div>

            {/* </div> */}

        </>

    );
}
