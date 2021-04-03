import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

const DietLogsForm = ({ state }) => {
  const dietMeals = useSelector((state) => state.dietMeals);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.formValues,
  });

  const mealOptions = dietMeals.meals.map((meal) => {
    return (
      <option value={meal.id} key={meal.id}>
        {meal.name} - {meal.description}
      </option>
    );
  });

  const { submitHandler } = state;
  return (
    <form>
      <label
        htmlFor="mealField"
        className="leading-10 text-left text-lg w-full font-sans"
      >
        Type of Meal
      </label>
      <select
        name="meal"
        id="mealField"
        ref={register({ required: true })}
        className="w-full p-2 mb-2 rounded-sm border-2 border-gray-500 border-opacity-20 focus:border-gray-500 outline-none h-full hover:border-gray-500"
      >
        {mealOptions}
      </select>
      {errors.mealField && console.log(errors.mealField)}

      <input
        type="submit"
        onClick={handleSubmit((data) => submitHandler(data, state.logId))}
        className="w-full p-4 bg-gray-700 text-white font-bold rounded-sm cursor-pointer hover:bg-gray-900"
      />
    </form>
  );
};

export default DietLogsForm;
