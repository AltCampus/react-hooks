```js
const states = []
let callCount = -1
function useState(initialState) {
  let id = ++callCount
  if (states[id]) {
    return states[id]
  }
  const setValue = newValue => {
    // update the old value
    state[id][0] = newValue
    // re-render
    reRender()
  }
  let tuple = [initialValue, setValue]
  states.push(tuple)
  return tuple
}
```
