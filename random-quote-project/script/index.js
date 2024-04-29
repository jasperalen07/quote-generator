const quotes = ["Only put off until tomorrow what you are willing to die having left undone.' - Pablo Picasso", 
"If you really want to do something, youll find a way. If you don't, you'll find an excuse.” - Jim Rohn", 
"How wonderful it is that nobody need wait a single moment before starting to improve the world.  - Anne Frank",
 "Failure is not our only punishment for laziness; there is also the success of others.",
 "Keep trying - Alen V", 
 "I am doing a reset, but this time I am doing a reset with experience"

];

const quoteElement = document.getElementById('quote');
const quoteButton = document.getElementById('quote-generator');

quoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
});

