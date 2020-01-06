import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import './App.css'

let key = 0;
class Toast extends Component {
  state = {
    toastList: [
    ]
  }
  addNotice(icon, content, duration) {
    key++;
    const item = {key, icon, content, duration};
    let toastList = this.state.toastList.slice(0);
    toastList.push(item);
    this.setState({
      toastList
    })
    setTimeout(() => {
      let toastList1 = this.state.toastList.slice(0);
      let index = toastList1.findIndex(key => item.key === key);
      toastList1.splice(index, 1);
      this.setState({
        toastList: toastList1
      })
    }, duration);
  }
  render() {
    const {toastList} = this.state;
    // const { show } = this.props;
    // if(!show) return null;
      return (
        <>
        <TransitionGroup>
        {
          toastList.map((toast) => {
            return (
              <CSSTransition key={toast.key} classNames="notice" timeout={300}>
                <li ref="ref1" key={toast.key}>{ toast.icon }: { toast.content }</li>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        </>
    )
  }
}
let instance = null;//单例，每次new出来的都是同一个
export default {
  addNotice: function (icon, content, duration) {
    if(instance) {
      return instance.addNotice(icon, content, duration)
    }

    // ref 获取一个真实的DOM结点
    let div = document.createElement('div');
    document.body.appendChild(div);//将div添加到body下
    let objRef = React.createRef();
    // 获取这个组件的实例，将结点渲染到全局的div上
    ReactDom.render(<Toast ref={objRef} />, div);
    instance = objRef.current;
    return objRef.current.addNotice(icon, content, duration)
  }
};