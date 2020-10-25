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

      <table><tbody>
        <tr><th>Description</th><th>Date</th></tr>
        {todos.map((todo) =>
            <tr key={todo.desc}>
              <td>{todo.desc}</td> 
              <td>{todo.date}</td> 
            </tr>
            )}
        </tbody>
      </table>
      </div>
  ) }
  
      
    
export default Todolist;