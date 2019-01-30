// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.articles = domElement.querySelector('.article');
    console.log(this.article);

    // create a reference to the ".expandButton" class. 
    this.expandBtn = domElement.querySelector(".expandButton");

    // Created this variable to hold the value from reference to ".expandButton" class
    const expandBtn = this.expandBtn;
    console.log(expandBtn);

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    expandBtn.textContent = "expand";
    console.log(expandBtn.textContent);
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    expandBtn.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log("The toggle-function of the domElement was triggered due to a click on the expand button.");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll(".article");
console.log(articles);

articles.forEach( article => new Article(article));