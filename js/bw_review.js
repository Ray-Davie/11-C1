"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: rayden
   Date:   4/10/25
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

//Run the init() function when page loads
window.onload = init;

function init(){
  var stars = document.querySelectorAll("span#stars img");
  for (var i = 0; i < stars.length; i++) {
    stars[i].style.cursor= "pointer";
    stars[i].addEventListener("mouseenter", lightStars);
  }
  document.getElementById("comment").addEventListener("keyup", updateCount);
}


function lightStars(e) {
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < starNumber; i++) {
      stars[i].src = "../images/bw_star2.png";
   }
   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "../images/bw_star.png";
   }
   
  document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click",
      function() {
         e.target.removeEventListener("mouseleave", turnOffStars);
      }
   );  
}

 function turnOffStars() {
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < 5; i++) {
      stars[i].src = "../images/bw_star.png";
   }
   document.getElementById("rating").value = "";
} 
  
  function updateCount(){
    var commentText = document.getElementById("comment").value;
    var charCount = countCharacters(commentText);
    var wordCountBox = document.getElementById("wordCount");
    
    wordCountBox.value =  charCount + "/1000";
    if(charCount > 1000){
       wordCountBox.style.color = "white";
       wordCountBox.style.backgroundColor = "red";
       }
    else {
       wordCountBox.style.color = "black";
       wordCountBox.style.backgroundColor = "white";
    }
  }
  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   