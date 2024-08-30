import muneeb from './MUR.jpg';
import hadeed from './hadeed.jpg';
import muzammil from './muzammil.jpg';
import narmeen from './narmeen.jpg';
import ahad from './ahad.jpg';
import shafaque from './shafaque.jpg';

import type { StaticImageData } from 'next/image';

// Define the type for each member of the core team
interface CoreTeamMember {
  name: string;
  position: string;
  image: StaticImageData; // Updated to StaticImageData
}
// Define the coreTeam array with type annotations
const coreTeam: CoreTeamMember[] = [
  {
    name: 'Abdul Ahad',
    position: 'President',
    image: ahad,
  },
  {
    name: 'Shafaque Shahid',
    position: 'Vice-President',
    image: shafaque,
  },
  {
    name: 'Muneeb-Ur-Rehman',
    position: 'General Secretary',
    image: muneeb,
  },
  {
    name: 'Narmeen Afreen',
    position: 'Membership Chair',
    image: narmeen,
  },
  {
    name: 'Hadeed Hyder',
    position: 'Treasurer',
    image: hadeed,
  },
  {
    name: 'Muzammil',
    position: 'Web Master',
    image: muzammil,
  },
];

export default coreTeam;
