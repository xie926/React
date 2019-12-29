document.getElementById('app').innerHTML('hello app??')

setTimeout(() => {
  fetch('http://rap2api.taobao.org/app/mock/240109/redux/todolist')
  .then(res => {
    return res.json()
  })
  .then(rse => {
    console.log('res   ', res);
  })
}, 3000);