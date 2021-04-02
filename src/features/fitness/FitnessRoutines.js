import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import {
  createFitnessRoutine,
  updateFitnessRoutine,
  deleteFitnessRoutine,
} from './fitnessRoutinesSlice';
import FitnessRoutinesForm from './FitnessRoutinesForm';

const FitnessRoutines = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.fitnessRoutines.status);
  const fitnessRoutines = useSelector((state) => state.fitnessRoutines);

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
    routineId: '',
    formValues: {
      nameField: '',
      descField: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({ submitHandler: createRoutine, formValues: {} });
    openModal();
  };

  let editButtonClicked = (routine, e) => {
    console.log(routine);
    setFormState({
      submitHandler: editRoutine,
      routineId: routine.id,
      formValues: {
        name: routine.name,
        description: routine.description,
      },
    });
    openModal();
  };

  let createRoutine = (data) => {
    dispatch(createFitnessRoutine(data));
    closeModal();
  };

  let editRoutine = (data, id) => {
    data.id = id;
    dispatch(updateFitnessRoutine(data));
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
  const RoutineCards = fitnessRoutines.routines.map((routine) => {
    return (
      <div className="w-56 mr-2 mb-2 shadow-lg flex" key={routine.id}>
        <Card
          date={routine.created_at}
          title={routine.name}
          subtitle={routine.description}
          tag={`${routine.user.first_name} ${routine.user.last_name}`}
          footer={<CardFooter routine={routine} />}
        />
      </div>
    );
  });

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Workout Routines"
          subheading="Create workout plans to use in your logs."
          searchValue={searchValue}
          searchChange={searchChange}
        />
        <div className="flex flex-row flex-grow flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={createButtonClicked} />
          </div>
          {RoutineCards}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Fitness Log Modal"
      >
        <FitnessRoutinesForm state={formState} />
      </Modal>
    </>
  );
};

export default FitnessRoutines;
