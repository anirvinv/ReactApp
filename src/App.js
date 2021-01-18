import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import Tododata from "./components/Tododata";
//Dynamic styling with js
const style = {
  color: "red",
};

function App() {
  const todoComponents = Tododata.map(function (num) {
    return <Todo key={num.id} todo={num.todo} />;
  });
  console.log(todoComponents);
  return (
    <div className="App">
      <Header />
      {todoComponents}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
