var allQuotes = [
    {
        'author': 'Maya Angelou',
        'quote': "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"
    },
    {
        'author': 'Mae West',
        'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': '“Be the change that you wish to see in the world.”'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {
        'author': 'Dr. Seuss',
        'quote': "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...”"
    },
    {
        'author': 'George Eliot',
        'quote': '“It is never too late to be what you might have been.”'
    },
    {
        'author': 'Ralph Waldo Emerson',
        'quote': '“For every minute you are angry you lose sixty seconds of happiness.”'
    },
    {
        'author': 'Mother Teresa',
        'quote': '“If you judge people, you have no time to love them.”'
    },
    {
        'author': 'Charles M. Schulz',
        'quote': "“All you need is love. But a little chocolate now and then doesn't hurt.”"
    },
    {
        'author': 'Markus Zusak',
        'quote': '“Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.”'
    },
]

var quotes = [...allQuotes];

var quoteText = document.getElementById('quoteOutput');
var quoteAuthor = document.getElementById('authorOutput');
var quoteIndex;

function generateRandomQuote() {

    if (quotes.length === 0) {
        quotes = [...allQuotes]
    }

    quoteIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[quoteIndex].quote;
    quoteAuthor.innerHTML = "-- " + quotes[quoteIndex].author;
    quotes.splice(quoteIndex, 1);
}

