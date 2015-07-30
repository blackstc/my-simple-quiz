// add scripts


$(document).on('ready', function() {

  //input: question text and question number. Process: add question and related options to a single Div.  Out: appends new div of questions and answers to the DOM.
  function createQuestion(question, num) {
    $('#quizForm').append('<div id=' + num +'><h3>' + num + ". " + question + '</h3></div>');
    for (var i = 0; i < quiz[num - 1].options.length; i++) {
      $('#quizForm').append(createAnswers(quiz[num - 1].options[i], num));
    }
  }

  //input: answer option and unique ID.  Process: add the text and unique id to an html input and append to DOM.  Out:  appends new text and ID to the DOM
  function createAnswers (text, id) {
    $('#' + id).append('<label><input name='+ id +' type="radio"/>' + text + '</label><br>');
  }

  //input: questions and submited answer.  Process: check to see if the answer is correct.  Out: record whether the selected answer is correct.
  function  checkAnswer (questionNum) {
    var $answer = $('#' + questionNum).find('input:checked').parent().text();

    console.log($answer);
    console.log(quiz[0].answer);
    if (quiz[questionNum - 1].answer === $answer) {
      return true;
    } else {
      return false;
    }
  }


createQuestion(quiz[0].question, 1);
createQuestion(quiz[1].question, 2);
createQuestion(quiz[2].question, 3);
});
