import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./basis";

function UpdateTodo() {
  return {
    type: "ADD_TODO",
  };
}
//ye tou connect lgaya hai apne compoenet ko redux ke store ke sth bind krwaskte hai

class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   console.log("JSHFJHSA", this.props.Todo);
  //   console.log("123", this.props.updateTodo());
  //   store.dispatch({
  //     type: "ADD_TODO",
  //   });
  // }
  // componentWillRecieveProps(newProps) {
  //   console.log("boht mushkil", newProps);
  // }

  render() {
    console.log("TODODS==>", this.props.Todo);
    console.log("TODODS==>", this.props.updateTodo);
    //yaha console mein hmhe TODO_ADDED mil jae ga

    return (
      <div style={{ backgroundColor: "red" }}>
        <p>sadhalsdjakl</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Todo: state.Todo.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTodo: (data) => dispatch(UpdateTodo(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

//connect ke andr 2 parameter jate hai
// connect high ordewr ka kaam kr rha hai
//mapStateToProps kya kre ga redux ki state ko uthae ga props mein wrap kre ga  jis compoent pr lgae hai
// 2 aese life cycle hooks hai jo props ke update pr chlte hai jese compoenentWillRecieveProps iske parameter milte updated props
//
