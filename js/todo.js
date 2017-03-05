$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here

function submitForm(){
	$('form').on('submit',function(e){
		var items=$('#item').val();;
		$('ol').append('<li>'+items+'</li>');
		
		e.preventDefault();
	});
}