import './NewGame.css'
interface Props {
  newGame: () => void;
}
export const NewGame: React.FC<Props> = (props) => {
  return (
    <>
      <button className="new-game" onClick={() => props.newGame()}>Neues Spiel</button>
    </>
  )
}