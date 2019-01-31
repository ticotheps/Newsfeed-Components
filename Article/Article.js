// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    // console.log(this.expandButton);

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // console.log(this.expandButton.textContent);
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("The toggle-function of the domElement was triggered due to a click on the expand button.");
    this.domElement.classList.toggle("article-open");
    this.expandButton.textContent == 'collapse'
         ? this.expandButton.textContent = 'expand'
         : this.expandButton.textContent = 'collapse';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

// let article = document.querySelector(".article");

let articles = document.querySelectorAll(".article");
console.log(articles);

articles.forEach( (article) => {
  console.log(article);
  return new Article(article);
});

// articles.forEach( article => new Article(article));


//*=====* STRETCH *=====*

const articleH2 = document.querySelector('div.article h2');

// Event Listener #1 - 'click'
articleH2.addEventListener('click', e => {
  console.log(`User has clicked on a <h2> element within the '.article' <div>, triggering this event: ${e}`);
  articleH2.style.color = "yellow";
  articleH2.style.backgroundColor = "blue";
  TweenMax.from("div.article h2", 1, {x:25, ease: Bounce.easeOut});
});