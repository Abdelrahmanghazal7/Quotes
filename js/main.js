var quotes = [
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe'
    },
    {
        'author': 'Bernard M. Baruch',
        'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world'
    },
    {
        'author': 'Robert Frost',
        'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on'
    },
    {
        'author': 'Ralph Waldo Emerson',
        'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment'
    },
    {
        'author': 'Andre Gide, Autumn Leaves',
        'quote': 'It is better to be hated for what you are than to be loved for what you are not'
    },
];


function generateQuote() {

    var random = Math.floor(Math.random() * quotes.length);

    document.getElementById('quote').innerHTML = quotes[random].quote;
    document.getElementById('author').innerHTML = `--${quotes[random].author}`;

}
