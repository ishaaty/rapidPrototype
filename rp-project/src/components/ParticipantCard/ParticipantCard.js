import './ParticipantCard.css';

export default function ParticipantCard(props) {
    return (
        <>
            <div class="pccontainer">
                <h4 id="name">{props.name}</h4>
                <p class="data">{props.email}</p>
                <p class="data">{"Class of " + props.grade}</p>
                <p class="data">{props.events}</p>
            </div>
        </>
    )
}