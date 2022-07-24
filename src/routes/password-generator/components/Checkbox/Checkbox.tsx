import './Checkbox.css'

interface Props {
    content: string,
    value: boolean,

    id: number,
    check: (id: number) => void,
}

export const Checkbox: React.FC<Props> = (props) => {
    return (
        <div className="checkbox">
            <input className="input" id={props.id.toString()} type='checkbox' name='checkbox' checked={props.value} onChange={() => props.check(props.id)} />
            <label htmlFor={props.id.toString()}>{props.content}</label>
        </div>
    );
}