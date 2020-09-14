import React from 'react';
import '../assets/Start.css'
import { Button, Space } from 'antd';
import Task from './Task';
import Rest from './Rest';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showStart: true,
        showRest : false,
        tasks : []
    };
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRestClick = this.handleRestClick.bind(this)
    // this.handleResetClick = this.handleResetClick(this)
    this.handleEnteredTask = this.handleEnteredTask.bind(this)
  }

  componentDidMount(){
    // console.log(localStorage.getItem('tasks'))
    if(this.props.data){
      console.log(this.props.data)
      //add enteredTask from Task.js to the tasks array state
      if(this.props.data.enteredTask){
        //check if tasks have that task?
        this.handleEnteredTask(this.props.data.enteredTask)
      }
      // Filter tasks with checked ones
      if(this.props.data.checkedTasks){
        console.log(this.props.data.checkedTasks)
        var savedTasks = JSON.parse(localStorage.getItem('tasks'))
        localStorage.removeItem('tasks')

        this.props.data.checkedTasks.forEach(element => {
            savedTasks = savedTasks.filter(item => item.desc != element.task)
        });
        console.log(savedTasks)
        localStorage.setItem('tasks', JSON.stringify(savedTasks))
      }

    }
  }

  handleEnteredTask(enteredTask){
    console.log(enteredTask)
    // this.setState({tasks: this.state.tasks.concat([enteredTask])}, ()=>{
    //   localStorage.setItem('tasks',JSON.stringify(this.state.tasks))
    // })
    var tasks = localStorage.getItem('tasks')
    var savedTasks = new Array()
    if(tasks){
      savedTasks = JSON.parse(tasks)
    }
    savedTasks.push(enteredTask)
    console.log(savedTasks)
    localStorage.setItem('tasks',JSON.stringify(savedTasks))
    console.log(JSON.parse(localStorage.getItem('tasks')))
    
  }

  handleAddClick(){
    this.setState({showStart: false});
  }
  
  handleRestClick(){
    this.setState({showStart: false}, () =>{
      this.setState({showRest : true})
    })
  }

  // handleResetClick(){
  //   localStorage.clear()
  //   console.log("localstorage cleared")
  // }

  render(){
    if(this.state.showStart){
      return (
        <div className="Start">
            <header className="App-header">
                <p>What do you want to do?</p>
                <div className="Button-container">
                    <Button block ghost onClick={this.handleAddClick}>Add Task</Button>
                    <Button type = "primary" block onClick={this.handleRestClick}>Rest</Button>
                    {/* <Button type = "primary" block onClick={this.handleResetClick}>Reset Tasks</Button> */}
                </div>
            </header>
        </div>
      );
    }
    else if(!this.state.showRest){
      return(<Task data={this.state.tasks.length}></Task>)
    }
    else{
      return (<Rest></Rest>)
    }
    
  }
}
export default Start;
