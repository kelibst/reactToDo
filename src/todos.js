import React from 'react'

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
        <div className="card my-2"key={todo.id}>
            <div className="card-body">
                <h5 className="card-title">{todo.content}</h5>
                <p className="btn btn-danger delete" onClick={() => {deleteTodo(todo.id)}}>Remove</p>
            </div>
        </div>
            )
        })
    ) : (
        <p className="text-center">You currently do not have any todos!</p>
        )
    return (
        <div className="mx-auto">
            {todoList}
        </div>
    )
}
export default Todos