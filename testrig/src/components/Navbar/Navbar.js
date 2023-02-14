import React, { useState } from "react";
import Search from "../Search/Search";

function Navbar({ items }) {
  return (
    <>
      <nav class="absolute bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div className="ml-72">
            <div className="ml-96">
              <a class="flex items-center">
                <img
                  src="https://www.testrigtechnologies.com/wp-content/uploads/2020/05/logo-9.png"
                  class="h-6 mr-3 sm:h-9"
                  alt="TestRig Logo"
                />
              </a>
            </div>
          </div>
          <div class="flex md:order-2 mr-28">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/createproject">Create Project</a>
            </button>
          </div>
          <div className="absolute mt-3">
            <div className="mr-96">
              <Search projects={items} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
