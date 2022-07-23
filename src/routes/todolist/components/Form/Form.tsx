import { useState } from "react";
import './Form.css'

interface Props {
    add(text: string): any;
}

export const Form: React.FC<Props> = (props) => {
    const [formData, setFormData] = useState('')
    function handleChange(event: any) {
        setFormData(event.target.value)
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        props.add(formData)
        setFormData('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task..." onChange={handleChange} name="text" value={formData} autoComplete="off"></input>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 20v-8m0 0V4m0 8h8m-8 0H4" /></svg>
            </button>
        </form>
    );
}