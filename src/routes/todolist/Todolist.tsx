import React from 'react';
import './todolist.css';

import { Form } from '../../components/todolist/Form';
import { Todo } from '../../components/todolist/Todo';

function Todolist() {
  const [todos, setTodos] = React.useState([{
    id: 0,
    content: '',
    isDone: false,
    isShown: false,
    remove: remove,
    finish: finish,
  }])

  const todoElements = todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.content} isDone={todo.isDone} isShown={todo.isShown} finish={finish} remove={remove} />)

  function remove(id: number) {
    setTodos(prevTodos => {
      const newTodos = []
      for (let i = 0; i < prevTodos.length; i++) {
        const currentTodo = prevTodos[i]
        if (currentTodo.id === id) {
          const updatedTodo = {
            ...currentTodo,
            isShown: !currentTodo.isShown
          }
          newTodos.push(updatedTodo)
        } else {
          newTodos.push(currentTodo)
        }
      }
      return newTodos
    })
  }
  function finish(id: number) {
    setTodos(prevTodos => {
      const newTodos = []
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
      return newTodos
    })
  }
  function add(text: string) {
    if (text.length > 0) {
      if (todos.length < 13) {
        setTodos(prevTodos => {
          const newTodos = []
          newTodos.push(
            ...prevTodos,
            {
              id: prevTodos.length + 1,
              content: text,
              isDone: false,
              isShown: true,
              remove: remove,
              finish: finish,
            })
          return newTodos
        })
      } else {
        alert("Die Liste ist zu lang...")
      }
    } else {
      alert("Es dürfen keine leeren Todos erstellt werden!")
    }
  }
  return (
    <div className="todolist">
      <Form add={add} />
      {todoElements}
    </div>
  );
}

export default Todolist;