import React from 'react';

// Component explaining the components of a motherboard
const MotherboardComponents = () => (
    <div>
        {/* Title for the section */}
        <h2>Understanding the Components of a Motherboard</h2>
        {/* Description of the section */}
        <p>Here's how the motherboard connects and interacts with various key components of your computer:</p>
        {/* List of motherboard components with detailed explanations */}
        <ul>
            <li>
                <strong>CPU Socket:</strong> The specific socket that determines what type of CPU can be installed.
                This is critical as it must be compatible with the processor type (Intel or AMD) you choose.
                Matches the processor to the motherboard, ensuring compatibility.
            </li>
            <li>
                <strong>RAM Slots:</strong> Slots that determine the amount and type of memory (RAM) your system can use.
                More slots mean more RAM can be installed, which is crucial for multitasking and high-performance tasks.
                Essential for adding memory, which affects the speed and efficiency of the computer.
            </li>
            <li>
                <strong>Chipset:</strong> A crucial component that defines the motherboard's features and capabilities,
                including support for specific CPUs, RAM types, and expansion capabilities.
                Dictates the motherboard's capabilities and which technologies it supports.
            </li>
            <li>
                <strong>PCIe Slots:</strong> Used for installing GPUs (Graphics Processing Units), these slots determine
                the type and number of graphics cards that can be supported, which are essential for gaming and professional
                graphics work. Crucial for adding graphics cards, which are important for gaming, video editing, and
                other graphics-intensive tasks.
            </li>
            <li>
                <strong>SATA and NVMe Connectors:</strong> These connectors are used for connecting storage devices like
                HDDs (Hard Disk Drives) and SSDs (Solid State Drives). They impact the speed and amount of storage that
                can be added to your system. Key for connecting storage devices. NVMe offers faster data transfer speeds
                than SATA, impacting the overall system performance.
            </li>
            <li>
                <strong>Expansion Slots and Ports:</strong> Additional slots and ports like USB and Ethernet that are used
                for expanding connectivity and adding peripherals, enhancing the functionality of your PC. Allow the
                addition of various peripherals and expansion cards, increasing the versatility and capability of the PC setup.
            </li>
        </ul>
    </div>
);

export default MotherboardComponents;
