import React from "react";

const Form = () => {
  return (
    <form>
      <input
        type="text"
        className="border border-grey-900 p-2 w-full rounded-md focus:outline-indigo-600 placeholder:text-sm my-2"
        placeholder="Title here"
      />
      <textarea
        placeholder="Enter Description"
        className="border border-grey-900 p-2 w-full rounded-md focus:outline-indigo-600 placeholder:text-sm my-2"
      ></textarea>
      <button className="bg-green-600 font-bold hover:bg-green-700 duration-50 py-2 px-5 rounded-md text-white w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;
