import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { createGoal, updateGoal, deleteGoal } from './goalsSlice';
import GoalsForm from './GoalsForm';

const Goals = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.goals.status);
  const goals = useSelector((state) => state.goals);

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
    goalId: '',
    formValues: {
      name: '',
      description: '',
      time_of_completion: '',
      type: '',
      status: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({ submitHandler: createUserGoal, formValues: {} });
    openModal();
  };

  let editButtonClicked = (goal, e) => {
    setFormState({
      submitHandler: editUserGoal,
      goalId: goal.id,
      formValues: {
        name: goal.name,
        description: goal.description,
        time_of_completion: goal.timeOfCompletion,
        type: goal.type,
        status: goal.status,
      },
    });
    openModal();
  };

  let deleteButtonClicked = (goal) => {
    setFormState({
      submitHandler: deleteUserGoal,
      goalId: goal.id,
      formValues: {},
    });
    openModal();
  };

  let createUserGoal = (data) => {
    dispatch(createGoal(data));
    closeModal();
  };

  let editUserGoal = (data, goalId) => {
    data.id = goalId;
    dispatch(updateGoal(data));
    closeModal();
  };

  let deleteUserGoal = (data, goalId) => {
    dispatch(deleteGoal(goalId));
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
  const CardFooter = ({ goal }) => {
    return (
      <div className="flex flex-row w-full justify-evenly px-4 cursor-pointer">
        <button onClick={(e) => editButtonClicked(goal, e)}>
          <p className="font-sans font-bold text-md text-green-500">Edit</p>
        </button>
        <button onClick={() => deleteButtonClicked(goal)}>
          <p className="font-sans font-bold text-md text-green-500 ">Delete</p>
        </button>
      </div>
    );
  };
  const GoalCards = goals.goals.map((goal) => {
    return (
      <div className="w-56 mr-2 mb-2 shadow-lg flex" key={goal.id}>
        <Card
          date={goal.created_at}
          title={goal.name}
          subtitle={goal.description}
          tag={goal.type}
          footer={<CardFooter goal={goal} />}
        />
      </div>
    );
  });

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Create"
          subheading="Create goals that you can track."
          searchValue={searchValue}
          searchChange={searchChange}
        />
        <div className="flex flex-row flex-grow flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={createButtonClicked} />
          </div>
          {GoalCards}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Goal Modal"
      >
        <GoalsForm state={formState} />
      </Modal>
    </>
  );
};

export default Goals;
