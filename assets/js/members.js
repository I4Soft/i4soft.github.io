$("document").ready(function(){
   	
	$.getJSON("data/members.list.json", function(result){
		
    var undergraduates = getMemberByType("undergraduate", result.members)

    undergraduates.sort(compareNames)
		
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
    
    masters.sort(compareNames)
		
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
    
    phds.sort(compareNames)
		
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
    
    formers.sort(compareNames)
		
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

function compareNames(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

function getMemberByType(mType, membersVector){
  // Return all active members of a given type: undergraduate | master | doctoral | former
  return membersVector.filter(function(member){
    if (member.active && member.position == mType)
      return true
  })

}


