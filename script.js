const quotes = [
  {
    quote: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    quote: "A good name is better than a good perfume.",
    author: "Unknown"
  },
    {
    quote: "When the Nile River knows a secret the desert will soon come to know it too.",
    author: "Unknown"
  },
    {
    quote: "Hardships do not come to those that are prepared.",
    author: "Unknown"
  },
      {
    quote: " A home cannot be built for the rainy season that has past.",
    author: "Unknown"
  },
  {
    quote: "The only way to do great work is to love what you do.",
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
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
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
