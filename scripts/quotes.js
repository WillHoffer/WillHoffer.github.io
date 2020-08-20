  var quotes = [
  '"Where be his quiddities now, his quillets, his cases, his tenures, and his tricks?"- William Shakespeare, Hamlet',
  '"My business is circumference." - Emily Dickinson',
  '"It is very difficult to make good mistakes." - Goro Shimura',
  '"What use is a newborn baby?" - Michael Faraday, on the use of electricity',
  '"Science can\'t see what it doesn\'t have the language to describe." - John Hunton',
  '"God created the integers; all else is the work of man." - Leopold Kronecker'
]

function newQuote() {
var randomN = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomN];
}

