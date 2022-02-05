// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
 
var fortune = 5;

const lowFortune = 'Oh no! You selected a low fortune!';
const avgFortune = 'You selected an average fortune.';
const greatFortune = 'Congratulations! You selected great fortune.';
const noFortune = 'It was hard to determine your fortune, try again!';

function tellFortune(){

    console.log("Fortune Selected: " + fortune);
    if (fortune >= 0 && fortune <=3){
        
        console.log(lowFortune);
    }
    else if (fortune > 3 && fortune <=7){
        
        console.log(avgFortune);
    }
    else if (fortune > 7 && fortune <=10){
        
        console.log(greatFortune);
    }
    else{
        console.log(noFortune);
    }
    
}
tellFortune();

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
