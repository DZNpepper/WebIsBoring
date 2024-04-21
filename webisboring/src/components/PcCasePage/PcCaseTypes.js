import React from 'react';

// Component representing the types of PC cases
const PcCaseTypes = () => (
    <div className="pc-case-types">
        {/* Description of a PC case */}
        <p>A PC case, commonly known as a computer chassis, serves as the protective exterior for a computer's essential hardware. Beyond merely housing components, it plays a crucial role in system cooling and airflow, ensuring that sensitive parts operate within optimal temperature ranges.</p>
        {/* Title */}
        <h2>Types of PC Cases</h2>
        {/* List of PC case types with descriptions */}
        <ul>
            {/* Full Tower */}
            <li>
                <strong>Full Tower:</strong> Ideal for users who seek extensive upgradability. Can accommodate multiple graphics cards, extensive water cooling systems, and numerous storage drives. Used by enthusiasts and professionals who require additional space.
            </li>
            {/* Mid Tower */}
            <li>
                <strong>Mid Tower:</strong> Most common due to their balance between size and expandability. Supports a variety of motherboards and has sufficient room for system cooling and storage. Strikes a good balance for gamers and general users.
            </li>
            {/* Mini-ITX */}
            <li>
                <strong>Mini-ITX:</strong> Designed for Mini-ITX motherboards, making them the smallest available. Ideal for users with limited space or those looking for a portable system. Despite their size, they are cleverly designed to support powerful components.
            </li>
        </ul>
    </div>
);

export default PcCaseTypes;
