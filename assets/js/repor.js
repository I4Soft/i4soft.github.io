$("document").ready(function(){
   	
	$.getJSON("../data/repor.json", function(result){
		
        var weeks = result.weekly;
        		
        $.each(weeks, function(i, member){			
				
            var html = 
                '<div>' +
                    '<b>Meeting #'+member.number+' </b> '+member.date+' </br>' +
                    '<b>Presentation:</b> '+member.title+' | <a href="'+member.link+'" target="_blank">Donwload</a> </br>' +
                    '<b>Speaker:</b> '+member.speaker+' <hr />' +
                '</div>' 
				
            $("#weekly").append(html);
			
        });

        var others = result.other;
		
        $.each(others, function(i, member){			
				
            var html = 
                '<div>' +
                    '<b>'+member.description+' </b> '+member.date+' </br>' +
                    '<b>Presentation:</b> '+member.title+' | <a href="'+member.link+'" target="_blank">Donwload</a> </br>' +
                    '<b>Speaker:</b> '+member.speaker+' <hr />' +
                '</div>' 
				
            $("#other").append(html);
			
        });

        var papers = result.paper;
		
        $.each(papers, function(i, member){			
				
            var html = 
                '<div>' +
                    '<b>'+member.in+'  </b> '+member.date+' </br>' +
                    '<b>Presentation:</b> '+member.title+' | <a href="'+member.link+'" target="_blank">Donwload</a> </br>' +
                    '<b>Speaker:</b> '+member.speaker+' <hr />' +
                '</div>' 
				
            $("#paper").append(html);
			
        });

    });
	
});