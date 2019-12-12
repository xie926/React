## wrapper hell
withRouter(whitIsLoading(Topic))
1. 层次过多
```js
function HOC (Com) {
  class With {}
  return With
}
```