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
  '"We used the axiom of choice every day, for breakfast." - Michel Lapidus',
  '"We decided that \'trivial\' means \'proved.\' So we joked with the mathematicians: \'We have a new theorem- that mathematicians can prove only trivial theorems, because every theorem that\'s proved is trivial." - Richard Feynman',
  '"Everybody knows that mathematics is about Miracles; only mathematicians have a name for them: Theorems." - Roger Howe',
  '"The worst thing you can do to a problem is solve it completely." - Daniel Kleitman',
  '"This wouldn\'t be good at making toast. It would make everything toast, once." - Linn van Woerkem',
  '"A bore is someone who deprives you of solitude without providing you with company." - Oscar Wilde',
  '"Young man, in mathematics you don\'t understand things. You just get used to them." - John von Neumann',
  '"If all roads lead to Rome, then the Roman empire is path connected." - Stefano Vidussi',
  '"A manifold with boundary is like a pig with five heads. Unless we say a pig has five heads, you can assume it has only one." - John Baez',
  '"We use gothic letters for Lie algebras. I have a theory that this is because while the Romans were roaming around and building aqueducts, the Goths were studying Lie algebras." - John Baez',
  '"A Lie algebra is a slide rule for a Lie group." - John Baez',
  '"Thank god life is not totally ordered! We are all the best at something, like being ourselves." - John Baez, after being compared by students to Richard Borcherds, who was also teaching a class on Lie groups',
  '"You can have nine fourths as much blood and gore in your video games because you use quaternions instead of real three by three matrices." - John Baez',
  '"If you want cool wiggly stuff, you shouldn\'t be doing linear algebra. Everything sort of looks like lines." - John Baez',
  '"When I was a kid— that is, up to the age of fourty..." - John Baez',
  '"A matrix is a thing born to act on a vector. It came out of the womb asking for vectors to act on." - John Baez',
  '"Coming back down to Earth— or what passes for it, to math grad students..." - John Baez',
  '"Determining where mathematics ends, and science begins, is as difficult, and as pointless, as mapping the edge of the morning mist." - Peter Atkins'
]

var quoteIndex = 0;

function newQuote() {
  var randomN = Math.floor(Math.random()*(quotes.length));
  elem = document.getElementById('quoteDisplay');
  if(elem !== null){
    elem.innerHTML = quotes[randomN];
  }
  else{
    //console.log("Document element with id \'quoteDisplay\' not found.");
  }
}

function nextQuote(){
  if(quoteIndex==quotes.length-1)
    quoteIndex = 0;
  else
    quoteIndex ++;
  
  document.getElementById('quoteDisplay').innerHTML = quotes[quoteIndex]
}

function randomizeOrder(){
  shuffleArray(quotes);
  newQuote();
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

document.onload += randomizeOrder();
