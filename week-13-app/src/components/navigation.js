// not trying to import a nav bar w/ links and it's not working

import React from 'react';

export default class Navigation extends React.Component {
    render() {
        return <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
      </nav>;
    } 
}