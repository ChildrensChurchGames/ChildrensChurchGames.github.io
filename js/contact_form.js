var contactsubmitted = false;

function contact_iframe_onload(e){
  if (contactsubmitted == true) {
    $("#contact_hidden_iframe").remove();
  }
};


$(document).ready(function(){
  $("#contact_form").validate({
    rules: {
      //name
      'entry.69347457': {
        required: true,
        minlength: 2
      },
      //email
      'entry.560466500': {
        required: true,
        email: true
      },
      //message
      'entry.534454377': "required"
    },
    messages: {
      //name
      'entry.69347457': {
        required: "Please specify your name.",
        minlength: jQuery.validator.format("At least {0} characters required for your name.")
      },
      //email
      'entry.560466500': {
        required: "We need your email address to reply to you.",
        email: "Please enter a valid email."
      },
      //message
      'entry.534454377': "There is no point in sending a message if there is no message to send."
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
      contactsubmitted=true;
      $("#contact_form").slideUp(1200,function(){
        $("#contact_submitted").slideDown(400, function(){
          document.getElementById("contact_form").reset()
        })
      });
      form.submit();
    }
  })
})
