// React
import React from 'react';
// Component
const Features = () => (
    <div>
        {/* Title */}
        <h2>Key Motherboard Features</h2>
        {/* List of motherboard features with detailed explanations */}
        <ul>
            <li><strong>CPU Socket:</strong> Dictates what type of processor you can install, influencing the motherboard's compatibility with Intel, AMD, or other CPUs.</li>
            <li><strong>Chipset:</strong> Defines the motherboard's functionality, including support for CPU, RAM, and other features.</li>
            <li><strong>Expansion Slots (PCIe):</strong> Determines the number and type of additional cards you can install, like graphics cards, sound cards, and other expansion cards.</li>
            <li><strong>RAM Slots:</strong> Dictates the type and amount of RAM you can install, influencing multitasking abilities and speed.</li>
            <li><strong>I/O Ports:</strong> Includes USB, HDMI, DisplayPort, Ethernet, and audio jacks, crucial for connectivity with external devices.</li>
            <li><strong>VRM (Voltage Regulator Module):</strong> Provides stable and clean power to the CPU and other key components, crucial for system stability and overclocking capabilities.</li>
            <li><strong>Storage Options (SATA, M.2, U.2):</strong> Types of storage connections that affect the speed and type of storage drives you can install.</li>
            <li><strong>Network Features:</strong> Ethernet and WiFi capabilities, including advanced features like dual Ethernet ports, 10 GbE, or WiFi 6 support.</li>
            <li><strong>Audio Quality:</strong> Integrated audio systems and their quality, which can include features like shielding, separate PCB layers, and premium capacitors.</li>
            <li><strong>Form Factor:</strong> Overall size of the motherboard (ATX, microATX, mini-ITX), which dictates the size of the case and the overall build.</li>
            <li><strong>BIOS/UEFI Interface:</strong> Firmware interfaces that allow users to configure settings at the hardware level for optimization and troubleshooting.</li>
            <li><strong>Overclocking Features:</strong> Includes BIOS options and physical features like robust power delivery and cooling options to enhance performance.</li>
            <li><strong>Diagnostic Features:</strong> Post codes, debug LEDs, or onboard buttons that help in troubleshooting hardware issues.</li>
        </ul>
    </div>
);

export default Features;
