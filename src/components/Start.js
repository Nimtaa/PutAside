import React from 'react';
import '../assets/Start.css'
import { Button } from 'antd';
import Task from './Task';
import Rest from './Rest';
import SideNote from './SideNote';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showStart: true,
        showRest : false,
        showAddTask: false,
        showAddSideNote: false,
        tasks : []
    };
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleRestClick = this.handleRestClick.bind(this)
    this.handleAddSideNoteClick = this.handleAddSideNoteClick.bind(this)
    this.handleEnteredTask = this.handleEnteredTask.bind(this)
  }

  componentDidMount(){
    // console.log(localStorage.getItem('tasks'))
    if(this.props.data){
      //add enteredTask from Task.js to the tasks array state
      if(this.props.data.enteredTask){
        //check if tasks have that task?
        this.handleEnteredTask(this.props.data.enteredTask)
      }
      // Filter tasks with checked ones
      if(this.props.data.checkedTasks){
        var savedTasks = JSON.parse(localStorage.getItem('tasks'))
        localStorage.removeItem('tasks')

        this.props.data.checkedTasks.forEach(element => {
            savedTasks = savedTasks.filter(item => item.desc !== element.task)
        });
        localStorage.setItem('tasks', JSON.stringify(savedTasks))
      }

    }
  }

  handleEnteredTask(enteredTask){
    // this.setState({tasks: this.state.tasks.concat([enteredTask])}, ()=>{
    //   localStorage.setItem('tasks',JSON.stringify(this.state.tasks))
    // })
    var tasks = localStorage.getItem('tasks')
    var savedTasks = []
    if(tasks){
      savedTasks = JSON.parse(tasks)
    }
    savedTasks.push(enteredTask)
    localStorage.setItem('tasks',JSON.stringify(savedTasks))
  }

  handleAddClick(){
    this.setState({showStart:false, showAddTask:true, showRest:false, showAddSideNote:false});
  }
  
  handleRestClick(){
    this.setState({showStart:false, showAddTask:false, showRest:true, showAddSideNote:false});
  }

  handleAddSideNoteClick(){
    this.setState({showStart:false, showAddTask:false, showRest:false, showAddSideNote:true});
  }

  render(){
    if(this.state.showStart){
      return (
        <div className="Start">
            <header className="App-header">
                <p>What do you want to do?</p>
                <div className="Button-container">
                    <Button block ghost onClick={this.handleAddSideNoteClick}>Add Side Note</Button>
                    <Button block ghost onClick={this.handleAddClick}>Add Task</Button>
                    <Button type = "primary" block onClick={this.handleRestClick}>Rest</Button>
                    {/* <Button type = "primary" block onClick={this.handleResetClick}>Reset Tasks</Button> */}
                </div>
            </header>
        </div>
      );
    }
    if(this.state.showAddTask){
      return(<Task data={this.state.tasks.length}></Task>)
    }
    if(this.state.showRest){
      return (<Rest></Rest>)
    }
    if(this.state.showAddSideNote){
      return (<SideNote></SideNote>)
    }
    
  }
}
export default Start;
