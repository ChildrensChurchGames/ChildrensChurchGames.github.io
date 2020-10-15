var questionsubmitted = false;

function question_iframe_onload(e){
  if (questionsubmitted == true) {
    $("#question_hidden_iframe").remove();
  };
};

$(document).ready(function(){
  $("#question_form").validate({
    rules: {
      //question
      'entry.809144564': {
        required: true
      },

      //correct answer
      'entry.187849648': {
        required: true
      },

      //incorrect answer 1
      'entry.1062808255': {
        required: true
      },

      //incorrect answer 2
      'entry.22923817': {
        required: false
      },

      //incorrect answer 3
      'entry.1592649018': {
        required: false
      },

      //difficulty
      'entry.1578457137': {
        required: true,
        min: 1,
        max: 10
      },

      //categories
      'entry.1014671867': {
        required: true
      }
    },
    messages: {
      //question
      'entry.809144564': "You need to specify a question.",

      //correct answer
      'entry.187849648': "You need to tell us what the correct answer is.",

      //incorrect answer 1
      'entry.1062808255': "Please provide at least one incorrect answer.",

      //incorrect answer 2
      'entry.22923817': "Please provide the second incorrect answer.",

      //incorrect answer 3
      'entry.1592649018': "Please provide the third incorrect answer.",

      //difficulty
      'entry.1578457137': {
        required: "You must specify the difficulty of your question.",
        min: "The difficulty must be between 1 and 10.",
        max: "The difficulty must be between 1 and 10."
      },

      //categories
      'entry.1014671867': "Please select at least one category."
    },

    errorLabelContainer: "#ErrorBox",
    wrapper: "li",
    highlight: function(element) {
      $(element).addClass("form_error")
    },
    unhighlight: function(element) {
      $(element).removeClass("form_error")
    },
    submitHandler: function(form) {
      questionsubmitted=true;
      $("#question_form").slideUp(1200,function(){
        $("#question_submitted").slideDown(400, function(){
          document.getElementById("contact_form").reset()
        })
      });
      form.submit();
    }
  })
})
