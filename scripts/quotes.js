  var quotes = [
  '"Where be his quiddities now, his quillets, his cases, his tenures, and his tricks?"- William Shakespeare, Hamlet',
  '"My business is circumference." - Emily Dickinson',
  '"It is very difficult to make good mistakes." - Goro Shimura',
  '"What use is a newborn baby?" - Michael Faraday, on the use of electricity',
  '"Science can\'t see what it doesn\'t have the language to describe." - John Hunton',
  '"God created the integers; all else is the work of man." - Leopold Kronecker',
  '"A theory can\'t be just \'a little indeterministic\', it is like being \'a little pregnant.\'" - Nima Arkani-Hamed',
  '"I trust machines more than professors." - Bruno Buchberger',
  '"When people ask my wife \'what does your husband do?\', she replies \'He models.\' When they ask, what does he model?,\' she replies: \'Genes.\'" - Xiao-Li Meng',
  '"There are also numbers that are not prime." - Jean Bourgain',
  '"Nature is a good approximation of Mathematics." - Zvi Artstein',
  '"In Mathematics it is always best to cheat." - Herb Wilf', 
  '"I was just sitting on the train, just staring out the window at some cows. It was not the most inspiring subject. When all of a sudden the idea of Harry just appeared in my mind\'s eye." - J. K. Rowling',
  '"We decided that \'trivial\' means \'proved.\' So we joked with the mathematicians: \'We have a new theorem- that mathematicians can prove only trivial theorems, because every theorem that\'s proved is trivial." - Richard Feynman',
  '"Everybody knows that mathematics is about Miracles; only mathematicians have a name for them: Theorems." - Roger Howe',
  '"The worst thing you can do to a problem is solve it completely." - Daniel Kleitman'
]

function newQuote() {
var randomN = Math.floor(Math.random()*(quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomN];
}
