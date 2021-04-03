import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { createDietLog, updateDietLog, deleteDietLog } from './dietLogsSlice';
import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import DietLogsForm from './DietLogsForm';

const DietLogs = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.dietLogs.status);
  const dietLogs = useSelector((state) => state.dietLogs);
  const dietMeals = useSelector((state) => state.dietMeals);

  console.log('Diet Meals:', dietMeals);
  console.log('Diet Logs:', dietLogs);

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
  // Form
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [formState, setFormState] = useState({
    submitHandler: undefined,
    logId: '',
    formValues: {
      meal: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({ submitHandler: createLog, formValues: {} });
    openModal();
  };

  let editButtonClicked = (log) => {
    setFormState({
      submitHandler: editLog,
      logId: log.id,
      formValues: {
        meal: log.meal,
      },
    });
    openModal();
  };

  let deleteButtonClicked = (log) => {
    setFormState({ submitHandler: deleteLog, logId: log.id, formValues: {} });
    openModal();
  };

  let createLog = (data) => {
    dispatch(createDietLog(data));
    closeModal();
  };

  let editLog = (data, logId) => {
    data.id = logId;
    dispatch(updateDietLog(data));
    closeModal();
  };

  let deleteLog = (data, logId) => {
    dispatch(deleteDietLog(logId));
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

  const CardFooter = ({ log }) => {
    return (
      <div className="flex flex-row w-full justify-evenly px-4 cursor-pointer">
        <button onClick={() => editButtonClicked(log)}>
          <p className="font-sans font-bold text-md text-green-500">Edit</p>
        </button>
        <button onClick={() => deleteButtonClicked(log)}>
          <p className="font-sans font-bold text-md text-green-500 ">Delete</p>
        </button>
      </div>
    );
  };

  const LogCards = dietLogs.logs.map((log) => {
    return (
      <div className="w-56 mr-2 mb-2 shadow-lg flex" key={log.id}>
        <Card
          date={log.created_at}
          title={log.meals.name}
          subtitle={log.meals.description}
          tag={`${log.meals.calories} calories`}
          footer={<CardFooter log={log} />}
        />
      </div>
    );
  });

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Log Meals"
          subheading="Create, Update and Delete Meals"
          searchValue={searchValue}
          searchChange={searchChange}
        />
        <div className="flex flex-row flex-grow flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={createButtonClicked} />
          </div>
          {LogCards}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Fitness Log Modal"
      >
        <DietLogsForm state={formState} />
      </Modal>
    </>
  );
};

export default DietLogs;
