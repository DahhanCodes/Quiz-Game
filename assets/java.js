//creating an arrays that will hold lists that consist of questions, choices, and correct answers
var questions = [ "Commonly used data types DO NOT include:____",
                  "The condition in an if / else statement is enclosed within ____.",
                  "Arrays in Javascript can be used to store ____.",
                  "String values must be enclosed within ____ when being assigned to variables.",
                  "A very useful tool for used during development and debugging for printing content to the debugger is:_____"];

   
var choices = ["strings", "booleans", "alerts", "numbers", "quotes", "curly brackets", "parentheses", "square brackets",
               "numbers and strings", "other arrays", "booleans", "all of the above", "commas", "curly brackets", "quotes", 
               "parenthesis", "Javascript", "terminal / bash", "for loops", "console log"];
var correct = ["alerts", "parentheses", "all of the above","quotes","console log" ];
var score= 0;
var time = 0; 
var element;
//creating a button variable to access the html button
var button = document.getElementById("button");
//adding an event listener to check if user clicked the generate password button
button.addEventListener('click', activated);
//creating a function that will help create a random password
function activated(event){
    var introPage = document.getElementById("intro");
    var questionPage= document.getElementById("questionBox");
   
    introPage.style.display= "none";
    document.getElementById("question").innerHTML = questions[0];
    document.getElementById("ansOne").innerHTML =  choices[0];
    document.getElementById("ansTwo").innerHTML = choices[1];
    document.getElementById("ansThree").innerHTML = choices[2];
    document.getElementById("ansFour").innerHTML = choices[3]
        questionPage.style.display= "block";
        
}
function quiz(event){ 
    var element = event.target;
    var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
    for(let i = 0; i < correct.length; i++ ){
        if (element.textContent == correct[i]) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + correct[i];
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + correct[i];
        }


    }    

    questions.shift();
    choices.splice(0,4);
    console.log(choices)
    console.log(questions)
    if(questions===undefined && choices===undefined){
        var done = document.getElementById("end");
        questionPage.style.display= "none";
        done.style.display="block";
    }
    else{
    activated();     
    }
}

