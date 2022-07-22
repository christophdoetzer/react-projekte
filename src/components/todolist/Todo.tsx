interface Props {
    id: Number;
    text: String,
    isDone: Boolean,
    isShown: Boolean,
    finish(id: Number): any,
    remove(id: Number): any,
}

export const Todo: React.FC<Props> = (props) => {
    return (
        <>
            {
                props.isShown && <div className="todo">
                    <p className={props.isDone ? 'finished' : ''}>{props.text}</p>
                    <div className="buttons">
                        <button className="finish" onClick={() => props.finish(props.id)}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M9.55 17.575q-.2 0-.375-.063Q9 17.45 8.85 17.3L4.55 13q-.275-.275-.263-.713q.013-.437.288-.712q.275-.275.7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.275-.275.713-.275q.437 0 .712.275q.275.275.275.712q0 .438-.275.713l-9.2 9.2q-.15.15-.325.212q-.175.063-.375.063Z" /></svg></button>
                        <button className="remove" onClick={() => props.remove(props.id)}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M8.5 4h3a1.5 1.5 0 0 0-3 0Zm-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1h5ZM9 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V8Zm2.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5Z" /></svg></button>
                    </div>
                </div>
            }
        </>
    );
}