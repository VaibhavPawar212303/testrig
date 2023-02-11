import React, { useState } from "react";
import Popup from "reactjs-popup";
import closebutton from '../../images/close.png'
function Navbar() {
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

  const createProject = (event) => {
    fetch("https://testrig.onrender.com/api/project", {
      method: "POST",
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
    <>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a class="flex items-center">
            <img
              src="https://www.testrigtechnologies.com/wp-content/uploads/2020/05/logo-9.png"
              class="h-6 mr-3 sm:h-9"
              alt="TestRig Logo"
            />
          </a>
          <div class="flex md:order-2 mr-28">
            <Popup
              trigger={
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create Project
                </button>
              }
            >
              {(close) => (
                <form onSubmit={handleSubmit} className="backdrop-blur-lg">
                  <div className="flex flex-col items-center shadow-2xl shadow-black-300 h-96 w-96 mt-8 font-sans text-lg">
                    <button onClick={() => close()} className="absolute ml-80 mt-4">
                    <a href="https://www.flaticon.com/free-icons/close" title="close icons"><img src={closebutton} height={20} width={20}/></a>
                    </button>
                    <div className="mb-4 mt-16">Create Project</div>
                    <div
                      className="mb-4 ml-2 flex flex-col items-center z-10"
                      id="projectname"
                    >
                      Your Project Name
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
                      onClick={createProject}
                    >
                      Create Project
                    </button>
                  </div>
                </form>
              )}
            </Popup>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/projects"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Test Automation Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
