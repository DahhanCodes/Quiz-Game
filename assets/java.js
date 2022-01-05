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
var time = 5; 
var timeLeft;
var penalty= 1;
var questionNum=0;
var names=[];
var scoresList= [];


//creating a button variable to access the html button
var button = document.getElementById("button");
var highScores = document.getElementById("highScores")
//adding an event listener to check if user clicked the generate password button
highScores.addEventListener('click',scores)
button.addEventListener('click', timer);
button.addEventListener('click', activated);
//creating a function that will help create a random password
var introPage = document.getElementById("intro");
var questionPage= document.getElementById("questionBox");
function scores(){
    introPage.style.display= "none";
    questionPage.style.display= "none";
    var list = $("<li>").addClass("listOfScores")
    for(let i=0;i<names.length(); i++)
    $("#scorePage").append(list).text(names[i]+" : "+scores[i]);
    document.write("\n");
}
function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  async function timer(){
      for (let i=0; i<5 ; i++){
    await sleep(60000)
    time -= 1;
    document.getElementById("time").innerHTML = time;
  }
}
function activated(event){
    introPage.style.display= "none";
    document.getElementById("time").innerHTML = time;
    document.getElementById("question").innerHTML = questions[0];
    document.getElementById("ansOne").innerHTML =  choices[0];
    document.getElementById("ansTwo").innerHTML = choices[1];
    document.getElementById("ansThree").innerHTML = choices[2];
    document.getElementById("ansFour").innerHTML = choices[3]
    
        questionPage.style.display= "block";
        
}
$(".answers").on("click","li",async function check(){
    var correctMessage= $("<p>").addClass("message").text("Correct Answer!")
    var wrongMessage= $("<p>").addClass("message").text("Wrong! The correct answer is:  " + correct[questionNum]);
    var answer=$(this).text().trim();
    String(answer);
    console.log(answer)
    console.log(correct[questionNum])
    var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
    for(let i = 0; i < correct.length; i++ ){
        if (answer == correct[questionNum]) {
            score++;
            $("#questionBox").append(correctMessage);
            // Correct condition
            
            break;
        } 
    }
    for(let i = 0; i < correct.length; i++ ){
        if (answer != correct[questionNum]) {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            time = time - penalty;
            $("#questionBox").append(wrongMessage);
            
             break;
        }
    }


    
    
    questionNum ++;
    questions.shift();
    choices.splice(0,4);
    console.log(choices)
    console.log(questions)
    if(questions[0]===undefined || time==0){
        var done = document.getElementById("end");
        questionPage.style.display= "none";
        done.style.display="block";
        document.getElementById("score").innerHTML = score;
        $("#name").on("click","input",function(){
            var text =$(this).text().trim();
            console.log(text);
           //create a new <textarea> element
           var textInput= $("<textarea>").val(text);
            $(this).replaceWith(textInput);
             textInput.trigger("focus");
             console.log(textInput);
           
          });
          
          //name field is un-focused
          $("#name").on("blur","textarea",function(){
            //get the textarea value
            var text= $(this).val().trim();
            names.push(text);
            String(score);
            scoresList.push(score)
           
          
          })
    }
    else{
        
   await sleep(2000);
   $(".message").css("display","none");
   activated(); 
     
    }
       
    
});

