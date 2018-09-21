$(function() 
{
	$("#devLink").on('click', function() 
	{
		console.log("Hello"); 
		var position = $("#dev").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#headingLink").on('click', function() 
	{
		console.log("Hello"); 
		var position = $("#heading").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});

$(function() 
{
	$("#orderLink").on('click', function() 
	{
		console.log("Hello"); 
		var position = $("#order").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	});
});