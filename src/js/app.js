babe=require ("babelify/polyfill");

React = require('react');
ReactDOM = require('react-dom');
Radium = require('radium');

var App = React.createClass({
  render() {
    return (
      <div className="app">
         React Browserify Boilerplate
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
