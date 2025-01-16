// // List of commands that require API calls

import { getProjects } from '../api';
import { getWeather } from '../api';

export const projets = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const météo = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: meteo [ville]. Exemple: meteo Paris';
  }
  const weather = await getWeather(city);
  return weather;
};
