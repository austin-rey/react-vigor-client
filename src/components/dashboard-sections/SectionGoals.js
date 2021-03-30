import React from 'react';
import Card from '../Card';
import Button from '../Button';
import SubSectionHeading from './SubSectionHeading';

const SectionGoals = ({ data }) => {
  const buttonClicked = () => {
    console.log('button clicked');
  };
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
    </div>
  );
};

export default SectionGoals;
