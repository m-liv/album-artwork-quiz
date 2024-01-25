//Edited 2024
//Starting conditions
var redloreScore = 0;
var repmoreScore = 0;
var questionsAnswered = 0;
var repmoreDesc = document.getElementById("repmore-description");
var redloreDesc = document.getElementById("redlore-description");
repmoreDesc.style.display = "none";
redloreDesc.style.display = "none";

//Q1 
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
q1a1.addEventListener("click", redlorePlus);
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", repmorePlus);
q1a2.addEventListener("click", disableQ1);

//Q2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
q2a1.addEventListener("click", redlorePlus);
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", repmorePlus);
q2a2.addEventListener("click", disableQ2);

//Q3 
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
q3a1.addEventListener("click", repmorePlus);
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", redlorePlus);
q3a2.addEventListener("click", disableQ3);

//Q4 
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
q4a1.addEventListener("click", repmorePlus);
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", redlorePlus);
q4a2.addEventListener("click", disableQ4);

//Q5 
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
q5a1.addEventListener("click", repmorePlus);
q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", redlorePlus);
q5a2.addEventListener("click", disableQ5);

//Result
var showResult = document.getElementById("showResult");
showResult.addEventListener("click", displayResult);

//Restart
var restart = document.getElementById("restartButton");
restart.addEventListener("click", restartQuiz);

//Functions
function redlorePlus()
{
    redloreScore += 1; 
    questionsAnswered += 1;
    console.log("redlore score = " + redloreScore + " questions answered = "+ questionsAnswered); 

    if (questionsAnswered == 5)
    {
      console.log("the quiz is done");
    }
}

function repmorePlus()
{
    repmoreScore += 1;
    questionsAnswered += 1;
    console.log("repmore score = " + repmoreScore + " questions answered = "+ questionsAnswered); 

    if (questionsAnswered == 5)
    {
      console.log("the quiz is done");
    }
}

function disableQ1()
{
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQ2()
{
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQ3()
{
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableQ4()
{
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableQ5()
{
  q5a1.disabled = true;
  q5a2.disabled = true;
}

function displayResult()
{
  if (questionsAnswered >= 1) {
    showResult.disabled = true;
  }
  if (redloreScore > repmoreScore)
  {
    document.getElementById("result").innerHTML = "you are... red and folklore";
    redloreDesc.style.display = "block";
    console.log("you are red and folklore");
  }
  else if (repmoreScore > redloreScore)
  {
    document.getElementById("result").innerHTML = "you are... reputation and evermore";
    repmoreDesc.style.display = "block";
    console.log("you are reputation and evermore");
  }
}

function restartQuiz()
{
  console.log("the quiz has been restarted");
  redloreScore = 0;
  repmoreScore = 0; 
  questionsAnswered = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  showResult.disabled = false;
  document.getElementById("result").innerHTML = "you are...";
  repmoreDesc.style.display = "none";
  redloreDesc.style.display = "none";
}
