import React, { useState } from "react";

function Navbar({ items }) {
  return (
    <>
     
        <div class="absolute container flex flex-wrap items-center justify-between mx-auto ml-10">
          <div className="">
            <a class="flex items-center">
              <img
                src="https://www.testrigtechnologies.com/wp-content/uploads/2020/05/logo-9.png"
                class="h-6 mr-3 sm:h-9"
                alt="TestRig Logo"
              />
            </a>
          </div>
          <div class="md:order-2 mt-1">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/createproject">Create Project</a>
            </button>
          </div>
        </div>
      
    </>
  );
}

export default Navbar;
