$(document).ready(function () {
  $('#submit').click(function(e) {
    var statementInput = $("input#statement").val().toUpperCase();
    statementInput = statementInput + "!!!!!!!!!";

    $(".shout").text(statementInput);

    e.preventDefault();
  });


});
