import './NewPassword.css'
interface Props {
    generate: () => void;
}
export const NewPassword: React.FC<Props> = (props) => {
    return (
        <button className="generating" onClick={() => props.generate()}>Neues Passwort</button>
    );
}