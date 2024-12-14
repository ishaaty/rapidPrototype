import './Roommates.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

export default function Roommates(props) {

    const userRole = "admin";
    if (userRole === "admin"){    
        return (
            <>
                <Header />
                <Menu />
                
                <div class="cnterr-container">
                    <h1 style={{ color: "#00529B" }}>Roommates: Regionals</h1>



                    <div className="horizontal-centerr">
                        <button style={{ width: "250px", backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px", borderColor: "white", borderRadius: "20px" }}>
                            <h1>Group 1</h1>
                            <h2>Student 1</h2>
                            <h2>Student 2</h2>
                            <h2>Student 3</h2>
                            <h2>Student 4</h2>
                        </button>

                        <button style={{ width: "250px", backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px", borderColor: "white", borderRadius: "20px" }}>
                            <h1>Group 2</h1>
                            <h2>Student 5</h2>
                            <h2>Student 6</h2>
                            <h2>Student 7</h2>
                            <h2>Student 8</h2>
                        </button>

                        <div class="verticall">
                            <h1 style={{ color: "#F5585E", alignItems: "center" }}>Create Group:</h1>
                            <button>
                                <h3>Roommate 1</h3>
                            </button>
                            <button>
                                <h3>Roommate 2</h3>
                            </button>
                            <button>
                                <h3>Roommate 3</h3>
                            </button>
                            <button>
                                <h3>Roommate 4</h3>
                            </button>
                            <button id="submit-btn" style={{ borderRadius: "20px"}}>
                                <h2>Submit</h2>
                            </button>
                        </div>
                    </div>

                    <h1 style={{color: "#F5585E"}}>Unassigned Students</h1>
                    <button style={{ marginBottom: "30px", borderRadius: "20px", padding: "30px" }}>
                        <h2>Student 9</h2>
                        <h2>Student 10</h2>
                        <h2>Student 11</h2>
                        <h2>Student 12</h2>
                    </button>
                </div>



            </>
        )

    } else {
        return (
            <>
                <Header />
                <Menu />
                
                <div class="cnterr-container">
                    <h1 style={{ color: "#00529B" }}>Roommates: Regionals</h1>



                    <div className="horizontal-centerr">
                        <button style={{ width: "250px", backgroundColor: "#E3E8F1", color: "#6786A3", marginRight: "45px", borderColor: "white", borderRadius: "20px" }}>
                            <h1>Group 1</h1>
                            <h2>Student 1</h2>
                            <h2>Student 2</h2>
                            <h2>Student 3</h2>
                            <h2>Student 4</h2>
                        </button>

                        <div class="verticall">
                            <h1 style={{ color: "#F5585E", alignItems: "center" }}>Request Group:</h1>
                            <button>
                                <h3>Roommate 1</h3>
                            </button>
                            <button>
                                <h3>Roommate 2</h3>
                            </button>
                            <button>
                                <h3>Roommate 3</h3>
                            </button>
                            <button id="submit-btn" style={{ borderRadius: "20px"}}>
                                <h2>Submit</h2>
                            </button>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}