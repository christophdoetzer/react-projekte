import { useState } from "react";

interface Props {
    add(text: string): any;
}

export const Form: React.FC<Props> = (props) => {
    const [formData, setFormData] = useState({
        text: ''
    })
    function handleChange(event: any) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event: any) {
        event.preventDefault();
        props.add(formData.text)
        setFormData({ text: '' })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task..." onChange={handleChange} name="text" value={formData.text}></input>
            <button type="submit">Add</button>
        </form>
    );
}