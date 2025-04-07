import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 w-96 p-6 text-white rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-6">User Register</h2>
        <form onSubmit={handleSubmit((data) => console.log(data))}  className="flex flex-col gap-4 ">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input {...register('Name', { required: true })}
              id="name"
              type="text"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             {errors.Name && <p className="text-red-500 font-semibold">Name is required.</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input {...register('Email', { required: true })}
              id="email"
              type="email"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Email && <p className="text-red-500 font-semibold">Email is required.</p>}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input {...register('password', { required: true })}
              id="password"
              type="password"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
             {errors.password && <p className="text-red-500 font-semibold">Password is required.</p>}
            
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input {...register('password', { required: true })}
              id="confirmPassword"
              type="password"
              className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 font-semibold">Password is required.</p>}
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition"
          >
            Register
          </button>
          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
