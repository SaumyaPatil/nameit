import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({suggestedNames}) => {

  const suggestedNameJsx = suggestedNames.map((suggestedName, index) => {
    return <NameCard key={index} suggestedName={suggestedName} />;
  });

  return (
    <div className="results-container">{suggestedNameJsx}</div>
  );

};

export default ResultsContainer;
