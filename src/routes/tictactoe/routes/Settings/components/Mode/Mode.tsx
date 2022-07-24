import './Mode.css'
interface Props {
    changeMode: (e: any) => void
}

export const Mode: React.FC<Props> = (props) => {
    return (
        <div className="mode">
            <h2 className="mode-heading">Modes:</h2>
            <select onChange={props.changeMode}>
                <option>-- Choose --</option>
                <option value={0}>Computer (random)</option>
                <option value={1}>Local (1 vs. 1)</option>
            </select>
        </div>
    );
}