import { Icon } from "../../global/components/Icon/Icon";
import './Result.css'

interface Props {
    winner: number,
    playerOne: string,
    playerTwo: string,
}

export const Result: React.FC<Props> = (props) => {
    return (
        <>
            {props.winner !== 0 && <div className="result-text">{props.winner === 1 ? props.playerOne : props.playerTwo} (<Icon winner={props.winner} />) hat gewonnen!</div>}
        </>
    );
}