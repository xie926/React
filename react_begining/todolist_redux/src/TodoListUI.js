import React from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => (
  <div style={{ marginTop: '10px', marginLeft: '10px' }}>
    <div>
      <Input
        placeholder="Todo List"
        value={props.inputValue}
        style={{ width: '300px', marginRight: '10px' }}
        onChange={props.handleChangeValue}
      />
      <Button type="primary" onClick={props.handleClick}>提交</Button>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemClick(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  </div>
)
// class TodoListUI extends Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input 
//             placeholder= "Todo List"
//             value={this.props.inputValue} 
//             style={{ width: '300px', marginRight: '10px' }} 
//             onChange={this.props.handleChangeValue}  
//           />
//           <Button type="primary" onClick={this.props.handleClick}>提交</Button>
//           <List
//             style={{marginTop: '10px', width: '300px'}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item,index) => (
//               <List.Item onClick={() => this.props.handleItemClick(index)}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI