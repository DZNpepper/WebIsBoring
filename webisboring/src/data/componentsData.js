// Importing images for components
import pccaseImage from '../assets/images/PCCASE.avif';
import cpuImage from '../assets/images/CPU4avif.avif';
import MotherboardImage from '../assets/images/Motherboard.jpeg';
import GPUImage from '../assets/images/GPU.jpg'
import RamImage from '../assets/images/Ram.jpg'
import PowerSupply from '../assets/images/PowerSupply.jpg'
import Hdd from '../assets/images/Hdd.png'
import SSD from '../assets/images/SSD.jpg'

// Array containing data for various components
const componentsData = [
  {
    id: 'pc-case',
    name: 'PC Case',
    description: 'Houses the components of a computer, protecting them and aiding in cooling.',
    image: pccaseImage, // Image 
    unlocked: true,
  },
  {
    id: 'motherboard',
    name: 'Motherboard',
    description: 'Main printed circuit board in a computer, which houses the CPU, memory, and other essential components.',
    image: MotherboardImage, // Image
    unlocked: false
  },
  {
    id: 'cpu',
    name: 'CPU',
    description: 'The brain of the computer.', // Description
    image: cpuImage, // Image
    unlocked: false
  },
  {
    id: 'gpu',
    name: 'GPU',
    description: 'Graphics processing powerhouse.', // Description
    image: GPUImage, // Image
    unlocked: false
  },
  {
    id: 'ram',
    name: 'RAM',
    description: 'Short-term memory of the computer.', // Description
    image: RamImage,  // Image
    unlocked: false
  },
  {
    id: 'power supply',
    name: 'Power Supply',
    description: 'Supplying the PC with Power', // Description
    image: PowerSupply, // Image
    unlocked: false
  },
  {
    id: 'hdd',
    name: 'Hard Drive',
    description: 'Long-term storage device.', // Description
    image: Hdd,  // Image
    unlocked: false
  },
  {
    id: 'ssd',
    name: 'System Storage Drive',
    description: 'Removable storage device.', // Description
    image: SSD, // Image
    unlocked: false
  },
];

export default componentsData; // Exporting componentsData array
