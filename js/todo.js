$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions her
function submitForm() {$('form').on('submit', function(event){add();event.preventDefault();  });}
function add() {$('#list ol').append("<li>"+$('#item').val()+"</li>");$('#item').val("")}