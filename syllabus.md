# React Hooks

## Functional Component vs Class Component (understanding)

Q.
How is React class component different from functional component?

- more feature?
- better performance
- etc

Real:

**Function components capture the rendered values.**

## Why React Hooks?

1. Understanding `classe` is annoying as compared to simple `function`. (lots of boilerplate)
2. Hard to predict `this`
3. Duplicate logics (one in CDM or CDU etc)
4. Sharing non visual logics (react couples view and logic together, HOC)

## Things to do before learning hooks

1. Delete thinking in lifecycles.
2. Synchronization is how you think (all you always wanted to sync your state to your ui)

## Rules Of Hooks

1. Call order must be stable (no loops, conditions or nested functions)
2. Only call from function functional component or custom hooks (no classes)
3. Convention: Custom hooks name should start with `use` (helps the linters)

## Implement useTyping hook

## Implement useFetch hook

## Handeling State

- useState

  👉 **Preserve value between renders and triggers re-render on change.**

  When ever a you execute a function the variables defined inside is created and garbage collected when execution is over. So there must be a place react storing the value to preserve it. `useState` is the api to preserve the value between two re-renders.

  - When you pass a function call to set the initial value of `useState` it will call that function every time component re-renders.

  ```js
  function expensiveFunction() {
    return 10919191;
  }
  let [value, setValue] = useState(expensiveFunction());
  // You shold pass that as reference no call
  let [value, setValue] = useState(expensiveFunction);
  ```

2. useReducer

   👉

3. useRef

   👉 Preserve value between renders and doesn't trigger re-render on change.

## Handeling side effect

4. useEffect

   👉 This hook helps you manage side effects in the program. Side effect is anything that interacts with the outside of local environment of any function. There is three things in `useEffect`

   - add an effect
   - re-invoke the effect or not
   - remove the effect on unmount or next call

5) useLayoutEffect

## Optimazation

6. useCallback
7. useMemo

8. useContext
