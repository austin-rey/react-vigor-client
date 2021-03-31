import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import SubSectionHeading from '../../components/dashboard-sections/SubSectionHeading';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

const FitnessRoutines = () => {
  const loadingStatus = useSelector((state) => state.fitnessRoutines.status);
  const fitnessRoutines = useSelector((state) => state.fitnessRoutines);

  console.log(fitnessRoutines);
  const [searchValue, setSearchValue] = useState('');

  const searchChange = (e) => {
    setSearchValue('');
    console.log('search change');
  };

  const buttonClicked = () => {
    console.log('button clicked');
  };

  const LogCards = fitnessRoutines.logs.map((log) => {
    return (
      <div className="w-56 mr-2 mb-2 shadow-lg flex" key={log.id}>
        <Card
          date={log.created_at}
          title={log.name}
          subtitle={log.description}
          tag={`${log.user.first_name} ${log.user.last_name}`}
          footer={<p>icons</p>}
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
            <Button onclick={buttonClicked} />
          </div>
          {loadingStatus === 'idle' && LogCards}
          {loadingStatus === 'loading' && (
            <div className="w-min-content flex flex-grow mb-2">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FitnessRoutines;
