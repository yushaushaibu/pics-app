import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  onSearchSubmit = (term) => {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID mxB8lOIvU5u29lbTvOx6bO1nlLl91d5XFUEgoINsHoA",
      },
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitt={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
