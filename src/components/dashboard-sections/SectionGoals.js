import React from 'react';
import Card from '../Card';
import Goals from '../../features/goals/Goals';

const SectionGoals = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-8 bg-white w-full rounded-md shadow-lg mb-12 opacity-90">
        <Card
          date="1/16/2021"
          title="Goal Name"
          subtitle="Description of Goal"
          tag="Fitness"
        />
        <Card
          date="1/16/2021"
          title="Goal Name"
          subtitle="Description of Goal"
          tag="Wellness"
        />
        <Card
          date="1/16/2021"
          title="Goal Name"
          subtitle="Description of Goal"
          tag="All"
        />
        <Card
          date="1/16/2021"
          title="Goal Name"
          subtitle="Description of Goal"
          tag="Diet"
        />
        <Card
          date="1/16/2021"
          title="Goal Name"
          subtitle="Description of Goal"
          tag="Fitness"
        />
      </div>
      <Goals />
    </div>
  );
};

export default SectionGoals;
