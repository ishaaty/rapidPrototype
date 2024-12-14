import './ViewAddEvents.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

export default function ViewAddEvents(props) {

    const userRole = "admin";

    if (userRole === "admin"){
        return (
            <>
                <Header />
                <Menu />
                <div style={{ color: "#00529B", alignItems: "center" }} className="add-event-container">
                    <h1 style={{ color: "#00529B" }}>View & Add Events: Regionals</h1>
                    <a href="roommates">
                        <button style={{ backgroundColor: "#00529B", color:"white" }}>
                            View Roommates
                        </button>
                    </a>
                    <div>
                        <h1 style={{ color: "#F5585E", alignItems: "center" }}>Current Events:</h1>
                        <button id="roleplay" style={{ backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px"}}>
                            <h1>Roleplays</h1>
                            <h2>Description: </h2>
                            <h2>Date: Time</h2>
                            <a href="viewrequesters">
                                <button style={{ backgroundColor: "#6786A3", color: "white"}}>View Requesters</button>
                            </a>
                        </button>

                        <button id="binder" style={{ backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px"}}>
                            <h1>Binders</h1>
                            <h2>Description: </h2>
                            <h2>Date: Time</h2>
                            <button style={{ backgroundColor: "#6786A3", color: "white"}}>View Requesters</button>
                        </button>
                    </div>
                </div>

                <div class="add-event-container">
                    <h1 style={{ color: "#F5585E", alignItems: "center" }}>Add Event:</h1>
                    <button>
                        <h3>Name</h3>
                    </button>
                    <button>
                        <h3>Description</h3>
                    </button>
                    <button>
                        <h3>Date/Time</h3>
                    </button>
                    <button>
                        <h3>Requirement1</h3>
                    </button>
                    <button>
                        <h3>Requirment2</h3>
                    </button>
                    <button id="submit-btn">
                        <h2>Submit</h2>
                    </button>
                </div>

            </>
        )

    } else {

        return (
            <>
                <Header />
                <Menu />
                <div style={{ color: "#00529B", alignItems: "center" }} className="add-event-container">
                    <h1 style={{ color: "#00529B" }}>View & Add Events: Regionals</h1>
                    <a href="roommates">
                        <button style={{ backgroundColor: "#00529B", color:"white" }}>
                            View Roommates
                        </button>
                    </a>
                    <div>
                        <h1 style={{ color: "#F5585E", alignItems: "center" }}>Available Events:</h1>
                        <button id="roleplay" style={{ backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px"}}>
                            <h1>Roleplays</h1>
                            <h2>Description: </h2>
                            <h2>Date: Time</h2>
                        </button>

                        <button id="binder" style={{ backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px"}}>
                            <h1>Binders</h1>
                            <h2>Description: </h2>
                            <h2>Date: Time</h2>
                        </button>
                    </div>
                    <div>
                        <h1 style={{ color: "#F5585E", alignItems: "center" }}>My Events:</h1>
                        <a href="studentprofile">
                            <button id="roleplay" style={{ backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px"}}>
                                <h1>Roleplays</h1>
                                <h2>Description: </h2>
                                <h2>Date: Time</h2>
                            </button>
                        </a>
                    </div>
                </div>

                <div class="add-event-container">
                    <h1 style={{ color: "#F5585E", alignItems: "center" }}>Ranks Events:</h1>
                    <button>
                        <h3>Choice 1</h3>
                    </button>
                    <button>
                        <h3>Choice 2</h3>
                    </button>
                    <button>
                        <h3>Choice 3</h3>
                    </button>
                    <button id="submit-btn">
                        <h2>Submit</h2>
                    </button>
                </div>

            </>
        )

    }
}