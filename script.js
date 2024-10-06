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

// In script.js
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all required fields.');
  } else {
    // Submit the form data (e.g., using AJAX)
    console.log('Form submitted successfully!');
  }
});