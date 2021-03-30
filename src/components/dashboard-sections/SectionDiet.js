import React from 'react';
import Card from '../Card';
import Button from '../Button';
import SubSectionHeading from './SubSectionHeading';

const SectionDiet = ({ data }) => {
  const buttonClicked = () => {
    console.log('button clicked');
  };
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
      <div className="flex flex-row mb-12">
        <SubSectionHeading
          heading="Log Meals"
          subheading="Create, Update and Delete Meals"
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
          heading="Create Meals"
          subheading="Create meals that you often consume."
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

export default SectionDiet;
