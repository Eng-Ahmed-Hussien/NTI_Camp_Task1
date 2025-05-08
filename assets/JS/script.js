// fetch function for JSON data
async function fetchData(url, fallbackData) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${url}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return fallbackData;
  }
}

// Render Session functions
function renderSessions(sessions) {
  const container = document.getElementById('workshopsContainer');
  container.innerHTML = '';
  sessions.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card-hover theme-transition bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md';
    card.innerHTML = `
      <div class="flex flex-col h-full">
        <div class="mb-4">
          <span class="text-blue-500 font-bold">0${s.id}</span>
          <h2 class="text-xl font-bold inline-block ml-2 text-gray-800 dark:text-white">${s.title}</h2>
          <div class="blue-underline w-full mt-1"></div>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-6 flex-grow">${s.description}</p>
        <a href="./assets/pages/${s.linkUrl}.html" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">
          ${s.buttonText}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}
// Render training Modules cards
function renderTrainingCards(cards) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';
  cards.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card-hover theme-transition bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700';

    // Create the sessions list HTML if sessions exist
    let sessionsHTML = '';
    if (c.sessions && c.sessions.length > 0) {
      sessionsHTML = `
      <div class="mb-4">
        <h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-2">Sessions:</h4>
        <ul class="list-disc pl-5 text-gray-600 dark:text-gray-400">
          ${c.sessions.slice(0, 3).map(session =>
        `<li class="text-blue-500 font-medium">${session}</li>`
      ).join('')}
        </ul>
      </div>`;
    }

    card.innerHTML = `
      <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">${c.title}</h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">${c.description}</p>
      ${sessionsHTML}
      <a href="${c.linkUrl}" class="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors">
        ${c.linkText}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    `;
    container.appendChild(card);
  });
}

// Initialize both sections on page load
async function initializePage() {
  updateHeaderBackground();
  const sessions = await fetchData('./assets/data/sessionsData.json');
  renderSessions(sessions);
  const training = await fetchData('./assets/data/trainingModulesData.json');
  renderTrainingCards(training);
}

document.addEventListener('DOMContentLoaded', initializePage);