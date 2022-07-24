import { useState } from 'react';
import './Output.css'

interface Props {
    password: string,
    change: (value: any) => void;
}

export const Output: React.FC<Props> = (props) => {
    const iconVisible = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19c-4.182 0-7.764-4.013-9.257-5.962a1.692 1.692 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5c4.182 0 7.764 4.013 9.257 5.962Z" /><circle cx="12" cy="12" r="3" /></g></svg>
    const iconNotVisible = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6.873 17.129c-1.845-1.31-3.305-3.014-4.13-4.09a1.693 1.693 0 0 1 0-2.077C4.236 9.013 7.818 5 12 5c1.876 0 3.63.807 5.13 1.874" /><path d="M14.13 9.887a3 3 0 1 0-4.243 4.242M4 20L20 4M10 18.704A7.124 7.124 0 0 0 12 19c4.182 0 7.764-4.013 9.257-5.962a1.694 1.694 0 0 0-.001-2.078A22.939 22.939 0 0 0 19.57 9" /></g></svg>

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setIsVisible(prevIsVisible => !prevIsVisible)
    }

    const handleChange = (event: any) => {
        props.change(event.target.value)
    }

    return (
        <div className="output">
            <button onClick={handleClick}>{isVisible ? iconVisible : iconNotVisible}</button>
            <input className="output-text" value={props.password} type={isVisible ? 'text' : 'password'} placeholder="Password..." name="password" onChange={handleChange} />
        </div>
    );
}