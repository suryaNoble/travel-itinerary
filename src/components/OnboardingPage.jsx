import React, { useState } from 'react';
import Header from './Header';
import DestinationInput from './DestinationInput';
import DurationSelect from './DurationSelect';
import TravelGroupSelector from './TravelGroupSelector';
import ContinueButton from './ContinueButton';
import '../styles/onboarding.css';

const durationOptions = [
  { value: '1-3', label: '1-3 Days' },
  { value: '4-7', label: '4-7 Days' },
  { value: '8-14', label: '8-14 Days' },
  { value: '15+', label: '15+ Days' },
];

function OnboardingPage({ onComplete, theme }) {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [group, setGroup] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    if (onComplete) onComplete();
  };

  return (
    <div className={`onboarding-container${theme === 'light' ? ' light' : ''}`}>
      <form className="onboarding-form" onSubmit={handleContinue}>
        <Header />
        <label className="onboarding-label">Where would you like to go?</label>
        <DestinationInput value={destination} onChange={e => setDestination(e.target.value)} />
        <label className="onboarding-label">How long will you stay?</label>
        <DurationSelect value={duration} onChange={e => setDuration(e.target.value)} options={durationOptions} />
        <label className="onboarding-label">Who are you traveling with?</label>
        <TravelGroupSelector selectedGroup={group} onSelect={setGroup} />
        <ContinueButton onClick={handleContinue} disabled={!destination || !duration || !group} />
      </form>
    </div>
  );
}

export default OnboardingPage; 