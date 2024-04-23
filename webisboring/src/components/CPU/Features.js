// React
import React from 'react';

// Component
const Features = () => {
    return (
        <div className="cpu-features">
            <h2>Key Features</h2>
            <p>Modern CPUs enhance computing performance through several advanced features:</p>
            <ul>
                <li><strong>Multi-core Processing</strong> Multiple cores allow CPUs to handle numerous tasks simultaneously, greatly improving multitasking and performance for demanding applications.</li>
                <li><strong>Hyper-threading</strong> By allowing each core to handle multiple threads, this feature helps CPUs to manage tasks more efficiently, boosting productivity and speed in threaded applications.</li>
                <li><strong>Advanced Power Management</strong> This technology adjusts the power usage of the CPU based on the workload, reducing energy consumption and heat generation, thus extending the life and efficiency of the device.</li>
            </ul>
        </div>
    );
};

export default Features;
