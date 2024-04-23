// React
import React from 'react';
import { Link } from 'react-router-dom';
// Data
import componentsData from '../../data/componentsData';

const ComponentDetails = ({ match }) => {
  // Extracting component ID
  const componentId = match.params.id;
  // Finding the component data based on ID
  const component = componentsData.find(comp => comp.id === componentId);

  return (
    <div className="component-details">
      {/*  component name */}
      <h2>{component.name}</h2>
      {/* Displaying component image with alt attribute */}
      <img src={component.image} alt={component.name} />
      {/* Displaying component description */}
      <p>{component.description}</p>
      {/* Rendering link for each component */}
      <ul>
        {componentsData.map(comp => (
          <li key={comp.id}>
            <Link to={`/component/${comp.id}`}>{comp.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentDetails;
