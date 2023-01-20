import React from "react";
import Post from "./post";
import Navigation from  "./navigation";

let e = React.createElement;

export default class NewsFeed extends React.Component {
render() {
    return (
        <div className="container">
            <Navigation />
            <Post />
            <Post />
        </div>
    );
}
}