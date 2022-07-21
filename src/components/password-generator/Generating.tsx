interface Props {
    generate(): void;
}

export const Generating: React.FC<Props> = (props) => {
    const handleClick = () => {
        props.generate()
    }

    return (
        <button className="generating" onClick={handleClick}>New Password</button>
    );
}