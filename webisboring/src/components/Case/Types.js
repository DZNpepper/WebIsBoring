// React
import React from 'react';
// Component 
const Types = () => (
    <div className="pc-case-types">
        {/* Title */}
        <h2>Types</h2>
        {/* List of PC case types with descriptions */}
        <ul>
            <br></br>
            <li>
                {/* Full Tower */}
                <strong>Full Tower</strong> The ultimate choice for high-end builds, Full Tower cases offer extensive upgradability. They can accommodate multiple graphics cards, elaborate water cooling systems, and numerous storage drives. These are typically favored by enthusiasts and professionals who need extra space for complex setups or those who plan to expand their system capabilities over time.
            </li><br></br>
            <li>
                {/* Mid Tower */}
                <strong>Mid Tower</strong> The most popular type, Mid Tower cases provide a perfect balance between size and expandability. They support a wide range of motherboards and have ample room for effective system cooling and multiple storage options. Ideal for gamers and general users who need versatility without the bulk of a full-sized tower.
            </li><br></br>
            <li>
                <strong>Mini-ITX</strong> Compact and designed specifically for Mini-ITX motherboards, these cases are the smallest available. They are perfect for users with limited space, such as those in small apartments or for setups that need to be easily portable. Despite their small size, Mini-ITX cases are ingeniously designed to efficiently utilize every inch of space, allowing them to support powerful components suitable for a high-performance, space-efficient PC.
    </li><br></br>
        </ul>
    </div>
);

export default Types;
