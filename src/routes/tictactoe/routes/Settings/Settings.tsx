import { Mode } from './components/Mode/Mode';
import { History } from './components/History/History';
import './Settings.css'

interface Props {
    changeMode: (event: any) => void,
    mode: number,
    result: number,
    playerOne: string,
    playerTwo: string,
    history: string[],

    changePlayerOne: (event: any) => void,
    changePlayerTwo: (event: any) => void,
}

export const Settings: React.FC<Props> = (props) => {

    return (
        <div className="settings">
            <Mode changeMode={props.changeMode} mode={props.mode}/>
            <input type="text" value={props.playerOne} placeholder={props.mode === 1 ? 'Spieler 1...' : 'Spieler...'} onChange={props.changePlayerOne}></input>
            <input type="text" value={props.playerTwo} placeholder={props.mode === 1 ? 'Spieler 2...' : 'Computer...'} onChange={props.changePlayerTwo}></input>
            <History history={props.history} />
        </div>
    );
}