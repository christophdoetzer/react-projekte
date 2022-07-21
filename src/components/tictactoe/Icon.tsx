import React from "react"
interface Props {
    winner: number,
}
export const Icon: React.FC<Props> = (props) => {
        switch (props.winner) {
            case 1:
                return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="none">
            <line x1="3.5" y1="-3.5" x2="115.451" y2="-3.5" transform="matrix(0.686327 0.727293 -0.686327 0.727293 5 7)" stroke="#E7337C" strokeWidth="7" strokeLinecap="round" />
            <line x1="3.5" y1="-3.5" x2="115.451" y2="-3.5" transform="matrix(0.686327 -0.727293 0.686327 0.727293 5.87305 93.512)" stroke="#E7337C" strokeWidth="7" strokeLinecap="round" />
        </svg>

            case 2:
                return <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="41.5" stroke="#039BA1" strokeWidth="7" />
        </svg>
            default:
                return <div></div>
        }
}
