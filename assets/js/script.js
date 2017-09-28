jQuery(document).ready(function($) { 
    
	$('#publications-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
});