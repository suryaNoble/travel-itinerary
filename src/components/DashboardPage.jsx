import React, { useState } from 'react';
import UserGreeting from './UserGreeting';
import UpcomingTripCard from './UpcomingTripCard';
import FlightDetailsCard from './FlightDetailsCard';
import AccommodationSection from './AccommodationSection';
import ActivitiesSection from './ActivitiesSection';
import BottomNavBar from './BottomNavBar';
import ThirdPaneModal from './ThirdPaneModal';
import '../styles/dashboard.css';

function DashboardPage({ theme }) {
  const [thirdPane, setThirdPane] = useState(null);

  const openThirdPane = (content) => setThirdPane(content);
  const closeThirdPane = () => setThirdPane(null);

  return (
    <div className={`dashboard-container${theme === 'light' ? ' light' : ''}`}>
      <UserGreeting />
      <UpcomingTripCard onSeeAll={() => openThirdPane('trip')} />
      <FlightDetailsCard onSeeAll={() => openThirdPane('flight')} />
      <AccommodationSection onSeeAll={() => openThirdPane('accommodation')} />
      <ActivitiesSection onSeeAll={() => openThirdPane('activities')} />
      <BottomNavBar />
      <ThirdPaneModal open={!!thirdPane} content={thirdPane} onClose={closeThirdPane} />
    </div>
  );
}

export default DashboardPage; 