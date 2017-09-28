$("document").ready(function(){
    	
	$.getJSON("data/members.json", function(result){
			
        $.each(result.undergraduate, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="assets/images/team/user.svg" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since:</b> ' + member.date + '|' + member.mail +'| <a href="">Webpage</a><br />'+
                      '<b>Research:</b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+

                '</div>'
				
            $("#all-undergratuate").append(html);
					
        });
		
		$.each(result.master, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="assets/images/team/user.svg" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since:</b> ' + member.date + '|' + member.mail +'| <a href="">Webpage</a><br />'+
                      '<b>Research:</b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+

                '</div>'
			
            $("#all-master").append(html);
					
        });
		
		
		$.each(result.phd, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="assets/images/team/user.svg" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since:</b> ' + member.date + '|' + member.mail +'| <a href="">Webpage</a><br />'+
                      '<b>Research:</b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+

                '</div>'
				
            $("#all-phd").append(html);
					
        });
		
		$.each(result.former, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="assets/images/team/user.svg" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since:</b> ' + member.date + '|' + member.mail +'| <a href="">Webpage</a><br />'+
                      '<b>Research:</b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+

                '</div>'
				
            $("#all-former").append(html);
					
        });
		
    });
	
});