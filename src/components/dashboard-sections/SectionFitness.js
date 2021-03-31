import React from 'react';
import Card from '../Card';

import FitnessLogs from '../../features/fitness/FitnessLogs';
import FitnessRoutines from '../../features/fitness/FitnessRoutines';

const SectionFitness = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-8 bg-white w-full rounded-md shadow-lg mb-12 opacity-90">
        <Card
          date="1/16"
          title="Monday"
          subtitle="Length of Workouts"
          tag="250 Calories Burned"
        />
        <Card
          date="1/17"
          title="Tuesday"
          subtitle="Length of Workouts"
          tag="125 Calories Burned"
        />
        <Card
          date="1/18"
          title="Wednesday"
          subtitle="Length of Workouts"
          tag="356 Calories Burned"
        />
        <Card
          date="1/19"
          title="Thursday"
          subtitle="Length of Workouts"
          tag="531 Calories Burned"
        />
        <Card
          date="1/20"
          title="Friday"
          subtitle="Length of Workouts"
          tag="5612 Calories Burned"
        />
      </div>
      <FitnessLogs />
      <FitnessRoutines />
    </div>
  );
};

export default SectionFitness;
