// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');




  function createQuestionHeader(header, num) {
    $('#quizForm').append("<div><h3>" + num + ". " + header + '</h3></div>');
    for (var i = 0; i < quiz[num - 1].options.length; i++) {
      $('#quizForm').append(createAnswers(quiz[num - 1].options[i]));
    }
  }

  function createAnswers (text, id) {
    $('#quizForm').append('<label id='+ id +'><input type="radio"/>&nbsp;&nbsp;' + text + '</label><br>');
  }


createQuestionHeader(quiz[0].question, 1);
createQuestionHeader(quiz[1].question, 2);
});


