import './Mode.css'

interface Props {
    mode: number,
    changeMode: (e: any) => void
}

export const Mode: React.FC<Props> = (props) => {
    return (
        <div className="mode">
            <h2 className="mode-heading">Modi:</h2>
            <select value={props.mode} name='select' title="select" onChange={props.changeMode}>
                <option value={0}>Computer (zufällig)</option>
                <option value={1}>Lokal (1 vs. 1)</option>
            </select>
        </div>
    );
}