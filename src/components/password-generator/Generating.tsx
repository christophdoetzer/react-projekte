interface Props {
    generate: () => void;
}
export const Generating: React.FC<Props> = (props) => {
    return (
        <button className="generating" onClick={() => props.generate()}>New Password</button>
    );
}