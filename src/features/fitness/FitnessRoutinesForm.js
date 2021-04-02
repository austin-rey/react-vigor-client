import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const FitnessRoutinesForm = ({ state }) => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.formValues,
  });
  const { submitHandler } = state;

  return (
    <form>
      <label
        for="nameField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Name of Routine
      </label>
      <input
        name="name"
        id="nameField"
        type="text"
        placeholder="Your Routine Name"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.nameField && console.log(errors.nameField)}

      <label
        for="descField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Description of Routine
      </label>
      <input
        name="description"
        type="text"
        id="descField"
        placeholder="Your Routine Description"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.descField?.type === 'required' && 'Your input is required'}

      <input
        type="submit"
        onClick={handleSubmit((data) => submitHandler(data, state.routineId))}
        className="w-full p-4 bg-gray-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-900"
      />
    </form>
  );
};

export default FitnessRoutinesForm;
