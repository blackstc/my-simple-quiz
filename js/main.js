// add scripts


$(document).on('ready', function() {
  $("#score").hide();

  //input: number of questions. Process: take number in number of selected questions and generate question list.  Out: append list of questions to the DOM
  function generateQuiz(number) {
    var shuffledQuiz = shuffle(quiz);
    for (var i = 0; i < number; i++) {
      createQuestion(shuffledQuiz[i].question, (i + 1));
    }
  }

  //input: question text and question number. Process: add question and related options to a single Div.  Out: appends new div of questions and answers to the DOM.
  function createQuestion(question, num) {
    $('#quizForm').append('<div id=' + num +'><h4>' + num + ". " + question + '</h4></div>');
    for (var i = 0; i < quiz[num - 1].options.length; i++) {
      $('#quizForm').append(createAnswers(quiz[num - 1].options[i], num));
    }
  }

  //input: answer option and unique ID.  Process: add the text and unique id to an html input and append to DOM.  Out:  appends new text and ID to the DOM
  function createAnswers(text, id) {
    $('#' + id).append('<label><input name='+ id +' type="radio"/>' + text + '</label><br>');
  }

  //input: questions and submited answer.  Process: check to see if the answer is correct.  Out: record whether the selected answer is correct.
  function  checkAnswer(questionNum) {
    var $answer = $('#' + questionNum).find('input:checked').parent().text();
    var counter = 0;

    console.log($answer);
    console.log(quiz[0].answer);
    if (quiz[questionNum - 1].answer === $answer) {
      return true;
    } else {
      return false;
    }
  }

  //input: quiz, process: shuffle deck, out: shuffled deck
  function shuffle(quiz) {
  //create a copy of the deck so that we can access it later if needed.
    var currentIndex = quiz.length;
    var tempValue;
    var randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      tempValue = quiz[currentIndex];
      quiz[currentIndex] = quiz[randomIndex];
      quiz[randomIndex] = tempValue;
     }

      return quiz;
  }

  $("#score").on("click", function() {
    var counter = 0;
    var $number = +$("#question").val();
    $(".modal-body").html("");
    for (var i = 0; i < $number; i++) {
      if (checkAnswer(i + 1)) {
        $(".modal-body").append("<p>You got question " + (i + 1) + " correct!</p>");
        counter++;
      } else {
        $(".modal-body").append("<p>You got question " + (i + 1) + " wrong! You suck! Get a life!  Obviously, the correct answer was " + quiz[i].answer + ".</p>");
      }
    }
    var quizPercentage = counter/$number * 100;
    $(".modal-title").html("Score: " + counter + "/" + $number + " or " + quizPercentage + "%");
  });

  //generates quiz on click of generate quiz button
  $("#generate").on("click", function() {
    $("#score").show();
    $("#generate").hide();
    $("#question").hide();
    var $number = +$("#question").val();
    console.log($number);
    generateQuiz($number);
  });
});
