import React from 'react';
import FitnessLogs from '../../features/fitness/FitnessLogs';
import FitnessRoutines from '../../features/fitness/FitnessRoutines';

const SectionFitness = () => {
  return (
    <div className="flex flex-col">
      <FitnessLogs />
      <FitnessRoutines />
    </div>
  );
};

export default SectionFitness;
