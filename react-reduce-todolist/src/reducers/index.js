const defaultList = [
  {
    complete: false,
    content: 'eat'
  },
]
// 生成默认值
// immutable 不可变数据
function todolist(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          content: action.content,
          complete: false
        }
      ]
    default:
      return defaultList;
  }
  return defaultList;
}
export default todolist