import React from 'react' 
// import styles from './styles.css' 

function TodoItems(props) {
    // const completedStyle = {
    //     fontStyle: 'italic',
    //     color: "#cdcdcd", 
    //     TextDecoration: "line-through"
    // }
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    

    return (
      <div className="todo-item">
        <input 
               type='checkbox'
               checked={props.item.completed}
               onChange={ () => 
                props.handleChange(props.item.id)} 
                /> 
            <p style={props.item.completed ? completedStyle : null }>{props.item.text}</p>
        </div> 
    )
}

export default TodoItems 
