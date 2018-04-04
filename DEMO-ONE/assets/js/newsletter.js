$(document).ready(function() {

    $("#contact-form1 [type='submit']").click(function(e) {
        e.preventDefault();
        
        // Get input field values of the contact form
        var user_email      = $('input[name=email-address1]').val();
		// Datadata to be sent to server
        post_data = {'userEmail':user_email};
       
        // Ajax post data to server
        $.post('php/newsletter.php', post_data, function(response){  
           
            // Load json data from server and output message    
            if(response.type == 'error') {

                output = '<div class="error-message"><p>'+response.text+'</p></div>';
                
            } else {
           
                output = '<div class="success-message"><p>'+response.text+'</p></div>';
               
                // After, all the fields are reseted
                $('#contact-form1 input').val('');
            }
           
            $("#answer1").hide().html(output).fadeIn();

        }, 'json');

    });
   
    // Reset and hide all messages on .keyup()
    $("#contact-form1 input").keyup(function() {
        $("#answer1").fadeOut();
    });
   
});