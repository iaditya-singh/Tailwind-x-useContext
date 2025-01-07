import React from "react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

const Card = ({ todo }) => {
  return (
    <div className="p-5 relative border rounded-md shadow-sm ">
      <h1 className="font-bold  text-2xl">{todo.title}</h1>
      <p className="text-gray-500 text-sm font-semibold ">{todo.description}</p>

      <div className="flex  p-1 rounded-md space-x-2 absolute top-3 right-3">
        <p className="text-yellow-500">
          <FaRegEdit />
        </p>
        <p className="text-red-500">
          <FaTrashAlt />
        </p>
      </div>
    </div>
  );
};

export default Card;
