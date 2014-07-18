//= require_tree .
$(document).ready(function(){
	$('#buttonOne').click(function(){
		$('#cardOne').slideUp('slow');
		return false;
	});

	$('#buttonTwo').click(function(){
		$('#cardTwo').slideUp('slow');
		return false;
	});

	$('#previousTwo').click(function(){
		$('#cardTwo').slideDown('slow');
	});

	$('#buttonThree').click(function(){
		$('#cardThree').slideUp('slow');
		return false;
	});

	$('#buttonFour').click(function(){
		$('#cardFour').slideUp('slow');
		return false;
	});

	$('#buttonFive').click(function(){
		$('#cardFive').slideUp('slow');
		return false;
	});
});