// React
import React from 'react';
// Component 
const Types = () => (
    <div className="pc-case-types">
        {/* Title */}
        <h2>Types:</h2>
        {/* List of PC case types with descriptions */}
        <ul>
        <br></br>
            {/* Full Tower */}
            <li>
                <strong>Full Tower:</strong> Ideal for users who seek extensive upgradability. Can accommodate multiple graphics cards, extensive water cooling systems, and numerous storage drives. Used by enthusiasts and professionals who require additional space.
            </li>
            <br></br>
            {/* Mid Tower */}
            <li>
                <strong>Mid Tower:</strong> Most common due to their balance between size and expandability. Supports a variety of motherboards and has sufficient room for system cooling and storage. Strikes a good balance for gamers and general users.
            </li>
            <br></br>
            {/* Mini-ITX */}
            <li>
                <strong>Mini-ITX:</strong> Designed for Mini-ITX motherboards, making them the smallest available. Ideal for users with limited space or those looking for a portable system. Despite their size, they are cleverly designed to support powerful components.
            </li>
            <br></br>
        </ul>
    </div>
);

export default Types;
