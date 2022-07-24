import React from "react";
import './Range.css'

interface Props {
    value: number
    changing: (value: number) => void,
}

export const Range: React.FC<Props> = (props) => {
    const handleChange = (e: any) => {
        props.changing(e.target.value)
    }

    return (
        <div className="length">
            <label htmlFor="range">Länge: {Math.floor(props.value / 10 + 1)}</label>
            <input className="range" id="range" type="range" value={props.value} onChange={handleChange} name="range" />
        </div>
    );
}