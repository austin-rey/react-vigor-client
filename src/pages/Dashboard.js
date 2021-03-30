import React from 'react';
import PageHeader from '../components/page-layout/PageHeader';
import Calendar from '../components/Calendar';
import PageSection from '../components/page-layout/PageSection';
import PageSidebar from '../components/page-layout/PageSidebar';
import SectionDiet from '../components/dashboard-sections/SectionDiet';
import SectionFitness from '../components/dashboard-sections/SectionFitness';
import SectionGoals from '../components/dashboard-sections/SectionGoals';
import SectionWellness from '../components/dashboard-sections/SectionWellness';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faBrain,
  faCarrot,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

// Hooks to fetch data
const dataFitness = [];
const dataDiet = [];
const dataGoals = [];
const dataWellness = [];

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <PageHeader heading="Dashboard" />
      <Calendar />
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between w-full border-b-2">
          <PageSidebar />
        </div>
        <div className="flex flex-grow flex-col">
          <PageSection
            icon={<FontAwesomeIcon icon={faDumbbell} />}
            heading="Fitness"
            subheading="Log workouts and create fitness routines."
            anchor="fitness"
            body={<SectionFitness data={dataFitness} />}
          />
          <PageSection
            icon={<FontAwesomeIcon icon={faCarrot} />}
            heading="Diet"
            subheading="Log food consumption and store meal information."
            anchor="diet"
            body={<SectionDiet data={dataDiet} />}
          />
          <PageSection
            icon={<FontAwesomeIcon icon={faMedal} />}
            heading="Goals"
            subheading="Create goals that you can track."
            anchor="goals"
            body={<SectionGoals data={dataGoals} />}
          />
          <PageSection
            icon={<FontAwesomeIcon icon={faBrain} />}
            heading="Wellness"
            subheading="Log your overall wellness for the day."
            anchor="wellness"
            body={<SectionWellness data={dataWellness} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
