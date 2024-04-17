// Importing images for components
import pccaseImage from '../assets/images/PCCASE.avif';
import cpuImage from '../assets/images/CPU4avif.avif';
import MotherboardImage from '../assets/images/Motherboard.jpeg';

// Array containing data for various components
const componentsData = [
  {
    id: 'pc-case',
    name: 'PC Case',
    description: 'Houses the components of a computer, protecting them and aiding in cooling.',
    image: pccaseImage // Image for PC Case
  },
  {
    id: 'motherboard',
    name: 'Motherboard',
    description: '...', // Placeholder description
    image: MotherboardImage // Image for Motherboard
  },
  {
    id: 'cpu',
    name: 'CPU',
    description: 'The brain of the computer...', // Description for CPU
    image: cpuImage // Image for CPU
  },
  {
    id: 'gpu',
    name: 'GPU',
    description: 'Graphics processing powerhouse...', // Description for GPU
    image: '/assets/images/GPU.avif'  // Assuming image path is correct
  },
  {
    id: 'ram',
    name: 'RAM',
    description: 'Short-term memory of the computer...', // Description for RAM
    image: '/path/to/ram/image'  // Placeholder path
  },
  {
    id: 'hdd',
    name: 'Hard Drive',
    description: 'Long-term storage device...', // Description for Hard Drive
    image: '/path/to/hdd/image'  // Placeholder path
  },
  // more components
];

export default componentsData; // Exporting componentsData array
