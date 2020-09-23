import React from 'react';
import '../assets/SideNote.css'
import { Input, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Start from './Start';



const { TextArea } = Input;
class SideNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue : "",
        };
        
        this.handleClick = this.handleClick.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        this.setState({inputValue: e.target.value})
    }

    handleClick(){
        
    }

    render(){
        return(
            <div className="SideNote">
                <p>Write your Side Note</p>
                <Space>
                    <TextArea rows={4} id="InputText" onChange = {this.handleInputChange} />
                </Space>
                <Space>
                    <Button type="primary"  icon={ <PlusOutlined />} onClick={this.handleClick}/>
                </Space>
            </div>
        )
        
    }
    
}
export default SideNote;
