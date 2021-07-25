import { useState } from 'react';
import './App.css';
import ToDoFooter from './ToDoFooter';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn Js",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <ToDoHeader />
      <ToDoForm onAdd={(text) => {
        setTodos([...todos,
        {
          id: Math.random(),
          text: text,
          isCompleted: false
        }
      ])
      }} />
      <ToDoList 
      todos={todos}
      onChange={(newTodo) => {
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id) {
            return newTodo;
          }
          return todo;
        }));
      }}
      onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
      }}
      />
      <ToDoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
      }} />
    </div>
  );
}

export default App;
