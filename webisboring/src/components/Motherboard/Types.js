// React
import React from 'react';
// Component
const Types = () => (
    <div>
        {/* Title */}
        <h2>Key Components</h2>
        <ul>
            <li>
                <strong>CPU Socket</strong> This is where the processor is installed. It determines which type of CPU your motherboard can support.
            </li>
            <li>
                <strong>RAM Slots</strong> These slots allow you to install memory modules. The number and type of slots affect how much and what kind of RAM can be added.
            </li>
            <li>
                <strong>Chipset</strong> The chipset manages data transfer between the processor, memory, and other peripherals. It also determines what features your motherboard supports.
            </li>
            <li>
                <strong>PCIe Slots</strong> These slots are used for adding expansion cards like graphics cards and SSDs, which enhance the PC’s capabilities.
            </li>
            <li>
                <strong>SATA and NVMe Connectors</strong> These are used for connecting storage devices. SATA is commonly used for hard drives, while NVMe is used for faster, more modern SSDs.
            </li>
            <li>
                <strong>Expansion Slots and Ports</strong> Including USB and Ethernet ports, these allow you to connect various external devices and extend your system’s functionality.
            </li>
        </ul>
    </div>
);

export default Types;
