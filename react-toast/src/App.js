import React from 'react';
import  Toast from "./Toast.jsx";

class App extends React.Component {
  state = {
    flag: false
  }
  render() {
    const {flag} = this.state;
    return (
      <div>
        <button onClick={() => {
          // this.setState({
          //   flag: true
          // })
          Toast.addNotice('info', '内容一', 2000)
        }}>open</button>
        {/* props传参 */}
        {/* <Toast show={ flag } /> */}
      </div>
    )
  }
}

export default App;
