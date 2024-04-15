
import React from 'react';
import componentsData from '../data/componentsData';

const ComponentDetails = ({ match }) => {
  const componentId = match.params.id;
  const component = componentsData.find(comp => comp.id === componentId);

  return (
    <div className="component-details">
      <h2>{component.name}</h2>
      <p>{component.description}</p>
      {/* Display additional details as needed */}
    </div>
  );
};

export default ComponentDetails;
