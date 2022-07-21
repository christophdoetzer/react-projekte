import { Icon } from "./Icon";

interface Props {
    winner: number,
}

export const Result: React.FC<Props> = (props) => {

    
    return (
        <>
        {props.winner !== 0 &&<div className="result-text">Gewinner: <Icon winner={props.winner}/></div> }
        </>
    );
}