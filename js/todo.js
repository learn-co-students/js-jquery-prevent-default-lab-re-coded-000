$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
	
	$('form').on('submit', function(event){
		var userInput = $('#item').val();
		$('#list ol').append('<li>'+userInput+'</li>')
		$('#item').val('');
        event.preventDefault();
});
}

