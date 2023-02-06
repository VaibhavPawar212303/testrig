import React, { useState } from "react";
import closebutton from "../../images/close.png";
import Popup from "reactjs-popup";

const deleteProject = (id) => {
  fetch(`http://localhost:5000/api/project/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

//get the card and navigates to the details page
const goToDetails = (project_id) => {
  localStorage.setItem("projectID", project_id);
};

const Card = ({ project_id, project_name, project_Description }) => {
  //grab the project data
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    projectDesc: "",
  });

  //handle the changes
  const handleChange = (event) => {
    setProjectDetails({
      ...projectDetails,
      [event.target.name]: event.target.value,
    });
  };

  //retrive the data
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setProjectDetails({ projectName: "", projectDesc: "" });
  };

  const updateProject = (id) => {
    fetch(`http://localhost:5000/api/project/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proName: projectDetails.projectName,
        proDesc: projectDetails.projectDesc,
      }),
    }).then((response) => {
      return response.json();
    });
  };

  return (
    <div class="mt-20 w-48 h-48 rounded shadow-xl" key={project_id}>
      {/* click the button and delete the project */}
      <button
        onClick={() => deleteProject(project_id)}
        className="absolute ml-2 mt-4"
      >
        <a title="close icons">
          <img src={closebutton} height={14} width={14} />
        </a>
      </button>
      {/* -----------------------Card body ---------------------- */}
      <div
        class="px-3 py-4"
        key={project_id}
        onClick={() => goToDetails(project_id)}
      >
        <a href="/projectDetails">
          <div class="flex flex-col font-bold mb-2 items-center">
            {project_name}
          </div>
          <div class="text-gray-700 mb-2">{project_Description}</div>
        </a>
      </div>

      <Popup
        key={project_id}
        position="right"
        trigger={
          <button
            type="button"
            class="ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Project
          </button>
        }
      >
        {(close) => (
          <form onSubmit={handleSubmit} className="backdrop-blur-lg">
            <div className="flex flex-col items-center shadow-2xl shadow-black-300 h-96 w-96 mt-8 font-sans text-lg">
              <button onClick={() => close()} className="absolute ml-80 mt-4">
                <a title="close icons">
                  <img src={closebutton} height={20} width={20} />
                </a>
              </button>
              <div className="mb-4 mt-16">Update Project</div>
              <div
                className="mb-4 ml-2 flex flex-col items-center z-10"
                id="projectname"
              >
                Update Project Name
                <input
                  type="text"
                  className="h-10 border-b-4"
                  placeholder="Enter your project name"
                  name="projectName"
                  value={projectDetails.projectName}
                  onChange={handleChange}
                ></input>
              </div>
              <div
                className="mb-4 ml-2 flex flex-col items-center "
                id="projectname"
              >
                Describe Your Project
                <input
                  type="text"
                  className="h-10 border-b-4"
                  name="projectDesc"
                  placeholder="Enter your project name"
                  value={projectDetails.projectDesc}
                  onChange={handleChange}
                ></input>
              </div>
              <button
                type="submit"
                class="text-white w-44 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  updateProject(project_id);
                }}
              >
                Update Project
              </button>
            </div>
          </form>
        )}
      </Popup>
      {/* -----------------------Card body ---------------------- */}
    </div>
  );
};

export default Card;
