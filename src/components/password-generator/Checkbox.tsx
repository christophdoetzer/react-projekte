interface Props {
    content: string,
    value: boolean,

    id: string,
    check: (name: string) => void,
}

export const Checkbox: React.FC<Props> = (props) => {
    return (
        <div className="checkbox">
            <input className="input" id={props.id} type='checkbox' name='checkbox' checked={props.value} onChange={() => props.check(props.id)} />
            <label htmlFor={props.id}>{props.content}</label>
        </div>
    );
}