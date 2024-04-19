import React from 'react';

// Component displaying the key features of a PC case
const PcCaseFeatures = () => (
    <div className="pc-case-features">
        {/* Title for the key features */}
        <h2>Key Features to Consider</h2>
        {/* List of key features */}
        <ul>
            <li><strong>Airflow:</strong> Essential for preventing overheating. Look for cases with well-placed fans and air vents.</li>
            <li><strong>Build Material:</strong> Typically made from steel, aluminum, or tempered glass. The choice affects durability, weight, and thermal performance.</li>
            <li><strong>Design and Aesthetics:</strong> Ranges from simple and discreet to designs with glass panels or RGB lighting.</li>
        </ul>
        {/* Additional information or interesting fact */}
        <p>Interesting Fact: Modularity in PC cases is becoming increasingly popular, allowing for adjustable internal configurations or removal of unnecessary parts to improve airflow or accommodate larger components.</p>
    </div>
);

export default PcCaseFeatures;
