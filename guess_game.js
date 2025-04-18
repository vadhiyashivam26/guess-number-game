const max = prompt("enter the maximum number ");

let random = Math.floor(Math.random() * max)+1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("you'r quitting the game");
        break;
    }

    if(guess == random){
        console.log("congrats, you guess the right number.",random);
        break;
    }else if(guess < random){
        guess = prompt("random number was larger than you guess, pls try again...!");
    }else{
        guess = prompt("random number was smaller than you guess, pls try again...!");
    }
}