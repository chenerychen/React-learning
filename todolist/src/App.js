import React from 'react'
import TodoItems from './TodoItems'
import todosData from './todosData' 

class App extends React.Component {
  constructor() {
    super() 
    this.state={
      todos: todosData 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedStates = prevState.todos.map(todo => {
          if (todo.id === id) {
            // todo.completed = !todo.completed
            return {
              ...todo, 
              completed: !todo.completed
            }
          }
          return todo 
      })
      return {todos: updatedStates}  
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItems key={item.id} item={item} handleChange={this.handleChange} />)
    

    return (
        <div> 
          {todoItems}
        </div>
    )
  }

}

export default App


