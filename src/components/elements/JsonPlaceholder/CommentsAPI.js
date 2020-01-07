import React, { Component } from "react";
import "./Comment.css";
class CommentAPI extends Component {
  state = {
    items: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(jsonData => {
        this.setState({
          isLoaded: true,
          items: jsonData
        });
      });
  }
  render() {
    let { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <h1 className="loader"></h1>;
    } else {
      return (
        <div>
          {items.map(data => (
            <p>
              {data.id} {data.email}
            </p>
          ))}
        </div>
      );
    }
  }
}
export default CommentAPI;
