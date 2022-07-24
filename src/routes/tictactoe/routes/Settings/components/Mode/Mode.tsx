import './Mode.css'
interface Props {
    changeMode: (e: any) => void
}

export const Mode: React.FC<Props> = (props) => {
    return (
        <div className="mode">
            <h2 className="mode-heading">Modi:</h2>
            <select onChange={props.changeMode}>
                <option>-- Wähle --</option>
                <option value={0}>Computer (zufällig)</option>
                <option value={1}>Lokal (1 vs. 1)</option>
            </select>
        </div>
    );
}