import React from "react";
import "./style.css";

const style = {
  color: "gray",
  fontFamily: "Open Sans",
  fontSize: 18,
};

function doSomething() {}

function Todo(props) {
  return (
    <div>
      <button onClick={doSomething} />
      <input className="check" type="checkbox" />
      <p style={style}>{props.todo}</p>
      <hr />
    </div>
  );
}
export default Todo;
