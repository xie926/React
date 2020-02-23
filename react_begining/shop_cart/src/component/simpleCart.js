import React, {Component} from  'react'

function Cart (props) {
  return (
    <table>
      <tbody>
        {props.data.map(d => (
          // 循环tr
          <tr key={d.text}>
            <td>{d.text}</td>
            <td>
              <button onClick={props.addCount(d)}>+</button>
              {d.count}
              <button>-</button>
            </td>
            <td>
              ￥ {d.price * d.count} 元
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
class cartSample extends Component {
  constructor(props){
    super(props)
    this.state ={
      text: '',
      goods: [
        {id: 1, text: '你不知道的JavaScript', price: 63},
        {id: 2, text: 'JavaScript程序设计', price: 90},
        {id: 3, text: '剑指offer', price: 70}
      ],
      cart: [],
      history: []
    }
    this.textChange = this.textChange.bind(this)
    this.addGoods = this.addGoods.bind(this)
  }
  textChange(e){
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  addGoods(){
    this.setState(prevState => ({
      goods: [...prevState.goods, {id: prevState.id, text: prevState.text, price: prevState.price}]
    }))
    console.log(123)
  }
  addCount(item){
    const newCart = [...this.state.cart]
    const idx = newCart.findIndex(c => c.text === item.text)
    newCart.splice(idx, 1, {...item, count: item.count+1})
    this.setState({
      cart: newCart,
      history: [...this.state.history, newCart]
    })
  }
  render(){
    const title = this.props.title ? <h1>{this.props.title}</h1> : null
    const goods = this.state.goods.map(good => (
        <li key={good.id}>
          {good.text}
          <button>加购</button>
        </li>
    ))
    return(
      <div>{title}
        <div>
          <input type='text' value={this.state.text} onChange={e => this.textChange(e)}></input>
          <button onClick={this.addGoods}>添加商品</button>
        </div>
        {/* 列表渲染 */}
        <ul>
          {goods}
        </ul>
        {/* 购物车列表 */}
        {/* 传递函数用于子组件与父组件进行交换 */}
        <Cart data={this.state.cart} addCount={this.addCount}></Cart>
      </div>
    )
  }
}

export default cartSample