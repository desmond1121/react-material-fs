import React from 'react';
import ReactDOM from 'react-dom';
import style from './main.css';

class Demo extends React.Component {
  render() {
    return (
      <h1 className={style.element}>
        Hello World
      </h1>
    );
  }
};  

ReactDOM.render(
  <Demo />,
  document.getElementById("root")
);