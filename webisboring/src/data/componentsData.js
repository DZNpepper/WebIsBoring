// Images
import pccaseImage from '../assets/images/PCCASE.webp';
import MotherboardImage from '../assets/images/Motherboard1.webp';
import cpuImage from '../assets/images/CPU1.webp';
import GPUImage from '../assets/images/GPU.webp'
import RamImage from '../assets/images/Ram.webp'
import PowerSupply from '../assets/images/PowerSupply.webp'
import Hdd from '../assets/images/Hdd.webp'
import SSD from '../assets/images/SSD.webp'

// Array containing data for various components
const componentsData = [
  {
    id: 'pc-case',
    name: 'PC Case',
    description: 'Houses the components of a computer, protecting them and aiding in cooling.',
    image: pccaseImage, // Image 
    unlocked: true, //
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
    name: 'SSD',
    description: 'Removable storage device.', // Description
    image: SSD, // Image
    unlocked: false
  },
];

export default componentsData;
