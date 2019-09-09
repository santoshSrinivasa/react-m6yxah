import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const emp = [
    {name:"abc",isDeveloper:true},
    {name:"def",isDeveloper:false}
  ];
  return (
    <ul>
    {emp.filter(isdeveloper => isdeveloper.isDeveloper).map(emp1 => <li>{emp1.name}</li>)}
    </ul>
  );
}
render(<App />, document.getElementById('root'));
