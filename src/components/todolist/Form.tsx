import { useState } from "react";

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
            <input type="text" placeholder="New Task..." onChange={handleChange} name="text" value={formData}></input>
            <button type="submit">Add</button>
        </form>
    );
}