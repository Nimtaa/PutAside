import React from 'react';
import '../assets/Task.css'
import { Select, Space, Input, Button  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Start from './Start';


const { Option } = Select;


class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeValue : 5,
            inputValue : "",
            showStart : false,  
            tasks : [],
            data : [],
            enteredTask : {}
        };
        
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentDidMount(){
        // if(this.props.data){
        //     console.log(this.props.data.data)   
        //     this.setState({data : this.props.data.data})
        // }   
    }
    handleChange(value) {
        this.setState({timeValue: value});
    }

    handleInputChange(e){
        this.setState({inputValue: e.target.value});
    }

    handleClick(){
        var savedTasks = 0
        console.log(localStorage.getItem('tasks'))
        if(localStorage.getItem('tasks') !== null)   {
            var storage = JSON.parse(localStorage.getItem('tasks'))
            if(storage.length !== 0) savedTasks = storage[storage.length - 1].key
        }
        
        var task = {
            'desc': this.state.inputValue,
            'time': this.state.timeValue,
            'key' : savedTasks + 1
        }
        // this.setState(state => ({
        //     data: [...state.data, task],
        //     showStart: true
        //   }))
        this.setState({
            enteredTask : task,
            showStart: true
        })
    }
    render(){
        if(!this.state.showStart){
            return (   
                <div className="Task">
                    <p>Hmm..! What task? How much time?</p>
                    <div className="Task-container">
                        <Space>
                            <Input style={{width : 250}} placeholder="Explain..." onChange={this.handleInputChange}/>
                            <Select placeholder="Time" style={{ width: 90 }} onChange={this.handleChange}>
                                <Option value="5">5 min</Option>
                                <Option value="10">10 min</Option>
                                <Option value="15">15 min</Option>
                                <Option value="30">30 min</Option>
                                <Option value="45">45 min</Option>
                                <Option value="60">60 min</Option>
                            </Select>
                            <Button type="primary"  icon={ <PlusOutlined />} onClick={this.handleClick}/>
                        </Space>
                    
                    </div>
                </div>
                )
            }
        else{
            return(<Start data = {this.state} />)
        }
        }
    
}
export default Task;
