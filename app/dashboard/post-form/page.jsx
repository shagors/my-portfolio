"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const PostForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    category: "",
    name: "",
    description: "",
    link: "",
    github: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
    }
  };
  console.log(formData.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the formData to your server to store in the database
    console.log(formData);
    // toast.success("Data successfully store", {
    //   duration: 4000,
    //   position: "top-center",
    // });
    // Reset form fields after submission
    setFormData({
      image: "",
      category: "",
      name: "",
      description: "",
      link: "",
      github: "",
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Post Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-700"
          >
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            required
            onChange={handleFileChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category Of Project
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            placeholder="React or next.js"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name Of Project
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="give project name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="give project description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="link"
            className="block text-lg font-medium text-gray-700"
          >
            Project Live Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            required
            placeholder="give project live link"
            value={formData.link}
            onChange={handleChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          />
        </div>

        <div>
          <label
            htmlFor="github"
            className="block text-lg font-medium text-gray-700"
          >
            Project GitHub
          </label>
          <input
            type="text"
            id="github"
            name="github"
            required
            placeholder="give project github link"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 pl-5"
          />
        </div>
        {/* button */}
        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-40"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
