import React from 'react'

class Checklist extends React.Component{
// If the item in question changes use a class like below
  constructor(props){
    super(props)
    this.state={
      checklist:["Learn react."],
      newTodo:"",
      completed:[],
    }

    this.update=this.update.bind(this)
    this.submit=this.submit.bind(this)
  }
  update(e){
    this.setState({newTodo:e.currentTarget.value})
  }
  submit(e){
    const newChecklist=this.state.checklist.slice(0)
    newChecklist.push(this.state.newTodo)
    this.setState({checklist:newChecklist, newTodo:""})
  }
  complete(idx) {
      return () => {
          const newChecklist = this.state.checklist.slice(0);
          const newCompleted = this.state.completed.slice(0);
          const todo  = newChecklist.splice(idx, 1)[0];
          newCompleted.push(todo);
          this.setState({
              checklist: newChecklist,
              completed: newCompleted
          });
    }
  }

  undo(idx) {
      return () => {
          const newChecklist = this.state.checklist.slice(0);
          const newCompleted = this.state.completed.slice(0);
          const todo  = newCompleted.splice(idx, 1)[0];
          newChecklist.push(todo);
          this.setState({
              checklist: newChecklist,
              completed: newCompleted
          });
    }
  }

  render(){
    return(
      <>
      <input id="newTodo" type="text" placeholder="new todo?" value={this.state.newTodo} onChange={this.update}/>
      <input id="submitButton" type="submit" value="submit" onClick={this.submit} />
      <ul className="u-checklist">
        {this.state.checklist.map((todo, idx)=> <li key={idx}> <button type="button" onClick={this.complete(idx)}> Done </button> {todo} </li>)}
      </ul>
      <ul className="c-checklist">
        {this.state.completed.map((todo, idx)=> <li key={idx}> <button type="button" onClick={this.undo(idx)}> Undo</button> {todo} </li>)}
      </ul>
      </>
    )
  }


}




// <li key={idx}> {todo} </li>
export default Checklist;
