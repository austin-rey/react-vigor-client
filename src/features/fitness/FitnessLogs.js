import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFitnessLogs,
  createFitnessLog,
  updateFitnessLog,
  deleteFitnessLog,
  fetchFitnessReport,
} from './fitnessLogsSlice';
import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import FitnessLogsForm from './FitnessLogsForm';
import { isToday, getMonthDay, getDayName } from '../../util/dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const FitnessLogs = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.fitnessLogs.status);
  const fitnessLogs = useSelector((state) => state.fitnessLogs);
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
  // Form
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [formState, setFormState] = useState({
    submitHandler: undefined,
    submitType: '',
    logId: '',
    formValues: {
      nameField: '',
      descField: '',
      dateField: '',
      satisfactionField: '',
      routineField: '',
      lengthField: '',
    },
  });

  let createButtonClicked = () => {
    setFormState({
      submitHandler: createLog,
      submitType: 'Create',
      formValues: {},
    });
    openModal();
  };

  let editButtonClicked = (log) => {
    setFormState({
      submitHandler: editLog,
      submitType: 'Edit',
      logId: log.id,
      formValues: {
        name: log.name,
        description: log.description,
        date_of_workout: log.date_of_workout,
        satisfaction: log.satisfaction,
        routine: log.workout_type,
        workoutLength: log.workout_length,
      },
    });
    openModal();
  };

  let deleteButtonClicked = (log) => {
    setFormState({
      submitHandler: deleteLog,
      logId: log.id,
      submitType: 'Delete',
      formValues: {},
    });
    openModal();
  };

  let createLog = (data) => {
    dispatch(createFitnessLog(data));
    closeModal();
  };

  let editLog = (data, logId) => {
    data.id = logId;
    dispatch(updateFitnessLog(data));
    closeModal();
  };

  let deleteLog = (data, logId) => {
    dispatch(deleteFitnessLog(logId));
    closeModal();
  };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // LOG CARDS
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const CardFooter = ({ log }) => {
    return (
      <div className="flex flex-row w-full justify-evenly px-4 cursor-pointer">
        <div className="flex w-full m-1">
          <Button
            color="yellow"
            onclick={() => editButtonClicked(log)}
            body={<p className="font-sans font-bold text-md">Edit</p>}
          />
        </div>
        <div className="flex w-full m-1">
          <Button
            color="red"
            onclick={() => deleteButtonClicked(log)}
            body={<p className="font-sans font-bold text-md">Delete</p>}
          />
        </div>
      </div>
    );
  };

  const LogCards = fitnessLogs.logs.map((log) => {
    return (
      <div className="w-64 ml-4 mb-4 shadow-lg flex" key={log.id}>
        <Card
          date={getMonthDay(log.created_at)}
          title={log.name || log.type}
          subtitle={log.description}
          tag={log.workouts.name}
          footer={<CardFooter log={log} />}
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

  // Updates to fitness routines will cause an update to fitness logs
  useEffect(() => {
    dispatch(fetchFitnessLogs());
  }, [fitnessRoutines]);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // FITNESS REPORT
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const FitnessReport = (
    <div className="flex flex-row mb-8 bg-white w-full rounded-md shadow-lg mb-12 opacity-90">
      {fitnessLogs.report.length === 0 && (
        <p className="h-32 flex items-center justify-center w-full font-sans font-bold text-xl p-5">
          Not Fitness Logs Found
        </p>
      )}
      {fitnessLogs.report.map((report, i) => {
        return (
          <Card
            date={i + 1}
            title={report.name}
            subtitle={`${report.completion_count} records`}
            tag={`${report.sum_of_time} minutes performing this workout`}
          />
        );
      })}
    </div>
  );

  // Updates to fitness logs will cause an update to fitness report
  useEffect(() => {
    dispatch(fetchFitnessReport());
  }, [fitnessLogs.logs]);

  if (loadingStatus === 'loading') {
    return (
      <div className="w-min-content flex flex-grow mb-2">
        <Loading />
      </div>
    );
  }

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      {FitnessReport}
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Log Fitness"
          subheading="Log your fitness activity"
          searchValue={searchValue}
          searchChange={searchChange}
        />
        <div className="flex flex-row flex-grow flex-wrap w-full justify-end justify-end">
          <div className="w-64 ml-4 mb-4">
            <Button
              onclick={createButtonClicked}
              color="green"
              body={CreateButtonBody}
            />
          </div>
          {LogCards}
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
            {formState.submitType} Log
          </h3>
        </div>
        <FitnessLogsForm state={formState} />
      </Modal>
    </>
  );
};

export default FitnessLogs;
