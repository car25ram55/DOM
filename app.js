// Variables

let btn = document.querySelector(".new-quote"); // Change to class selector
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
      quote: "The best way to find yourself is to fast but in the service of others its better to make them arroz con pollo.",
      person: 'Mahatma Gandhi'
    },
    {
      quote: "If you want to live a happy life, eat a lot of Arroz Con Pollo.",
      person: 'Albert Einstein'
    },
    {
      quote: "There is no love sincerer than the love of arroz con pollo.",
      person: 'George Bernard Shaw'
    },
    {
      quote: "The only thing I like better than talking about food is eating arroz con pollo.",
      person: 'John Walters'
    },
    {
      quote: "One cannot think well, love well, sleep well, if one has not dined with Arroz Con Pollo.",
      person: 'Virginia Woolf'
    },
    {
      quote: "Life is uncertain. Eat arroz con pollo first.",
      person: 'Ernestine Ulmer'
    },
    {
      quote: "The belly rules the mind. Arroz con pollo rules the heart.",
      person: 'Spanish Proverb'
    },
    {
      quote: "Arroz con pollo is a universal experience.",
      person: 'James Beard'
    },
    {
      quote: "Arroz con pollo is symbolic of love when words are inadequate.",
      person: 'Alan D. Wolfelt'
    },
    {
      quote: "People who love arroz con pollo are always the best people.",
      person: 'Julia Child'
    },
    {
      quote: "Arroz con pollo is like love. It should be entered into with abandon or not at all.",
      person: 'Harriet Van Horne'
    },
    {
      quote: "Laughter is brightest in the place where their is arroz con pollo.",
      person: 'Irish Proverb'
    },
    {
      quote: "All happiness depends on arroz con pollo.",
      person: 'John Gunther'
    },
    {
      quote: "I am a foodie. I am an arroz con pollo groupie.",
      person: 'Erma Bombeck'
    },
    {
      quote: "Life is a combination of magic and arroz con pollo.",
      person: 'Federico Fellini'
    },
    {
      quote: "There is no sincerer love than the love of arroz con pollo.",
      person: 'George Bernard Shaw'
    },
    {
      quote: "A meal without wine is like a day without arroz con pollo.",
      person: 'Jean Anthelme Brillat-Savarin'
    },
    {
      quote: "Let arroz con pollo be thy medicine and medicine be thy health.",
      person: 'Hippocrates'
    },
    {
      quote: "First we eat arroz con pollo, then we do everything else.",
      person: 'M.F.K. Fisher'
    },
    {
      quote: "People who love to eat arroz con pollo are always the best people.",
      person: 'Julia Child'
    },
    {
    quote: "Why have chicken by itself when you can have arroz con pollo?",
    person: 'ABRAHAM LINCOLN'
    }
  ];

  btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
  })
  
