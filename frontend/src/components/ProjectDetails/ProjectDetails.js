import React, { Component } from "react";
import BugMeter from "../Charts/BugMeter";
import Timeline from "../Timeline/Timeline";

//get the project report by it's id
const id = localStorage.getItem("projectID");

export default class ProjectDetails extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://testrig.onrender.com/api/project/getproject/${id}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          items: data,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1> Builds not available </h1>
        </div>
      );

    return (
      <>
        <div>
          <BugMeter />
          {items.report.map((build) => {
            return (
              <div key={build.report_id}>
                <Timeline
                  buildId={build.report_id}
                  buildName={build.build_name}
                  buildDate={build.build_date}
                />
              </div>
            );
          })}
        </div>
        <div>

        </div>
      </>
    );
  }
}
