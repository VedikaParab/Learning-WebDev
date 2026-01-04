//generating first random dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//generating second random dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//giving the result
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = ("Player 1 wins!");
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = ("Player 2 wins!");
}

else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").textContent = ("It's a draw!");
}