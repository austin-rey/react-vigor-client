import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from './userSlice';

const LoginForm = () => {
  const { register, errors, handleSubmit } = useForm({});
  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(loginUser(data));
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form
      className="root flex flex-col bg-white rounded-sm opacity-95"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h2>Login</h2>
      <div className="m-5">
        <label
          for="emailField"
          className="w-full text-left leading-10 text-xl font-sans"
        >
          Email
        </label>
        <input
          type="text"
          id="emailField"
          name="email"
          placeholder="Enter a valid email..."
          className="w-full p-2 rounded-md border-4 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
          ref={register({ required: true })}
        />
      </div>
      <div className="m-5">
        <label
          for="password-field"
          className="w-full text-left leading-10 text-xl font-sans"
        >
          Password
        </label>
        <input
          type="password"
          id="password-field"
          name="password"
          placeholder="Enter a valid password..."
          className="w-full p-2 rounded-md border-4 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
          ref={register({ required: true })}
        />
      </div>
      <div className="m-5">
        <input
          type="submit"
          value="Submit"
          className="w-full p-4 bg-green-700 text-white rounded-md font-bold hover:bg-green-900 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default LoginForm;
