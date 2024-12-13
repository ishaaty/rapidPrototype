import './ViewRequesters.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

export default function ViewRequesters() {
    return (
        <>

            <div className="container">
                <Header />
                <Menu />

                <h1 className="header-text">View Requesters: Regionals (Roleplays)</h1>

                <div className="vertical-center">
                    <button className="student-button">
                        <h1>Student Name 1</h1>
                        <h2>Class Year</h2>
                    </button>

                    <button className="student-button">
                        <h1>Student Name 2</h1>
                        <h2>Class Year</h2>
                    </button>
                </div>

                <div className="action-buttons">
                    <button className="grant-button">
                        <h1>Grant Request</h1>
                    </button>

                    <button className="deny-button">
                        <h1>Deny Request</h1>
                    </button>
                </div>
            </div>


        </>
    )
}