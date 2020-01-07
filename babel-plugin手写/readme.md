## 流程
  源代码 -> 解析 -> AST(abstract syntax tree) -> 增删改查 -> AST -> 另外一份源代码

1. https://www.babeljs.cn/docs/babel-types#importdefaultspecifier
2. https://astexplorer.net/?tdsourcetag=s_pctim_aiomsg   AST
3. https://github.com/babel/babylon/blob/master/ast/spec.md#importdeclaration

增删改查： babel/types 工具库

###  Path
每次访问节点方法时，都会传入一个path参数，这个path参数中包含了节点的信息以及节点和所在的位置，以供对特定节点进行操作
```js
── 属性      
  - node   当前节点
  - parent  父节点
  - parentPath 父path
  - scope   作用域
  - context  上下文
  - …
── 方法
  - get   当前节点
  - findParent  向父节点搜寻节点
  - getSibling 获取兄弟节点
  - replaceWith  用AST节点替换该节点
  - replaceWithMultiple 用多个AST节点替换该节点
  - insertBefore  在节点前插入节点
  - insertAfter 在节点后插入节点
  - remove   删除节点
  - …
```
