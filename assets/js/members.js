$("document").ready(function(){
   	
	$.getJSON("data/members.list.json", function(result){
		
    var undergraduates = getMemberByType("undergraduate", result.members)
		
    $.each(undergraduates, function(i, member){			
      
    var html = '<div class="col-sm-6"> '+
                '<div class="row" id="row-member">'+
                  '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                    '<img src="'+member.avatar+'" class="img-thumbnail"/>'+
                  '</div>'+
                  '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                    '<h4>'+ member.name +'</h4>'+
                    '<p><b>Since: </b> ' + member.date + ' | ' + member.mail +' | <a target="_blank" href="'+member.homepage+'">Webpage</a><br />'+
                    '<b>Research: </b>'+member.research+'</p>'+
                  '</div>'+
                '</div>'+
              '</div>'
      
    // used to clear flot style after the second item in each pseudo-line	
    if(i % 2 == 1)
      html += '<div style="clear:both">';
      
          $("#all-undergraduate").append(html);
          $("#undergraduates").append(html);
    
      });
		
		var masters = getMemberByType("master", result.members)
		
		$.each(masters, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="'+member.avatar+'" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since: </b> ' + member.date + ' | ' + member.mail +' | <a target="_blank" href="'+member.homepage+'">Webpage</a><br />'+
                      '<b>Research: </b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'
			
			// used to clear flot style after the second item in each pseudo-line	
			if(i % 2 == 1)
				html += '<div style="clear:both">';
			
            $("#all-master").append(html);
			$("#masters").append(html);
					
        });
		
		var phds = getMemberByType("doctoral", result.members)
		
		$.each(phds, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="'+member.avatar+'" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since: </b> ' + member.date + ' | ' + member.mail +' | <a target="_blank" href="'+member.homepage+'">Webpage</a><br />'+
                      '<b>Research: </b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'
			
			// used to clear flot style after the second item in each pseudo-line	
			if(i % 2 == 1)
				html += '<div style="clear:both">';	
            $("#all-phd").append(html);
			      $("#phds").append(html);
        });
		
		var formers = getMemberByType("former", result.members)
		
		$.each(formers, function(i, member){			
				
			var html = '<div class="col-sm-6"> '+
                  '<div class="row" id="row-member">'+
                    '<div class="col-lg-2 col-sm-3 col-xs-4" id="img-member">'+
                      '<img src="'+member.avatar+'" class="img-thumbnail"/>'+
                    '</div>'+
                    '<div class="col-lg-10 col-sm-9 col-xs-8">'+
                      '<h4>'+ member.name +'</h4>'+
                      '<p><b>Since: </b> ' + member.date + ' | ' + member.mail +' | <a target="_blank" href="">Webpage</a><br />'+
                      '<b>Research: </b>'+member.research+'</p>'+
                    '</div>'+
                  '</div>'+
                '</div>'
				
			// used to clear flot style after the second item in each pseudo-line	
			if(i % 2 == 1)
				html += '<div style="clear:both">';
            $("#all-former").append(html);
			      $("#formers").append(html);
        });
  });
	
});

function getMemberByType(mType, membersVector){
  // Return all active members of a given type: undergraduate | master | doctoral | former
  return membersVector.filter(function(member){
    if (member.active && member.position == mType)
      return true
  })

}


