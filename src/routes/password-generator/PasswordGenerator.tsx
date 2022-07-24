import React from 'react';
import './passwordgenerator.css';

import { Checkbox } from './components/Checkbox/Checkbox';
import { Copy } from './components/Copy/Copy';
import { NewPassword } from './components/NewPassword/Generating';
import { Output } from './components/Output/Output';
import { Range } from './components/Range/Range';


function PasswordGenerator() {
  const [includeUppercase, setIncludeUppercase] = React.useState(false)
  const [includeNumbers, setIncludeNumbers] = React.useState(false)
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = React.useState(false)

  const setCheckboxes = [setIncludeUppercase, setIncludeNumbers, setIncludeSpecialCharacters]

  const [range, setRange] = React.useState(60)

  const [password, setPassword] = React.useState('')

  const checkCheckbox = (id: number) => {
    setCheckboxes[id](prevValue => !prevValue)
  }

  const changingLength = (value: number) => {
    setRange(value)
  }

  const manualChange = (value: string) => {
    setPassword(value)
  }

  const generate = () => {
    const letters: string = 'abcdefghijklmnopqrstuvwxyz'
    const lettersUppercase: string = letters.toUpperCase()
    const numbers: string = '0123456789'
    const specialCharacters: string = '+#></!"§$$%&/()==??_-*.:,;'

    const characters = [lettersUppercase, numbers, specialCharacters]
    const checkboxes = [includeUppercase, includeNumbers, includeSpecialCharacters]

    let passwordString = letters

    for (let j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j]) {
        passwordString += characters[j]
      }
    }

    let newPassword = ''
    for (let i = 0; i < Math.floor(range / 10) + 1; i++) {
      newPassword += passwordString[Math.floor(Math.random() * passwordString.length)]
    }
    setPassword(newPassword)
  }
  return (
    <>
      <div className="password-generator">
        <div className='result'>
          <Output password={password} change={manualChange} />
          <Copy password={password} />
        </div>
        <Checkbox content='Großbuchstaben' check={checkCheckbox} value={includeUppercase} id={0} />
        <Checkbox content='Nummern' check={checkCheckbox} value={includeNumbers} id={1} />
        <Checkbox content='Sonderzeichen' check={checkCheckbox} value={includeSpecialCharacters} id={2} />
        <Range value={range} changing={changingLength} />
        <NewPassword generate={generate} />
      </div>
    </>
  );
}

export default PasswordGenerator;