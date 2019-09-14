import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { incrementCount, decrementCount, passData } from './store/action';

function App(props) {
  return (
    <div className="App">
      {props.count}
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      {props.data}
      <button onClick={props.passData}>Pass my Name</button>
    </div>
  );
}

const mapStateToProps = state => ({
  // using the global state to the current component
  count: state.count,
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  // dispatching an action
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
  passData: () => dispatch(passData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// Functionnal -> use whenever you dont need any state -> useEffect
// class component -> when ever you need state -> different lifecycle method.

// React is different && Redux is different
// react-redux -> This is the connection between react and redux.

// TO implement redux
// 1. store
// 2. reducers
// 3. actions

// Redux Thunk -> dispatching asyncrounous actions.
