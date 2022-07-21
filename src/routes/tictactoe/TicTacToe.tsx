import React, { useEffect } from 'react';
import { Field } from '../../components/tictactoe/Field';
import { NewGame } from '../../components/tictactoe/NewGame';
import { Result } from '../../components/tictactoe/Result';
import './tictactoe.css';

function check(fields: number[]): number {
  const win0 = [0, 1, 2]
  const win1 = [3, 4, 5]
  const win2 = [6, 7, 8]
  const win3 = [0, 3, 6]
  const win4 = [1, 4, 7]
  const win5 = [2, 5, 8]
  const win6 = [0, 4, 8]
  const win7 = [2, 4, 6]

  const winningConditions = [win0, win1, win2, win3, win4, win5, win6, win7]
  for (const win of winningConditions) {
    const result = fields[win[0]] === fields[win[1]] && fields[win[1]] === fields[win[2]]
    if (result && fields[win[0]] !== 0) {
      return fields[win[0]]
    }
  }
  return 0
}

function TicTacToe() {
  const [result, setResult] = React.useState(0)
  const [fields, setFields] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [player, setPlayer] = React.useState(1)
  const [gameOver, setGameOver] = React.useState(false)
  const fieldElements = fields.map((field, i) => <Field key={i} id={i} click={click} status={field} gameOver={gameOver}/>)


  useEffect(() => {
      const result = check(fields)
      if (result !== 0) {
        setResult(result)
        setGameOver(true)
      }
  },[fields])



  function click(id: number) {
    setFields(prevFields => {
      let newFields = [...prevFields]
      newFields[id] = player
      return newFields
    })
    
    if (player === 1) {
      setPlayer(2)
    } else if (player === 2){
      setPlayer(1)
    }
  }


  function computer(): void {
    let freeFields: number[] = []
    for (let i = 0; i < fields.length; i++) {
      if (fields[i] === 0) {
        freeFields.push(i)
      }
    }

    const random = Math.floor(Math.random() * freeFields.length)
    setFields(prevFields => {
      const index = freeFields[random]
      const newFields = [...prevFields]
      newFields[index] = 2
      return newFields
    })
  }
  function newGame() {
    setFields([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setGameOver(false)
    setResult(0)
  }

  return (
    <div className="tictactoe">
      <div className="result">
        <Result winner={result} />
      </div>
      <div className='fields'>
        {fieldElements}
      </div>
      <NewGame newGame={newGame}/>
    </div>
  );
}

export default TicTacToe;