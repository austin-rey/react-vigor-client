import React from 'react';
import { useForm } from 'react-hook-form';

const FitnessRoutinesForm = ({ state }) => {
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.formValues,
  });

  const { submitHandler } = state;

  return (
    <form className="py-4 px-8">
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
        value={state.submitType}
        onClick={handleSubmit((data) => submitHandler(data, state.routineId))}
        className="font-sans font-bold text-xl mt-4 cursor-pointer p-4 transition duration-200 ease-in-out transform w-full h-full flex flex-col items-center justify-center shadow-lg opacity-90 bg-green-500 rounded-sm text-white hover:bg-green-200 hover:border-3 hover:text-gray-900 duration-400 ease-in-out hover:scale-105"
      />
    </form>
  );
};

export default FitnessRoutinesForm;
