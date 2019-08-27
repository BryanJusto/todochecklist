import React from 'react'

class Checklist extends React.Component{
// If the item in question changes use a class like below
  constructor(props){
    super(props)
    this.state={
      checklist:["Learn react."],
      newTodo:"",

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
  render(){
    return(
      <>
      <input id="newTodo" type="text" placeholder="new todo?" value={this.state.newTodo} onChange={this.update}/>
      <input id="submitButton" type="submit" value="submit" onClick={this.submit} />

      <ul>
        {this.state.checklist.map((todo, idx)=><li key={idx}> {todo} </li>)}
      </ul>
      </>
    )
  }


}




export default Checklist;
