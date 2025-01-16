// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Bienvenue! Ici s'affiche la liste des commandes disponibles:
\n${c}\n
[tab]: autocompletion.
[ctrl+l]/clear: effacer le terminal.\n
Taper 'résumé' pour afficher un court résumé.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Ouverture du dépôt...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Bonjour, je suis ${config.name}. 
Bienvenue sur mon site web!
Plus à propos de moi:
'résumé' - un petit résumé.
'cv' - mon CV.`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Ouverture du CV...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Ouverture de mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Ouverture de github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Ouverture linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const quisuisje = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
  }).format(new Date());
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission refusée : le peu de pouvoir s'accompagne... d'une absence de responsabilité ? `;
};

// Banner
export const bannière = (args?: string[]): string => {
  return `
██████╗ ██╗  ██╗██╗██╗     ███████╗ █████╗ ███████╗    ██████╗  ██████╗ ██╗   ██╗██████╗ 
██╔══██╗██║  ██║██║██║     ██╔════╝██╔══██╗██╔════╝    ██╔══██╗██╔═══██╗██║   ██║██╔══██╗
██████╔╝███████║██║██║     █████╗  ███████║███████╗    ██████╔╝██║   ██║██║   ██║██████╔╝
██╔═══╝ ██╔══██║██║██║     ██╔══╝  ██╔══██║╚════██║    ██╔══██╗██║   ██║██║   ██║██╔══██╗
██║     ██║  ██║██║███████╗███████╗██║  ██║███████║    ██████╔╝╚██████╔╝╚██████╔╝██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝

Taper 'help' pour afficher la liste des commandes.
Taper 'résumé' pour afficher un court résumé.
`;
};