// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    c += Object.keys(bin).sort()[i - 1] + '\n';
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

export const calculer = async (args: string[]): Promise<string> => {
  try {
    const result = eval(args.join(' '));
    return result.toString();
  } catch (e) {
    return 'Erreur de calcul. Veuillez vérifier votre expression.';
  }
};

export const photo = async (args: string[]): Promise<string> => {
  const imageLink = [
    'https://hp42dmfpdttis9mx.public.blob.vercel-storage.com/1.jpeg',
    'https://hp42dmfpdttis9mx.public.blob.vercel-storage.com/2.jpg',
    'https://hp42dmfpdttis9mx.public.blob.vercel-storage.com/3.jpg',
    'https://hp42dmfpdttis9mx.public.blob.vercel-storage.com/4.jpg',
    'https://hp42dmfpdttis9mx.public.blob.vercel-storage.com/5.jpg',
  ];

  let html = '';
  for (let i = 0; i < imageLink.length; i += 2) {
    html += '<div style="display: flex; justify-content: space-between;">';
    html += `<img src="${imageLink[i]}" alt="Image" style="width: 50%; height: auto;">`;
    if (i + 1 < imageLink.length) {
      html += `<img src="${imageLink[i + 1]}" alt="Image" style="width: 50%; height: auto;">`;
    }
    html += '</div>';
  }

  return html;
};
