import React, { useMemo, useState, useCallback, useEffect } from 'react';


// useXXX   hooks   []
let set1 = new Set();
let set2 = new Set();
function App() {
  let [count, setCount] = useState(0);
  let [time, setTime] = useState(0);
  // count改变  calculate才计算     useMemo缓存结果
  const calculate = useMemo(() => count + '.' + time, [count]);
  // const fn = () => count + '.' + time;，useCallback缓存函数
  const fn1 = () => count + '.' + time;
  const fn2 = useCallback(() => count + '.' + time, [count]);
  set1.add(fn1);
  set2.add(fn2);
  // useEffect 模拟生命周期
  useEffect(() => {
    console.log(123);
    // mount   componentDidMount   第一次
    // updation:  props or state change         render componentDidUpdate 第一次后
    // unmount       componentWillUnmount
    // 每次组件重新渲染，都会执行卸载
    return () => {console.log('卸载');
    }
  })
  return (
    <div>
      <div>time: {time}</div>
      <div>count: {count}</div>
      <div>calculate: { calculate }</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={ () => {setCount(++count)} }>count++</button>
      <button onClick={ () => {
        setTime(Date.now())
      } }>time change</button>
    </div>
  );
}

export default App;