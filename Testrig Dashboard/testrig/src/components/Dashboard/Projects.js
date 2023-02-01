import React, { Component } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

export default class projects extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("http://localhost:5000/api/project")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.projectData);
        this.setState({
          items: data.projectData,
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
      <div className="flex flex-row mt-20">
        <Navbar />
        {items.map((item) => (
          <Card
            project_name={item.project_name}
            project_Description={item.project_Description}
          />
        ))
        }
      </div>
    );
  }
}
