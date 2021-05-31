var questionsubmitted = false;

function question_iframe_onload(e){
  if (questionsubmitted == true) {
    $("#question_hidden_iframe").remove();
  };
};

$(function () {
       $("#cToggle").click(function () {
           if ($(this).is(":checked")) {
             $("#mc_question_form").slideUp(1200,function(){
               $("#tf_question_form").slideDown(1200)
             });
           } else {
             $("#tf_question_form").slideUp(1200,function(){
               $("#mc_question_form").slideDown(1200)
             });
           }
       });
});

$(document).ready(function(){
  $("#mc_question_form").validate({
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
        required: true
      },

      //incorrect answer 3
      'entry.1592649018': {
        required: true
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

    errorLabelContainer: "#MCErrorBox",
    wrapper: "li",
    highlight: function(element) {
      $(element).addClass("form_error")
    },
    unhighlight: function(element) {
      $(element).removeClass("form_error")
    },
    submitHandler: function(form) {
      questionsubmitted=true;
      $("#form_container").slideUp(1200,function(){
        $("#question_submitted").slideDown(400, function(){
          document.getElementById("contact_form").reset()
        })
      });
      form.submit();
    }
  })

  $("#tf_question_form").validate({
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
        required: true
      },

      //incorrect answer 3
      'entry.1592649018': {
        required: true
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

    errorLabelContainer: "#TFErrorBox",
    wrapper: "li",
    highlight: function(element) {
      $(element).addClass("form_error")
    },
    unhighlight: function(element) {
      $(element).removeClass("form_error")
    },
    submitHandler: function(form) {
      questionsubmitted=true;
      $("#form_container").slideUp(1200,function(){
        $("#question_submitted").slideDown(400, function(){
          document.getElementById("contact_form").reset()
        })
      });
      form.submit();
    }
  })
})
