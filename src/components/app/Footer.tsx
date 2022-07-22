import './app.css';
interface Props {
  author: string,
  year: string,
}
export const Footer: React.FC<Props> = (props) => {
  return (
    <h6 className='footer'>© {props.year} {props.author}</h6>
  )
}