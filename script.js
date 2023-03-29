const quotes = [
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "If you want to achieve greatness, stop asking for permission.",
    author: "Unknown"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
];

function generateQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteText = document.getElementById("quote");
  quoteText.innerHTML = `"${randomQuote.quote}"<br> - ${randomQuote.author}`;
}
