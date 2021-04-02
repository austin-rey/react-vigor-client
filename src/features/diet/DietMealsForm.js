import React from 'react';
import { useForm } from 'react-hook-form';

const DietMealsForm = ({ state }) => {
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
        Name of Meal
      </label>
      <input
        name="name"
        id="nameField"
        type="text"
        placeholder="Your Meals Name"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.nameField && console.log(errors.nameField)}

      <label
        for="descField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Description of Meal
      </label>
      <input
        name="description"
        type="text"
        id="descField"
        placeholder="Your Meals Description"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />
      {errors.descField?.type === 'required' && 'Your input is required'}

      <label
        for="caloriesField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Calories of Meal
      </label>
      <input
        name="calories"
        type="number"
        id="caloriesField"
        placeholder="Your Meals Amount of Calories"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      />

      {errors.descField?.type === 'required' && 'Your input is required'}

      <label
        htmlFor="satisfactionField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Meal Type
      </label>
      <select
        name="type"
        id="typeField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
        <option value="dessert">Dessert</option>
      </select>
      {errors.typeField && console.log(errors.typeField)}

      <input
        type="submit"
        onClick={handleSubmit((data) => submitHandler(data, state.mealId))}
        className="w-full p-4 bg-gray-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-900"
      />
    </form>
  );
};

export default DietMealsForm;
