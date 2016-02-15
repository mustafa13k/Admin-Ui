$(function(){
	$('#side_open').on('click', function() {
		$('#sub_menu').toggleClass('sub_open');
	});

	$('#header-open').on('click',function(){
		$('#header').toggleClass('sub_open');
	});


	if($('html').attr('id') == "events"){
			var cal = $('#calendar').fullCalendar({
				buttonText:{
					prev:'&#210',
					next:'&#213'
				},
				header:{
					left:'prev',
					center:'title',
					right:'next'
				},
				 aspectRatio:1.95,
				 editable:true
				 // height: 600

			});



			$.fn.getMenu = function(){
				$('#sub_menu a').remove();
				var cMonth = cal.fullCalendar('getDate').getMonth()+1;
				var cYear  = cal.fullCalendar('getDate').getFullYear();

				var cMonthFull;
				if(cMonth.toString().length == 2) 
					cMonthFull = cMonth 
				else 
					cMonthFull = '0'+cMonth

				var found = $.grep(file,function(obj){
					//console.log(obj.menu); //console.log("" + cMonth+cYear+"")
					return obj.menu === "" + cMonth+cYear + "";
				});

				found.sort(function(a,b){
					return a.start.getDate() - b.start.getDate();
				});
				//console.log(found);
				$.each(found, function(index, obj) {
					var cDay = obj.start.getDate();
					var cDayFull;
					if(cDay.toString().length == 2) 
						cDayFull = cDay;
					else 
						cDayFull = '0'+cDay;
					$('#sub_menu').append('<a href="'+obj.url+'"><strong>'+obj.title+' '+cDayFull+'-' + cMonthFull + '-' + cYear+'</strong><p>' + obj.description + '</p></a>');
				});
			}

			$.fn.windowCheck = function(){
				var ww = $(window).width();
				if(ww > 650)
					cal.fullCalendar('changeView','month');
				else if(ww < 650 && ww > 450)
					cal.fullCalendar('changeView','basicWeek');
				else if(ww < 450)
					cal.fullCalendar('changeView','basicDay');
			}

			$(window).on('resize',function(){
				$().windowCheck();
			});

			var file;
			$.getJSON('../json/events.php', function(data) {
					/*optional stuff to do after success */
				file = data;
				cal.fullCalendar('addEventSource',data);
				$().getMenu();
				$().windowCheck();
			});

			$('.fc-button-prev, .fc-button-next').on('click' ,function(){
				$().getMenu();
			});
	}

	$('#addme').on('click',function(){
		$(this).after('<a href=""><img src="event.png" alt="Persons Name"><p><strong>Jesse Walker</strong><br>1 minute ago</p></a>')
	});


	if($('body').attr('id') == "dashboard"){
		
		$.getJSON('../json/graph.php', function(info) {
			var data = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						fillColor : "rgba(244,211,122,.1)", //Transparent Yellow
						strokeColor: "#898989", //Gray
						pointColor: "#f4d37a", //yellow
						pointStrokeColor:"#fff",
						data:info[0].info
					}

				]
			}

			var context  = $('#graph').get(0).getContext("2d");
			var options =  {bezierCurve : false, scaleFontStyle:"bold",scaleFontSize:14};
			new Chart(context).Line(data,options);

			var contextM  = $('#graphM').get(0).getContext("2d");
			new Chart(contextM).Line(data,options);

			var contextS  = $('#graphS').get(0).getContext("2d");
			new Chart(contextS).Line(data,options);
		});

		$.getJSON('../json/events.php', function(data) {
			for(i=0;i<3;i++){
				console.log(data);
			 	$('.ui_navlist').append('<li><a href=' +data[i].url +'><img src="small_profile.jpg" width="63" height="63" alt="Leopard icon"/><p><strong>'+data[i].title+'</strong><br>'+data[i].description+'</p></a></li>');
			}
		});
	}
	
	
});
	