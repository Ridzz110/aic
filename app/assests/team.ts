import Rida from './rida2.jpg'
import mustafa from './mustafa.jpg'
import Mtayyab from './M.tayyab.jpg'
import ahad from './ahad.jpg'
import hadeed from './hadeed.jpg'
import muzammil from './muzammil.jpg'
import narmeen from './narmeen.jpg'
import Aliza from './aliza.jpg'
import shafaque from './shafaque.jpg'
import muneeb from './MUR.jpg'
import sahil from './sahil.jpg'
import Faisal from './faisal.jpg'
import mahad from './mahad.jpg'
import TayyabNadeem from './tayyab-nadeem.jpg'
import TayyabArshad from './tayyab-arshad.jpg'
import musadiq  from './musadiq.jpg'
import qavi from './qavi.jpg'
import mahindar from './mahindar.jpg'
import zainab from './zainab.jpg'
import aayan from './aayan.jpg'
import hassan from './hassan.jpg'
import usman from './usman.jpg'
import ghulamHussain from './ghulam-mustafa.jpg'
import jatan from './WhatsApp Image 2024-08-30 at 11.27.47_98191504.jpg'
import cat from './cat pfp.jpeg'
import type { StaticImageData } from 'next/image'
type teamMembers = {
    image: StaticImageData;
    name: string;
    designation: string;
    quote: string;
  };
  
  const teamMembers: teamMembers[] = [
    {
        image: ahad,
        name: 'Abdul Ahad',
        designation: 'President',
        quote: 'Leadership is the capacity to translate vision into reality.'
    },
    {
        image: shafaque,
        name: 'Shafaque Shahid',
        designation: 'Vice-President',
        quote: 'The key to successful leadership today is influence, not authority.'
    },
    {
        image: muzammil,
        name: 'Web Master',
        designation: 'Web Master',
        quote: 'The best way to predict the future is to create it.'
      },
    {
      image: Rida,
      name: 'Rida',
      designation: 'Head Director of Web Management',
      quote: 'Doing RR with my friends has fixed me alot.'
    },
    {
      image: Mtayyab,
      name: 'M. Tayyab',
      designation: 'Director Web Management',
      quote: 'Be careful who you trust.salt and sugar look the same'
    },
    
    {
      image: hadeed,
      name: 'Hadeed Hyder',
      designation: 'Treasurer',
      quote: `Numbers don't lie ; they guide.`
    },
    {
      image: narmeen,
      name: 'Narmeen Afreen',
      designation: 'Membership-chair',
      quote: 'Teamwork makes the dream work.'
    },
    {
      image: muneeb,
      name: 'Muneeb-Ur-Rehman',
      designation: 'General Secretary',
      quote: `You got this! Unless you don't, then ask for help`
    },
    {
        image: mustafa,
        name: "Mustafa",
        designation: 'Head Director of Designing',
        quote: 'Design is not just what it looks like and feels like. Design is how it works.'
    },
    {
        image: zainab,
        name: 'Zainab',
        designation: 'Director Designing',
        quote: 'Do what you love and success will follow.'
      },
      {
        image: hassan,
        name: 'Hassan',
        designation: 'Director Designing',
        quote: 'The best way to get started is to quit talking and begin doing.'
      },
    {
        image: usman,
        name: 'Usman',
        designation: 'Head Director Finance',
        quote: 'Consistency is the key to success.'
    },
    {
      image: sahil,
      name: 'Sahil',
      designation: 'Director Finance',
      quote: 'Success is where preparation and opportunity meet.'
    },
    {
      image: Faisal,
      name: 'Faisal',
      designation: 'Head Director Student Affairs',
      quote: 'The only limit to our realization of tomorrow is our doubts of today.'
    },
    {
      image: mahad,
      name: 'Mahad',
      designation: 'Director Student Affairs',
      quote: 'Innovation distinguishes between a leader and a follower.'
    },
    {
      image: TayyabArshad,
      name: 'Tayyab Arshad',
      designation: 'Head Director Social Media',
      quote: 'Strive not to be a success, but rather to be of value.'
    },
    {
        image: Aliza,
        name: 'Aliza',
        designation: 'Director Social Media Management',
        quote: 'Believe you can and you’re halfway there.'
    },
    {
      image: musadiq,
      name: 'Musadiq',
      designation: 'Director Student Affairs',
      quote: 'The harder you work for something, the greater you’ll feel when you achieve it.'
    },
    {
      image: qavi,
      name: 'Qavi',
      designation: 'Head Director Event Management',
      quote: 'Success usually comes to those who are too busy to be looking for it.'
    },
    {
        image: aayan,
        name: 'Aayan',
        designation: 'Director Event Management',
        quote: 'Don’t watch the clock; do what it does. Keep going.'
      },
      {
        image: jatan,
        name: 'Jatan',
        designation: 'Director Event Management',
        quote: 'Your attitude, not your aptitude, will determine your altitude.'
      },
      {
        image: cat,
        name: 'Ashar',
        designation: 'Director Event Management',
        quote: 'The only way to achieve the impossible is to believe it is possible.'
      },
      {
        image: ghulamHussain,
        name: 'Ghulam Mustafa Hussain',
        designation: 'Director Event Management',
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
      },
    {
        image: cat,
        name: 'Laiba',
        designation: 'Head Director Editing',
        quote: 'The only limit to our realization of tomorrow is our doubts of today.'
      },
      {
        image: cat,
        name: 'Aisha',
        designation: 'Director Editing',
        quote: 'Dream big, work hard, and stay humble.'
      },
      {
        image: cat,
        name: 'Hafsa',
        designation: 'Head Director Photography',
        quote: 'The future belongs to those who believe in the beauty of their dreams.'
      },
      {
        image: mahindar,
        name: 'Mahindar',
        designation: 'Director Photography',
        quote: 'The only place where success comes before work is in the dictionary.'
      },
      {
        image: TayyabNadeem,
        name: 'Tayyab Nadeem',
        designation: 'Director Photography',
        quote: 'The only way to do great work is to love what you do.'
      },
  ];
  
  export default teamMembers;