// Images
import Case from '../assets/images/Case1.webp';
import Motherboard from '../assets/images/Motherboard1.webp';
import CPU from '../assets/images/Cpu1.webp';
import GPU from '../assets/images/Gpu.webp'
import RAM from '../assets/images/Ram.webp'
import PSU from '../assets/images/Psu.webp'
import HDD from '../assets/images/Hdd.webp'
import SSD from '../assets/images/Ssd.webp'


// Array containing data for various components
const componentsData = [
  {
    id: 'pc-case',
    name: 'PC Case',
    description: 'Houses the components of a computer, protecting them and aiding in cooling.',
    image: Case, // Image 
    unlocked: true, // Unlocked 
  },
  {
    id: 'motherboard',
    name: 'Motherboard',
    description: 'Main printed circuit board in a computer, which houses the CPU, memory, and other essential components.',
    image: Motherboard, // Image
    unlocked: false
  },
  {
    id: 'cpu',
    name: 'CPU',
    description: 'The brain of the computer.', // Description
    image: CPU, // Image
    unlocked: false
  },
  {
    id: 'gpu',
    name: 'GPU',
    description: 'Graphics processing powerhouse.', // Description
    image: GPU, // Image
    unlocked: false
  },
  {
    id: 'ram',
    name: 'RAM',
    description: 'Short-term memory of the computer.', // Description
    image: RAM,  // Image
    unlocked: false
  },
  {
    id: 'psu',
    name: 'Power Supply',
    description: 'Supplying the PC with Power', // Description
    image: PSU, // Image
    unlocked: false
  },
  {
    id: 'hdd',
    name: 'Hard Drive',
    description: 'Long-term storage device.', // Description
    image: HDD,  // Image
    unlocked: false
  },
  {
    id: 'ssd',
    name: 'SSD',
    description: 'Removable storage device.', // Description
    image: SSD, // Image
    unlocked: false
  },
];

export default componentsData;
