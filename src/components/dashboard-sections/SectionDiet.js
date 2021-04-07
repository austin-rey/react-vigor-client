import React from 'react';
import Card from '../Card';
import DietMeals from '../../features/diet/DietMeals';
import DietLogs from '../../features/diet/DietLogs';

const SectionDiet = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-8 bg-white w-full rounded-md shadow-lg mb-12 opacity-90">
        <Card
          date="1/16"
          title="Monday"
          subtitle="2 Recorded Meals"
          tag="1250 Calories"
        />
        <Card
          date="1/17"
          title="Tuesday"
          subtitle="3 Recorded Meals"
          tag="2451 Calories"
        />
        <Card
          date="1/18"
          title="Wednesday"
          subtitle="4 Recorded Meals"
          tag="2500 Calories"
        />
        <Card
          date="1/19"
          title="Thursday"
          subtitle="2 Recorded Meals"
          tag="900 Calories"
        />
        <Card
          date="1/20"
          title="Friday"
          subtitle="3 Recorded Meals"
          tag="1600 Calories"
        />
      </div>
      <DietLogs />
      <DietMeals />
    </div>
  );
};

export default SectionDiet;
