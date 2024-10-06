// In script.js
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
  header.style.backgroundColor = '#ccc';
});

header.addEventListener('mouseout', () => {
  header.style.backgroundColor = '#f0f0f0';
});

// In script.js
const quoteElement = document.querySelector('.quote');

function getRandomQuote() {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Creativity is intelligence having fun."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

getRandomQuote();