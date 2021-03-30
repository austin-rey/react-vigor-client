import React from 'react';
import Card from '../Card';
import Button from '../Button';
import SubSectionHeading from './SubSectionHeading';

const SectionFitness = ({ data }) => {
  const buttonClicked = () => {
    console.log('button clicked');
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-8 bg-white w-full rounded-md shadow-lg mb-12 opacity-90">
        <Card
          date="1/16"
          title="Monday"
          subtitle="A description of this workout"
          tag="250 Calories Burned"
        />
        <Card
          date="1/17"
          title="Tuesday"
          subtitle="A description of this workout"
          tag="125 Calories Burned"
        />
        <Card
          date="1/18"
          title="Wednesday"
          subtitle="A description of this workout"
          tag="356 Calories Burned"
        />
        <Card
          date="1/19"
          title="Thursday"
          subtitle="A description of this workout"
          tag="531 Calories Burned"
        />
        <Card
          date="1/20"
          title="Friday"
          subtitle="A description of this workout"
          tag="5612 Calories Burned"
        />
      </div>
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Log Fitness"
          subheading="Log your fitness activity"
        />
        <div className="flex flex-row flex-grow flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={buttonClicked} />
          </div>
          <div className="w-56 mr-2 mb-2 shadow-lg">
            <Card
              date="1/16"
              title="Track Run"
              subtitle="A description of this workout"
              tag="Type"
              footer={<p>icons</p>}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row mb-8">
        <SubSectionHeading
          heading="Workouts"
          subheading="Create workout plans to use in your logs."
        />
        <div className="flex flex-row flex-wrap w-full">
          <div className="w-56 mr-2 mb-2">
            <Button onclick={buttonClicked} />
          </div>
          <div className="w-56 mr-2 mb-2 shadow-lg">
            <Card
              date="1/16"
              title="Track Run"
              subtitle="A description of this workout"
              tag="Type"
              footer={<p>icons</p>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFitness;
