import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { updateWellnessLog, createWellnessLog } from './wellnessSlice';
import { isToday, getMonthDay, getDayName } from '../../util/dates';

const Wellness = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector((state) => state.wellnessLogs.status);
  const wellness = useSelector((state) => state.wellnessLogs);

  // State for creating or editing the daily log
  const [currentDateCard, setCurrentDateCard] = useState({
    id: '',
    createdAt: new Date(),
    wellnessLevel: '',
    dayName: getDayName(new Date()),
    exists: false,
  });

  useEffect(() => {
    if (loadingStatus === 'idle') {
      if (isToday(wellness.logs[0].created_at)) {
        setCurrentDateCard({
          id: wellness.logs[0].id,
          createdAt: wellness.logs[0].created_at,
          wellnessLevel: wellness.logs[0].wellness_level,
          exists: true,
        });
      }
    }
  }, [loadingStatus]);

  const submitLog = (log, type, e) => {
    if (log.exists) {
      dispatch(
        updateWellnessLog({ id: log.id, wellnessLevel: type.toLowerCase() })
      );
    } else {
      dispatch(createWellnessLog({ wellnessLevel: type.toLowerCase() }));
    }
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
        <button
          className="rounded-full bg-red-400 w-12 h-12 my-2 flex items-center justify-center shadow"
          onClick={(e) => submitLog(log, 'Bad', e)}
        >
          <p className="font-sans font-bold text-sm text-white">Bad</p>
        </button>
        <button
          className="rounded-full bg-yellow-400 w-12 h-12 my-2 flex items-center justify-center shadow"
          onClick={(e) => submitLog(log, 'Ok', e)}
        >
          <p className="font-sans font-bold text-sm text-white">Ok</p>
        </button>
        <button
          className="rounded-full bg-green-400 w-12 h-12 my-2 flex items-center justify-center shadow"
          onClick={(e) => submitLog(log, 'Good', e)}
        >
          <p className="font-sans font-bold text-sm text-white">Good</p>
        </button>
      </div>
    );
  };

  const CreateEditCard = (
    <div className="w-56 mr-2 mb-2 shadow-lg flex">
      <Card
        date={getMonthDay(currentDateCard.createdAt)}
        title={getDayName(currentDateCard.createdAt)}
        tag={currentDateCard.wellnessLevel}
        footer={<CardFooter log={currentDateCard} />}
      />
    </div>
  );

  const WellnessCards = wellness.logs.map((log) => {
    if (!isToday(log.created_at)) {
      return (
        <div className="w-56 mr-2 mb-2 shadow-lg flex" key={log.id}>
          <Card
            date={getMonthDay(log.created_at)}
            title={getDayName(log.created_at)}
            tag={log.wellness_level}
          />
        </div>
      );
    }
  });

  return (
    <>
      {loadingStatus === 'error' && <p>Error loading resource</p>}
      <div className="flex flex-row mb-12">
        <div className="flex flex-row flex-grow flex-wrap w-full">
          {CreateEditCard}
          {WellnessCards}
        </div>
      </div>
    </>
  );
};

export default Wellness;
