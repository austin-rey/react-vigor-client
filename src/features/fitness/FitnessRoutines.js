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
} from './fitnessRoutinesSlice';
import FitnessRoutinesForm from './FitnessRoutinesForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { isToday, getMonthDay, getDayName } from '../../util/dates';

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

  const modalStyles = {
    content: {
      padding: '0px',
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, 0%)',
      maxWidth: '900px',
      maxheight: '600px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // FORM
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [formState, setFormState] = useState({
    submitHandler: undefined,
    submitType: '',
    routineId: '',
    formValues: {
      nameField: '',
      descField: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({
      submitHandler: createRoutine,
      submitType: 'Create',
      formValues: {},
    });
    openModal();
  };

  let editButtonClicked = (routine, e) => {
    setFormState({
      submitHandler: editRoutine,
      submitType: 'Edit',
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
        <Button
          color="yellow"
          onclick={(e) => editButtonClicked(routine, e)}
          body={<p className="font-sans font-bold text-md">Edit</p>}
        />
      </div>
    );
  };
  const RoutineCards = fitnessRoutines.routines.map((routine) => {
    return (
      <div className="w-64 ml-4 mb-4 shadow-lg flex" key={routine.id}>
        <Card
          date={getMonthDay(routine.created_at)}
          title={routine.name}
          subtitle={routine.description}
          footer={<CardFooter routine={routine} />}
        />
      </div>
    );
  });

  const CreateButtonBody = (
    <>
      <span className="text-2xl pb-1">
        <FontAwesomeIcon icon={faPlusCircle} />
      </span>
      <h5 className="font-sans font-bold text-xl">CREATE</h5>
    </>
  );

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
        <div className="flex flex-row flex-grow flex-wrap w-full justify-end">
          <div className="w-64 ml-4 mb-4">
            <Button
              onclick={createButtonClicked}
              color="green"
              body={CreateButtonBody}
            />
          </div>
          {RoutineCards}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Fitness Log Modal"
        style={modalStyles}
      >
        <div className="bg-gray-900">
          <h3 className="font-sans font-bold text-3xl p-5 text-white">
            {formState.submitType} Routine
          </h3>
        </div>
        <FitnessRoutinesForm state={formState} />
      </Modal>
    </>
  );
};

export default FitnessRoutines;
