import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

import './tictactoe.css';

import { Field } from './routes/Field/Field';
import { NewGame } from './components/NewGame/NewGame';
import { Result } from './components/Result/Result';
import { Settings } from './routes/Settings/Settings';

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
  const [history, setHistory] = React.useState<string[]>([''])
  const [mode, setMode] = React.useState(0)
  const [nameOfFirstPlayer, setNameOfFirstPlayer] = React.useState('')
  const [nameOfSecondPlayer, setNameOfSecondPlayer] = React.useState('')

  const [result, setResult] = React.useState(0)
  const [fields, setFields] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [currentPlayer, setCurrentPlayer] = React.useState(1)
  const [gameOver, setGameOver] = React.useState(false)

  const fieldElements = fields.map((field, i) => <Field key={i} id={i} click={click} status={field} gameOver={gameOver} />)
  const players = [nameOfFirstPlayer, nameOfSecondPlayer]

  function changeNameOfFirstPlayer(event: any) {
    if (event.target.value.length > 16) {
      alert("Der Name is zu lang.")
    } else {
      setNameOfFirstPlayer(event.target.value)
    }
  }

  function changeNameOfSecondPlayer(event: any) {
    if (event.target.value.length > 18) {
      alert("Der Name is zu lang.")
    } else {
      setNameOfSecondPlayer(event.target.value)
    }
  }

  function changeMode(event: any) {
    setMode(parseInt(event.target.value))
  }

  useEffect(() => {
    const result = check(fields)
    if (result !== 0) {
      setResult(result)
      setHistory(prevHistory => {
        let newHistory = [...prevHistory]
        newHistory.splice(0, 1)
        if (players[result - 1].length === 0) {
          newHistory.push('Jemand')
        } else {
          newHistory.push(players[result - 1])
        }
        return newHistory
      })
      setGameOver(true)
    }
  }, [fields])

  useEffect(() => {
    newGame()
  }, [mode])

  function click(id: number) {
    setFields(prevFields => {
      let newFields = [...prevFields]
      newFields[id] = mode === 0 ? 1 : currentPlayer
      return newFields
    })
    if (mode == 1) {
      setCurrentPlayer(prevCurrentPlayer => prevCurrentPlayer === 1 ? 2 : 1)
    } else if (mode === 0) {
      setGameOver(true)
      setTimeout(() =>  {setFields(prevFields => computer(prevFields)); setGameOver(false)}, Math.floor(Math.random() * 300))
    }
  }

  function computer(currentFields: number[]): number[] {
    if (check(currentFields) == 0) {
      let freeFields: number[] = []
      for (let i = 0; i < currentFields.length; i++) {
      if (currentFields[i] === 0) {
        freeFields.push(i)
      }
      }

      const random = Math.floor(Math.random() * freeFields.length)
      const index = freeFields[random]
      const newFields = [...currentFields]
      newFields[index] = 2
      return newFields
    }
    return currentFields
  }

  let navigate = useNavigate()
  function newGame() {
    setFields([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setGameOver(false)
    setResult(0)
    navigate('field')
  }

  return (
    <div className="tictactoe">
      <div className="result">
        <Result winner={result} playerOne={nameOfFirstPlayer} playerTwo={nameOfSecondPlayer} />
      </div>
      <Routes>
        <Route path="field" element={
          <div className='fields'>
            {fieldElements}
          </div>
        }>
        </Route>
        <Route path="settings" element={
          <Settings history={history} result={result} playerOne={nameOfFirstPlayer} playerTwo={nameOfSecondPlayer} changeMode={changeMode} mode={mode} changePlayerOne={changeNameOfFirstPlayer} changePlayerTwo={changeNameOfSecondPlayer} />
        }>
        </Route>
      </Routes>
      <div className='tictactoe-buttons'>
        <NewGame newGame={newGame} />
        <Link to={useLocation().pathname === '/tictactoe/field' ? 'settings' : 'field'} className="settings-button">
          {
            useLocation().pathname === '/tictactoe/field' ?
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9" /><circle cx="9" cy="5" r="2" /><circle cx="17" cy="12" r="2" /><circle cx="7" cy="19" r="2" /></g></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path d="M19 3v4m0 14V11m-7-8v12m0 6v-2M5 3v2m0 16V9" /><circle cx="19" cy="9" r="2" transform="rotate(90 19 9)" /><circle cx="12" cy="17" r="2" transform="rotate(90 12 17)" /><circle cx="5" cy="7" r="2" transform="rotate(90 5 7)" /></g></svg>
          }
        </Link>
      </div>
    </div>
  );
}

export default TicTacToe;