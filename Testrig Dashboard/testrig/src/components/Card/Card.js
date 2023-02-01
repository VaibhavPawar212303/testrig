import React from "react";

const Card = ({ project_name, project_Description }) => {
  return (
    <div className="flex flex-nowrap align-top">
      <div class="mt-20 max-w-sm w-48 h-48 ml-24 rounded overflow-hidden shadow-lg">
        <div class="px-3 py-4">
          <div class="font-bold mb-2">{project_name}</div>
          <div class="text-gray-700 mb-2">{project_Description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
