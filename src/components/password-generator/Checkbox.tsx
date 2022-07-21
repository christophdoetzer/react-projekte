interface Props {
    content: string,
    value: boolean,

    id: string,
    check(name: string): any,
}

export const Checkbox: React.FC<Props> = (props) => {
    const handleChange = () => {
        props.check(props.id)
    }

    return (
        <div className="checkbox">
            <input className="input" id={props.id} type='checkbox' name='checkbox' checked={props.value} onChange={handleChange} />
            <label htmlFor={props.id}>{props.content}</label>
        </div>
    );
}