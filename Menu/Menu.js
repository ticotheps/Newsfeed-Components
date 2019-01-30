
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  console.log("The toggle-function of the menu has been triggered due to a click on the .menu-button <img> element!");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
console.log(menu);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());