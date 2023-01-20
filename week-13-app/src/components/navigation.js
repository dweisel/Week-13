import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Week 13 Assignment</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Link 1 <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 2</a>
      </li>
    </ul>
  </div>
</nav>
    } 
}