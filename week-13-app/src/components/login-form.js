import React from "react";

let e = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <form>
                    <h3> Login </h3>
                    {/* comment - can edit form fields */}
  <label htmlFor="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname"/><br/>
  <label htmlFor="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname"/>
</form>
            </div>
        );
        
    }
}