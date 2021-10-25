// 1. Using getElementById, select the div with the info for Portillo's inside of it and set it to a const variable called portillos.
const portillos = document.getElementById(`portillos`);
// console.log(portillos);

// 2. Using getElementsByTagName, select all the images and set them to a const variable called images
const images = document.getElementsByTagName(`img`);
// console.log(images);

// 3. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName(`center`);
// console.log(centered);

// 4. Using querySelector, select the first div with the info for Gino's East inside of it and set it to a const variable called ginosEast.
const ginosEast = document.querySelector(`div`);
// console.log(ginosEast);

// 5. Using querySelectorAll, select all the p elements and set them to a const variable called pTags
const pTags = document.querySelectorAll(`p`);
// console.log(pTags);

// 6a. Select the h1 (You can use whichever selector you want) and set it to a const variable called h1.
const h1 = document.querySelector(`h1`);
// console.log(h1);

// 6b. Use inner text to change the text to say "Matt's Favorite Places To Eat In Sweet Home Chicago!"
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`;
// console.log(h1);

// 7a. Select the div with the id of "others" and set it to a const variable called others.
const others = document.getElementById(`others`);
// console.log(others);

// 7b. Use innerHTML to change the HTML to an h3 with the text of "Other favorites" inside of it
others.innerHTML= `<h3>Other favorites</h3>`
// console.log(others);

// 8a. Select the a tag at the bottom of the HTML file and set it to a const variable called aTag.
const aTag = document.querySelector(`a`);
// console.log(aTag);

// 8b. Change the href attribute to the following link "https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/"
aTag.href = "https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/";
// console.log(aTag.href);

// 9. Using classList, ADD both the "background" and "text-color" classes to the h1 (NOTE: You can use the h1 variable you created earlier)
h1.classList.add(`background`, `text-color`);

// 10. Using classList, REMOVE the "background" class from the h1 (NOTE: You can use the h1 variable you created earlier)
h1.classList.remove(`background`);

// 11a. Using createElement, create an h4 element and set it to a const variable called h4
const h4 = document.createElement(`h4`);

// 11b. Using innerText add the following text "CHICAGO: A great place to eat!"
h4.innerText = "CHICAGO: A great place to eat!";

// 11c. Using prepend, add the h4 to the start of the webpage/document (NOTE: You need to select the body element before you do this)
const body = document.querySelector(`body`);
body.prepend(h4);

// 12a. Using createElement, create an h5 element and set it to a const variable called h5
const h5 = document.createElement(`h5`);

// 12b. Using innerText add the following text "See you in the Windy City Sometime!"
h5.innerText = "See you in the Windy City Sometime!";

// 12c. Using insertAdjacentElement, add the h5 after the closing tag of the a tag (AKA After the closing tag for the link) on the webpage/document (NOTE: You can use the aTag variable you created earlier)
aTag.insertAdjacentElement(`afterend`, h5);

// 13. Using remove, remove the "Jay's Beef" li (NOTE: You will need to select the li first)
const firstLi = document.querySelector(`li`);
firstLi.remove();