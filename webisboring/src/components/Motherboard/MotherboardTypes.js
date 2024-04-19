import React from 'react';

// Component displaying the types of motherboards
const MotherboardTypes = () => (
    <div>
        {/* Title for the types of motherboards */}
        <h2>Types of Motherboards</h2>
        {/* List of different types of motherboards */}
        <ul>
            <li><strong>ATX:</strong> Ideal for high performance and expansion.</li>
            <li><strong>Micro-ATX:</strong> Compact and efficient, perfect for budget builds.</li>
            <li><strong>Mini-ITX:</strong> Small yet mighty, ideal for streamlined, portable builds.</li>
        </ul>
    </div>
);

export default MotherboardTypes;
