import React, { Component, Fragment } from "react";

class JsonPlaceholder extends Component {
  state = {
    items: [],
    isLoaded: false,
    albumId: 1
  };

  componentDidMount() {
    let { albumId, items } = this.state;
    const url = `https://jsonplaceholder.typicode.com/albums/1/photos?albumId=${albumId}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: [...items, ...json]
        });

      });
  }

  loadMore = () => {
    this.setState(
      prevState => ({
        albumId: prevState.albumId + 1
      }),
      this.componentDidMount
    );
  };
  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div className="loader"></div>;
    } else {
      return (
        <Fragment>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "1000px",
              margin: "auto"
            }}
          >
            {items.map(item => (
              <div
                style={{
                  borderBottom: "solid 1px #ccc",
                  padding: "20px",
                  width: "150px"
                }}
                key={item.id}
              >
                <p>
                  <img src={item.thumbnailUrl} alt={item.id} />
                </p>
                <p>
                  {item.id} {item.title}
                </p>
              </div>
            ))}
          </div>
          <a
            onClick={this.loadMore}
            style={{
              width: "100px",
              margin: "auto",
              display: "block",
              fontSize: "18px",
              border: "1px solid green",
              padding: "10px",
              textAlign: "center",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Load More
          </a>
        </Fragment>
      );
    }
  }
}

export default JsonPlaceholder;
