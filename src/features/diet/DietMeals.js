import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { createDietMeal, updateDietMeal } from './dietMealsSlice';
import DietMealsForm from './DietMealsForm';

const DietMeals = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.dietMeals.status);
  const meals = useSelector((state) => state.dietMeals);
  console.log(meals);
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // SEARCH - SORT - PAGINATION
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [searchValue, setSearchValue] = useState('');
  const searchChange = (e) => {
    setSearchValue('');
    console.log('search change');
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // MODAL
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // FORM
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [formState, setFormState] = useState({
    submitHandler: undefined,
    mealId: '',
    formValues: {
      nameField: '',
      descField: '',
      calories: '',
      type: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({ submitHandler: createMeal, formValues: {} });
    openModal();
  };

  let editButtonClicked = (meal, e) => {
    setFormState({
      submitHandler: editMeal,
      mealId: meal.id,
      formValues: {
        name: meal.name,
        description: meal.description,
        calories: meal.calories,
        type: meal.type,
      },
    });
    openModal();
  };

  let createMeal = (data) => {
    dispatch(createDietMeal(data));
    closeModal();
  };

  let editMeal = (data, id) => {
    data.id = id;
    dispatch(updateDietMeal(data));
    closeModal();
  };

  if (loadingStatus === 'loading') {
    return (
      <div className="w-min-content flex flex-grow mb-2">
        <Loading />
      </div>
    );
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // CARDS
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const CardFooter = ({ routine }) => {
    return (
      <div className="flex flex-row w-full justify-evenly px-4 cursor-pointer">
        <button onClick={(e) => editButtonClicked(routine, e)}>
          <p className="font-sans font-bold text-md text-green-500">Edit</p>
        </button>
      </div>
    );
  };
  const MealCards = meals.meals.map((meal) => {
    return (
      <div className="w-56 mr-2 mb-2 shadow-lg flex" key={meal.id}>
        <Card
          date={meal.created_at}
          title={meal.name}
          subtitle={meal.description}
          tag={meal.type}
          footer={<CardFooter routine={meal} />}
        />
      </div>
    );
  });

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Create Meals"
          subheading="Create meals that you often consume."
          searchValue={searchValue}
          searchChange={searchChange}
        />
        <div className="flex flex-row flex-grow flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={createButtonClicked} />
          </div>
          {MealCards}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Fitness Log Modal"
      >
        <DietMealsForm state={formState} />
      </Modal>
    </>
  );
};

export default DietMeals;
