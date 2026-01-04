// $("h1").css("color", "blue");

//checks if document is ready
// $(document).ready(function() {
//     $("h1").css("color", "blue");
// });

//minification reduces size of code by removing spaces and shortening variable names

//selectiing elements in jQuery
// document.querySelector("h1");
// $("h1");
// document.querySelectorAll("button");
// $("button");
// in jQuery, no need to loop through all elements, it applies changes to all selected elements

//Manipurlating styles in jQuery
// $("h1").css("color", "blue");
// $("h1").css("font-size", "5rem");
// $("h1").css("border", "2px solid red");
// $("h1").css("background-color", "yellow");
// $("h1").css("padding", "20px");

$("h1").addClass("big-title margin-50"); //can add multiple classes separated by space
// $("h1").removeClass("big-title");
// let hasClass = $("h1").hasClass("margin-50");
// console.log(hasClass);

//Manipulating text in jQuery
// $("h1").text("Goodbye");
// $("button").text("Don't click me");
// $("button").html("<em>Click me</em>"); //html instead of innerHTML, allows html tags

//Manipulating attributes in jQuery
// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");
// console.log($("a").attr("href"));
// $("img").attr("alt", "Cute Puppy");

//Adding event listeners in jQuery
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("click", function() {
    $("h1").css("color", "green");
});

//Adding and removing elements in jQuery
// $("h1").before("<button>New</button>"); //adds before h1
// $("h1").after("<button>New</button>"); //adds after h1
// $("h1").prepend("<button>New</button>"); //adds inside h1 at the beginning
// $("h1").append("<button>New</button>"); //adds inside h1 at the end

// $("button").remove(); //removes all buttons

//Animations in jQuery
// $("h1").hide(); //hides h1
// $("h1").show(); //shows h1
// $("h1").toggle(); //toggles visibility of h1

// $("h1").fadeOut(); //fades out h1
// $("h1").fadeIn(); //fades in h1
// $("h1").fadeToggle(); //toggles fade of h1

// $("h1").slideUp(); //slides up h1
// $("h1").slideDown(); //slides down h1
// $("h1").slideToggle(); //toggles slide of h1

//Custom animations in jQuery
$("h1").animate({opacity: 0.5}); //only works with numeric properties
$("h1").animate({margin: "20px"});
//can chain multiple animate methods
$("h1").animate({opacity: 0.5}).animate({margin: "20px"});