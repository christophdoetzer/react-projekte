import React, { useEffect } from 'react';
import './todolist.css';

import { Form } from './components/Form/Form';
import { Todo } from './components/Todo/Todo';

interface todo {
  id: number,
  content: string,
  isDone: boolean,
}

function Todolist() {
  const [todos, setTodos] = React.useState<todo[]>([])
  const [todosLength, setTodosLength] = React.useState(0)

  const todoElements = todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.content} isDone={todo.isDone} finish={finish} remove={remove} />)

  function remove(id: number) {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos]
      let currentTodo = newTodos[0]
      for (const todo of newTodos) {
        if (todo.id === id) {
          currentTodo = todo
        }
      }
      newTodos.splice(newTodos.indexOf(currentTodo), 1)
      return newTodos
    })
  }
  function finish(id: number) {
    setTodos(prevTodos => {
      let newTodos = []
      for (let i = 0; i < prevTodos.length; i++) {
        const currentTodo = prevTodos[i]
        if (currentTodo.id === id) {
          const updatedTodo = {
            ...currentTodo,
            isDone: !currentTodo.isDone
          }
          newTodos.push(updatedTodo)
        } else {
          newTodos.push(currentTodo)
        }
      }
      const tempNewTodos = newTodos.filter(todo => todo.isDone === false)
      tempNewTodos.push(...newTodos.filter(todo => todo.isDone === true))
      return tempNewTodos
    })
  }
  function add(text: string) {
    if (text.length === 0) {
      alert("Es dürfen keine leeren Todos erstellt werden!")
    } else if (todos.length > 10) {
      alert("Die Liste ist zu lang...")
    } else {
      setTodos(prevTodos => {
        const newTodos = []
        newTodos.push(
          {
            id: todosLength,
            content: text,
            isDone: false,
          },
          ...prevTodos,
        )
        return newTodos
      })
    }
  }
  useEffect(() => {
    setTodosLength(prevTodosLength => prevTodosLength + 1)
  }, [todos.length])
  return (
    <div className="todolist">
      <Form add={add} />
      {todoElements}
    </div>
  );
}

export default Todolist;