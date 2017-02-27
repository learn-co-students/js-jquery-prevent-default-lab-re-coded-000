$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm(){
$('form').on('submit',function(event){
	var toDoItem=$('#item').val();;
	$('ol').append('<li>'+toDoItem+'</li>');
	
   event.preventDefault();
});
}