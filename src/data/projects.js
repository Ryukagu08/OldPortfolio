import salvageImg from '../assets/projects/salvage.png';
import spectreImg from '../assets/projects/spectre.png';
import pcsImg from '../assets/projects/pcs.png';
import bitterchatImg from '../assets/projects/bitterchat.png';
import ethansimonImg from '../assets/projects/ethansimon.png';

export const projectsData = [
  {
    title: 'Salvage Landing Page',
    description: 'Website for an indie FPS passion-project set in a grim sci-fantasy universe.',
    technologies: ['HTML/CSS', 'JavaScript', 'Vite'],
    demoLink: 'https://www.playsalvage.com/',
    image: salvageImg
  },
  {
    title: 'BitterChat Forum',
    description: 'A space to discuss, discover, and connect. Real-time conversations, smart search, and an interface that feels like home.' ,
    technologies: ['HTML/CSS', 'Svelte', 'Docker'],
    demoLink: 'https://forum.robertoghita.com/',
    image: bitterchatImg
  },
  {
    title: 'Ethan Simon-Law Portfolio',
    description: "Ethan's personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ['Svelte', 'JavaScript', 'Vite'],
    demoLink: 'https://www.ethansimonlaw3d.com/',
    image: ethansimonImg
  },
  {
    title: 'Spectre Memorial Site',
    description: 'A fan made memorial site built to honor Spectre Divide, featuring game info, media and more.',
    technologies: ['HTML/CSS', 'JavaScript', 'Python'],
    demoLink: 'https://spectre-memorial.vercel.app/',
    codeLink: 'https://github.com/Ryukagu08/SpectreMemorial-Site',
    image: spectreImg
  },
  {
    title: 'PCsCalatayud Project',
    description: 'A custom PC building service project built and designed for a school assignment.',
    technologies: ['React', 'Firebase', 'JavaScript','Vite'],
    demoLink: 'https://pcscalatayud.vercel.app/',
    image: pcsImg
  }
];
