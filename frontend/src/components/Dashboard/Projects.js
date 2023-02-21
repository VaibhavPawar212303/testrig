import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

export default class Projects extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/project/", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result)
        this.setState({
          items: data.result,
          DataisLoaded: true, 
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

    return (
      <div>
        <Navbar />
        <div className="ml-20 mt-5">
          <Search projects={items} />
        </div>
      </div>
    );
  }
}
