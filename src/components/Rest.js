import React from 'react';
import '../assets/Rest.css'
import { Button, Table, Select, Tooltip, message } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Start from './Start';


const { Option } = Select;


class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeValue : 5,
            inputValue : "",
            data : [],
            checkedTasks : [],
            showStart : false,
            showTable : false,
            selectedRowKeys: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleClickHome = this.handleClickHome.bind(this)
        this.handleSelectRow = this.handleSelectRow.bind(this)
      }
      columns = [
        {
          title: 'Task',
          dataIndex: 'task',
          key: 'task',  
        },
        {
          title: 'Time',
          dataIndex: 'time',
          key: 'time',
        }
      ];
    handleChange(value) {
    
        // var storedTasks = this.props.data.data
        var storedTasks = JSON.parse(localStorage.getItem('tasks'))
        var numTasks = storedTasks.length
        
        storedTasks.sort(function(a, b) {
            var keyA = a.time,
            keyB = b.time;
            return (keyA - keyB);
        });

        var sum = 0, data = [];
        for(var i =0; i<numTasks; i++){
            sum += Number(storedTasks[i].time)
            if(sum <= Number(value)) {
                data.push(
                    {
                        task: storedTasks[i].desc, 
                        time: storedTasks[i].time,
                        key: storedTasks[i].key
                    })
            }
        }
        this.setState({timeValue: value, showTable: true, data:data}, () =>{
        })
    }
    handleClickHome(){       
        this.setState({showStart : true, showTable: false})
    }
    handleSelectRow (selectedRowKeys, selectedRows) {

        const selectedTask = selectedRows[selectedRows.length - 1] 
        const dataSource = [...this.state.data];
        message.success(selectedTask.task + ' Completed!');
        this.setState(
            {data : dataSource.filter(item => item.task !== selectedTask.task)}, () =>{
                this.setState({checkedTasks : [...this.state.checkedTasks, selectedTask]})
            } 
        )
        // this.setState({checkedTasks : [...this.state.checkedTasks, selectedTask]})
    }
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {this.handleSelectRow(selectedRowKeys, selectedRows)}
        }
        if(this.state.showTable){
            return(
                <div className="RestTable">
                    <Tooltip title="Back Home">
                        <Button ghost icon={ <HomeOutlined />} onClick={this.handleClickHome}/>
                    </Tooltip>
                    <p>I want to rest for {this.state.timeValue} minutes!</p>
                    <Table 
                    rowSelection={{
                        type: 'radio',
                        ...rowSelection
                    }}
                    columns={this.columns} dataSource={this.state.data} showHeader = {false}
                    pagination= {false}/>
                </div>
            )
        }   
        else if(!this.state.showStart){
            return (   
                <div className="Rest">
                    <Tooltip title="Back Home">
                     <Button ghost icon={ <HomeOutlined />} onClick={this.handleClickHome}/>
                    </Tooltip>
                    <p>Great! How much?</p>
                    <div className="Task-container">
                            <Select  placeholder = "Time" style={{ width: 118 }} onChange={this.handleChange}>
                                <Option value="5">5 min</Option>
                                <Option value="10">10 min</Option>
                                <Option value="15">15 min</Option>
                                <Option value="30">30 min</Option>
                                <Option value="45">45 min</Option>
                                <Option value="60">60 min</Option>
                            </Select>               
                            
                    </div>  
                </div>
                
                )
            }
        else {
            return(<Start data = {this.state} />)
        }
        }
}
export default Rest;