import React from 'react';
import componentsData from '../../data/componentsData'; // Importing componentsData

const ComponentDetails = ({ match }) => {
  // Extracting component ID from match params
  const componentId = match.params.id;
  // Finding the component data based on the ID
  const component = componentsData.find(comp => comp.id === componentId);

  return (
    <div className="component-details">
      {/* Displaying component name */}
      <h2>{component.name}</h2>
      {/* Displaying component image with alt attribute */}
      <img src={component.image} alt={component.name} />
      {/* Displaying component description */}
      <p>{component.description}</p>
    </div>
  );
};

export default ComponentDetails;
