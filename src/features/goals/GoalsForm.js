import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const GoalsForm = ({ state }) => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.formValues,
  });

  const { submitHandler } = state;
  return (
    <form>
      <label
        htmlFor="nameField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Name of Goal
      </label>
      <input
        name="name"
        id="nameField"
        type="text"
        placeholder="Your Goals Name"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.nameField && console.log(errors.nameField)}

      <label
        htmlFor="descField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Description of Goal
      </label>
      <input
        name="description"
        type="text"
        id="descField"
        placeholder="Your Goals Description"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.descField?.type === 'required' && 'Your input is required'}

      <label
        htmlFor="dateField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Time of Completion
      </label>
      <input
        name="timeOfCompletion"
        type="datetime-local"
        id="dateField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.dateField && console.log(errors.dateField)}

      <label
        htmlFor="typeField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Type of Goal
      </label>
      <select
        name="type"
        id="typeField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      >
        <option value="fitness">Fitness</option>
        <option value="wellness">Wellness</option>
        <option value="diet">Diet</option>
        <option value="all">All</option>
      </select>
      {errors.typeField && console.log(errors.typeField)}

      <label
        htmlFor="statusField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Type of Workout
      </label>

      <input
        type="submit"
        onClick={handleSubmit((data) => submitHandler(data, state.goalId))}
        className="w-full p-4 bg-gray-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-900"
      />
    </form>
  );
};

export default GoalsForm;
