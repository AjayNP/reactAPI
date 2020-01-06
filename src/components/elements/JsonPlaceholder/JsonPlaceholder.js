import React, { Component } from "react";

class JsonPlaceholder extends Component {
  state = {
    items: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{display:"flex", alignItems:"flex-end", flexWrap:"wrap"}}> 
          {items.map(item => (
            <div style={{borderBottom: "solid 1px #333", padding: "20px", width:"150px"}}>
              <p>{item.id} {item.title}</p>
              <p><img src={item.thumbnailUrl}/></p>
          
            </div>
          ))}
        </div>
      );
    }
  }
}

export default JsonPlaceholder;
