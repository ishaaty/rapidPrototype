import './CompetitionLevelCard.css';

export default function CompetitionLevelCard(props) {
    return (
        <button className="compCard" style={{ backgroundColor: props.color}}>
            <h1>{props.name}</h1>
        </button>
    )
}