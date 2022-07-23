import { Icon } from "../Icon/Icon";
import './Field.css'

interface Props {
    id: number,
    status: number,
    gameOver: boolean,
    click: (id: number) => void,
}

export const Field: React.FC<Props> = (props) => {
    return (
        <button className="button" onClick={() => props.click(props.id)} disabled={props.status === 1 || props.status === 2 || props.gameOver}>
            <Icon winner={props.status} />
        </button>
    );
}