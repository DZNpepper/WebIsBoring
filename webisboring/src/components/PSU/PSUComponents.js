import React from 'react';

const PSUComponents = () => {
    return (
        <div className="psu-components">
            <h2>PSU Components</h2>
            <ul>
                <li><strong>Transformer:</strong> Steps down the input voltage to manageable levels for conversion.</li>
                <li><strong>Voltage Regulator:</strong> Ensures that the output voltage is constant regardless of changes in the input voltage or load conditions.</li>
                <li><strong>Power Capacitors:</strong> Help smooth out the output power and filter out any AC interference, ensuring stable DC output.</li>
            </ul>
        </div>
    );
};

export default PSUComponents;
