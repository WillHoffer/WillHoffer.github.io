var quotes = [
  'Quote 1',
  'Quote 2',
  'Where be his...'
]

function newQuote(){
var randomN = math.floor(Math.random()*quotes.length());
document.getElementById('quoteDisplay').innerHTML = quotes[randomN];
}