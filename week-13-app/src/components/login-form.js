import React from "react";

let e = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return (
            <center>
<div className="card w-75">
<form> <h3> Login </h3>
  <label htmlFor="fname">Username:</label><br/>
  <input type="text" id="fname" name="fname"/><br/>
  <label htmlFor="lname">Password:</label><br/>
  <input type="text" id="lname" name="lname"/>
  <br/>
  <br/>
  <button> submit </button>
</form>
</div>
</center>
);        
}
}