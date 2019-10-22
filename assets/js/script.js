jQuery(document).ready(function($) {

	$('#publications-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

});

function setYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("current_year").innerHTML = n;
}
setYear()
