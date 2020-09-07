import React, { Component } from "react"

class AddTodo extends Component{
    state={
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
          e.preventDefault();  
          this.props.addTodo(this.state)
          this.setState(
              {
                  content: ""
              }
          )
    }
    render(){
        return(
            <div className="formcontainer">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Add New todo</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} value={this.state.content} placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Enter a valid todo name</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
            </div>
        )
    }
}

export default AddTodo