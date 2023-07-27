

function App() {
  return (
    <div className="App">
    <h1>MODULE: 10 List and Hooks</h1>
      <h2>Q.1 Explain Life cycle in Class Component and functional component with Hooks</h2>
      <h3>A.1 . Let's explore the life cycle of both types of components and how they are managed with Hooks.
      <ol>
        <li><span style={{color: "khaki"}}> Life cycle in Class Components:</span>
Class components have a series of life cycle methods that allow you to perform actions at specific points in a component's life cycle. Here are some of the key life cycle methods and their purposes:</li>
<ul>
  <li>constructor(props): This is the first method called when a component is created. It is used for initializing state and binding event handlers.</li>
  <li>componentDidMount(): This method is called after the component has been rendered to the DOM. It is commonly used for making API calls, setting up subscriptions, or any one-time setup that requires access to the DOM.</li>
  <li>shouldComponentUpdate(nextProps, nextState): This method is called before the component re-renders. It allows you to control whether the component should update based on changes to props or state. By default, it returns true.</li>
  <li>componentDidUpdate(prevProps, prevState): This method is called after the component has re-rendered due to changes in props or state.</li>
  <li>componentWillUnmount(): This method is called when the component is about to be removed from the DOM. </li>
  <li>render(): This method is required and is responsible for returning the JSX that defines the component's UI.</li>
</ul>
<li><span style={{color: "khaki"}}>Life cycle in Functional Components with Hooks:</span>
React Hooks were introduced to allow functional components to manage state and side effects without the need for class components. Hooks provide similar functionality to the life cycle methods of class components but are more streamlined and simpler to use.</li>
<ul>
  <li>useState: This hook enables functional components to have state variables. It returns a state variable and a function to update that state.</li>
  <li>useEffect: This hook is similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined. </li>
  <li>useContext: This hook allows functional components to consume data from a React context created with React.createContext.</li>
  <li>useReducer: This hook is an alternative to useState for managing more complex state logic. It is similar to the redux approach and uses a reducer function to update state.</li>
  <li>useMemo and useCallback: These hooks optimize the performance of functional components by memoizing expensive calculations or preventing unnecessary re-rendering of child components.</li>
</ul>

      </ol>
      </h3>
    </div>
  );
}

export default App;
