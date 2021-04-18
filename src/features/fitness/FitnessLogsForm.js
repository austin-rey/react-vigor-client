import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const FitnessLogsForm = ({ state }) => {
  const fitnessRoutines = useSelector((state) => state.fitnessRoutines);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.formValues,
  });

  const routineOptions = fitnessRoutines.routines.map((routine) => {
    return (
      <option value={routine.id} key={routine.id}>
        {routine.name} - {routine.description}
      </option>
    );
  });

  const { submitHandler } = state;

  if (state.submitType === 'Delete') {
    return (
      <form className="py-4 px-8 w-72">
        <input
          type="submit"
          value={state.submitType}
          onClick={handleSubmit((data) => submitHandler(data, state.logId))}
          className="font-sans font-bold text-xl mt-4 cursor-pointer p-4 transition duration-200 ease-in-out transform w-full h-full flex flex-col items-center justify-center shadow-lg opacity-90 bg-green-500 rounded-sm text-white hover:bg-green-200 hover:border-3 hover:text-gray-900 duration-400 ease-in-out hover:scale-105"
        />
      </form>
    );
  }

  return (
    <form className="py-4 px-8">
      <label
        htmlFor="nameField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Name of Log
      </label>
      <input
        name="name"
        id="nameField"
        type="text"
        placeholder="Your Log Name"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.nameField && console.log(errors.nameField)}

      <label
        htmlFor="descField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Description of Log
      </label>
      <input
        name="description"
        type="text"
        id="descField"
        placeholder="Your Log Description"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.descField?.type === 'required' && 'Your input is required'}

      <label
        htmlFor="dateField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Date of Workout
      </label>
      <input
        name="date_of_workout"
        type="datetime-local"
        id="dateField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.dateField && console.log(errors.dateField)}

      <label
        htmlFor="satisfactionField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Satisfaction
      </label>
      <select
        name="satisfaction"
        id="satisfactionField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      >
        <option value="bad">bad</option>
        <option value="ok">ok</option>
        <option value="good">good</option>
      </select>
      {errors.satisfactionField && console.log(errors.satisfactionField)}

      <label
        htmlFor="routineField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Type of Workout
      </label>
      <select
        name="routine"
        id="routineField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      >
        {routineOptions}
      </select>
      {errors.satisfactionField && console.log(errors.satisfactionField)}

      <label
        htmlFor="lengthField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Length of Workout
      </label>
      <input
        name="workoutLength"
        type="number"
        id="lengthField"
        placeholder="Example: 60"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.satisfactionField && console.log(errors.satisfactionField)}

      <input
        type="submit"
        value={state.submitType}
        onClick={handleSubmit((data) => submitHandler(data, state.logId))}
        className="font-sans font-bold text-xl mt-4 cursor-pointer p-4 transition duration-200 ease-in-out transform w-full h-full flex flex-col items-center justify-center shadow-lg opacity-90 bg-green-500 rounded-sm text-white hover:bg-green-200 hover:border-3 hover:text-gray-900 duration-400 ease-in-out hover:scale-105"
      />
    </form>
  );
};

export default FitnessLogsForm;
