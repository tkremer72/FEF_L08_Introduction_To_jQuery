// first method changes the font color of the header text when the mouse hovers over as per the requirements. 

$(document).ready(function () {  
      $("header").hover(function () {
            $(this).css("color", "red");
      }, function () {
            $(this).css("color", "black");
      });
});

// Next method changes the header background color when the mouse hovers over it.

$(document).ready(function () {
      $("header").hover(function () {
            $(this).css("background-color", "yellow");
      }, function () {
            $(this).css("background-color", "lightblue");
      });
});

/* This method changes the text in the paragraph tag from what is in the original html document to the text below 
when the user clicks on it. */

$(document).ready(function () {
      $("p").click(function () {
            $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which you would have to write yourself before jQuery, and compresses it.");
      });
});

// The following method hides the list items if the user double clicks on them.

$(document).ready(function () {
      $("li").dblclick(function () {
            $(this).hide();
      });
});

// This next method adds a list item to the list if the user single clicks on the list.

$(document).ready(function() {
      $("li").click(function() {
            $(this).append("<li>Ruby on Rails</li>")
     });
});

// The method below toggles between red and black when the user is typing or pressing down on the keys.

$(document).ready(function () {
      $("input").keydown(function () {
            $(this).toggleClass("input");
      });
});

// This method changes the background color of the input boxes when the mouse cursor is inside the input field.

$(document).ready(function(){
      $("input").focus(function() {
            $(this).css("background-color", "tan");
      });
});