import './FundraiserCard.css'

export default function FundraiserCard(props) {

    const renderParticipantContent = (userRole) => {
        if (userRole === 'participant') {
            return (
                <>
                    <div class="fundsignup">
                        <button id="fundsignup">Sign Up</button>
                    </div>
                </>
            );
        }
        return null; // Return nothing if not admin
    };

    const renderAdminContent = (userRole) => {
        if (userRole === 'admin') {
            return (
                <>
                    <div class="approval">
                        <button id="approval">View Requests</button>
                    </div>
                </>
            );
        }
        return null; // Return nothing if not admin
    };

    const style = {
        backgroundColor: props.backgroundColor || 'white',  // Default to white if no color is provided
      };

    return (
        <>
            <div class="fundcont" style={style}>
                <h4 id="fundhead">{props.name}</h4>
                <p id="funddesc">{props.desc}</p>
                <p id="funddate">{"Date: " + props.date}</p>
                <p id="fundtime">{"Time: " + props.time}</p>
                {renderAdminContent(props.userRole)}
                {renderParticipantContent(props.userRole)}
            </div>
        </>
    )
}