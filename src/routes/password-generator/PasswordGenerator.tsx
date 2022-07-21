import React from 'react';
import './passwordgenerator.css';

import { Checkbox } from '../../components/password-generator/Checkbox';
import { Copy } from '../../components/password-generator/Copy';
import { Generating } from '../../components/password-generator/Generating';
import { Output } from '../../components/password-generator/Output';
import { Range } from '../../components/password-generator/Range';


function PasswordGenerator() {
  const [preferences, setPreferences] = React.useState({
    includeUppercase: false,
    includeNumbers: false,
    includeSpecialCharacters: false,
    range: 60
  })
  const [password, setPassword] = React.useState('')
  const check = (name: string) => {
    setPreferences(prevPreferences => {
      const updatedPreferences: any = {
        ...prevPreferences,
      }
      updatedPreferences[name] = !updatedPreferences[name]
      return updatedPreferences
    })
  }
  const changing = (value: number) => {
    setPreferences(prevPreferences => {
      const updatedPreferences = {
        ...prevPreferences,
        range: value,
      }
      return updatedPreferences
    })
  }
  const generate = () => {
    const letters: string = 'abcdefghijklmnopqrstuvwxyz'
    const lettersUppercase: string = letters.toUpperCase()
    const numbers: string = '0123456789'
    const specialCharacters: string = '+#></!"§$$%&/()==??_-*.:,;'

    const number = Math.floor(preferences.range / 10) + 1
    console.log(number);


    let passwordString = letters
    if (preferences.includeNumbers) {
      passwordString += numbers
    }
    if (preferences.includeUppercase) {
      passwordString += lettersUppercase
    }
    if (preferences.includeSpecialCharacters) {
      passwordString += specialCharacters
    }
    let password: string = ''
    for (let i = 0; i < number; i++) {
      const random = Math.floor(Math.random() * passwordString.length)
      password += passwordString[random]
    }
    setPassword(password)
  }
  return (
    <>
      <div className="password-generator">
        <div className='result'>
          <Output password={password} />
          <Copy password={password} />
        </div>
        <Checkbox content='Include Uppercase' check={check} value={preferences.includeUppercase} id={'includeUppercase'} />
        <Checkbox content='Include Numbers' check={check} value={preferences.includeNumbers} id={'includeNumbers'} />
        <Checkbox content='Include Special Characters' check={check} value={preferences.includeSpecialCharacters} id={'includeSpecialCharacters'} />
        <Range value={preferences.range} changing={changing} />
        <Generating generate={generate} />
      </div>
    </>
  );
}

export default PasswordGenerator;