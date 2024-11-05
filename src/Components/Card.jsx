import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="crewmate-card-container">
            <Link to={`edit/${props.id}`} className="edit-link">Edit</Link>

            <p className="crewmate-name">{props.name}</p>
            <p className="crewmate-speed">Speed: {props.speed}</p>
            <p className="crewmate-color">Color: {props.color}</p>

            <Link to={`view/${props.id}`} className="info-link">Info</Link>
        </div>
    );
}

export default Card;
