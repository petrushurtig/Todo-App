import React, { useState } from 'react';

const Todolist = () => {
 
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }
  const todoItems = todos.map((todo, index) => 
  <tr key={index}>
    <td>{todo.date}</td>
    <td>{todo.desc}</td>
  </tr>)

  return (
    <div className="App">
        <header className="App-header">Simple Todolist</header>
            <div className="container">
                <form className="Todo-header" onSubmit={addTodo}>
                    <p className="Addtodo">Add todo:</p>
                    Description: <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
                    Date: <input type="text" name="date" onChange={inputChanged} value={todo.date}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
      <table>
        <tbody>
          <tr><th>Date</th><th>Description</th></tr>
            {todoItems}  
        </tbody>
      </table>
  </div>
  ) 
}
export default Todolist;