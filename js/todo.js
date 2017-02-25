$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(){
	

	$('form').on('submit', function(event){		
        var listitem = $('input').val();
		$('#list ol').append('<li>' + listitem + '</li>');
		event.preventDefault();
	})
}