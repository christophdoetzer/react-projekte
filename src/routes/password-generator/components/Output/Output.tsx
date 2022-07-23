import './Output.css'

interface Props {
    password: string,
}

export const Output: React.FC<Props> = (props) => {
    return (
        <h3 className="output">{props.password}</h3>
    );
}