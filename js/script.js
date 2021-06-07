$(document).ready(function(){
	if($(window).width() >= 1580){
	$('.galka').click(function(event){
		$('.g1').toggleClass('g12');
		$('.g2').toggleClass('g22');
		$('.jstop').toggle(function(){
			$('jstop').fadeToggle();
		});
	});
	$('#ssbllka1').click(function(event){
		event.preventDefault();
		$('.x').toggleClass('Blue');
		$('.y').toggleClass('Blue3');
		$('.Dashboard').toggleClass('Blue2');
		$('.menu__span1').toggleClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.cherta').toggleClass('cherta1').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka1').fadeToggle();
		$('.obolochka2').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka2').click(function(event){
		event.preventDefault();
		//$('.fc3e2').toggleClass('fc3e22');
		$('.cherta').toggleClass('cherta2').removeClass('cherta1').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span2').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93.png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka2').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka3').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta3').removeClass('cherta2').removeClass('cherta1').removeClass('cherta4').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span3').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector(2).png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka3').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka4').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta4').removeClass('cherta2').removeClass('cherta3').removeClass('cherta1').removeClass('cherta5').removeClass('cherta6');
		$('.menu__span4').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile(2).png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka4').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka5').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta5').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta1').removeClass('cherta6');
		$('.menu__span5').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span6').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.Dashboard').removeClass('Blue2');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector(3).png');
		$('.fc3e6__img').attr('src','img/settings.png');
		$('.obolochka5').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka2').fadeOut();
		$('.obolochka6').fadeOut();
	});
	$('#ssbllka6').click(function(event){
		event.preventDefault();
		$('.cherta').toggleClass('cherta6').removeClass('cherta2').removeClass('cherta3').removeClass('cherta4').removeClass('cherta5').removeClass('cherta1');
		$('.menu__span6').toggleClass('menu__span');
		$('.menu__span1').removeClass('menu__span');
		$('.menu__span2').removeClass('menu__span');
		$('.menu__span3').removeClass('menu__span');
		$('.menu__span4').removeClass('menu__span');
		$('.menu__span5').removeClass('menu__span');
		$('.x').removeClass('Blue');
		$('.y').removeClass('Blue3');
		$('.fc3e2__img').attr('src','img/Group 93(2).png');
		$('.fc3e3__img').attr('src','img/Vector.png');
		$('.fc3e4__img').attr('src','img/profile.png');
		$('.fc3e5__img').attr('src','img/Vector2.png');
		$('.fc3e6__img').attr('src','img/settings(2).png');
		$('.obolochka6').fadeToggle();
		$('.obolochka1').fadeOut();
		$('.obolochka3').fadeOut();
		$('.obolochka4').fadeOut();
		$('.obolochka5').fadeOut();
		$('.obolochka2').fadeOut();
	});
	$('#Ongoing').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","28px");
		$('#Ongoing').css("color","#5E81F4");
		$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
		$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
	});
	$('#Favorite').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","147px");
		$('#Favorite').css("color","#5E81F4");
		$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
	});
	$('#Complete').click(function(event){
		event.preventDefault();
		$('.cherta222').css("display","block").css("left","273px");
		$('#Complete').css("color","#5E81F4");
		$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
		$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
	});	
	$('.fc3e2').trigger("click");
	$('#alexa').click(function(event){
		event.preventDefault();
	});
	}
	if($(window).width() <= 780 && $(window).width() >= 500){
		$('#Ongoing').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","35px");
			$('#Ongoing').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Favorite').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","147px");
			$('#Favorite').css("color","#5E81F4");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Complete').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","260px");
			$('#Complete').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('.Dashboard').click(function(event){
			$('.x').toggleClass('Blue');
			$('.y').toggleClass('Blue3');
			$('.Dashboard').toggleClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e2__img').click(function(event){		
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93.png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e3__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector(2).png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e4__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile(2).png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e5__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector(3).png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e6__img').on('click',function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings(2).png');
		});
	}
	if($(window).width() <= 375){
		$('#Alexa2').click(function(event){
			$('.jstop').toggle(function(){
				$('jstop').fadeToggle();
			});
			$('.O').toggle(function(event){
				$('O').css("height","0");			
			});
			$('.ohara').toggle(function(event){
				$('ohara').css("height","0");				
			});
			$('nav').toggle(function(event){
				$('nav').css("width","0");
			});
			$('.firstcolumn-3-element').toggle(function(event){
				$('firstcolumn-3-element').css("height","0")				
			});
			$('.Alexa').fadeToggle();
			$('body, head').css("overflow-y","hidden");
			$('.content, .first-column, body, .second-column').css("background","#000");
			$('.imgalexa, .Alexa').css("position","fixed");
			$('.obolochka2').fadeOut();
			$('.imgalexa').fadeIn();
			$('.Alexa').fadeIn();
		});
		$('.imgalexa').click(function(event){
			$('.jstop').toggle(function(){
				$('jstop').fadeToggle();
			});
			$('body, head').css("overflow-y","auto");
			$('.O').toggle(function(event){
				$('O').css("height","0")				
			});
			$('.ohara').toggle(function(event){
				$('ohara').css("height","0")				
			});
			$('nav').toggle(function(event){
				$('nav').css("width","0");
			});
			$('.firstcolumn-3-element').toggle(function(event){
				$('firstcolumn-3-element').css("height","67px")				
			});
			$('.content, .first-column, body').css("background","#FFF");
			$('.second-column').css("background","#f5f5fb");
			$('.imgalexa').css("display","none");
			$('.Alexa').fadeOut();
			$('.obolochka2').fadeIn();
		});

		$('.Dashboard').click(function(event){
			$('.x').toggleClass('Blue');
			$('.y').toggleClass('Blue3');
			$('.Dashboard').toggleClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e2__img').click(function(event){
				
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93.png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');

		});
		$('.fc3e3__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector(2).png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e4__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile(2).png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e5__img').click(function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector(3).png');
			$('.fc3e6__img').attr('src','img/settings.png');
		});
		$('.fc3e6__img').on('click',function(event){
			$('.x').removeClass('Blue');
			$('.y').removeClass('Blue3');
			$('.Dashboard').removeClass('Blue2');
			$('.fc3e2__img').attr('src','img/Group 93(2).png');
			$('.fc3e3__img').attr('src','img/Vector.png');
			$('.fc3e4__img').attr('src','img/profile.png');
			$('.fc3e5__img').attr('src','img/Vector2.png');
			$('.fc3e6__img').attr('src','img/settings(2).png');
			$('.imgalexa').css("transform","translate(260px,-20px)")
		});
		$('#Ongoing').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","35px");
			$('#Ongoing').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Favorite').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","147px");
			$('#Favorite').css("color","#5E81F4");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
			$('#Complete').css("color","rgba(118, 132, 146, 0.8)");
		});
		$('#Complete').click(function(event){
			event.preventDefault();
			$('.cherta222').css("display","block").css("left","260px");
			$('#Complete').css("color","#5E81F4");
			$('#Favorite').css("color","rgba(118, 132, 146, 0.8)");
			$('#Ongoing').css("color","rgba(118, 132, 146, 0.8)");
		});		
	}
});
window.onload = function(){
	document.querySelector('.jskrug').onclick = function() {
		let element1 = document.querySelector('.jskrug');
		let animation1 = element1.animate([
			{transform: 'translate(0)'},
			{transform: 'translate(110px,0)'}
		], 1000);
		animation1.addEventListener('finish',function(){
			element1.style.transform = 'translate(110px,0)';
		});
		let element2 = document.querySelector('.jskrug2');
		let animation2 = element2.animate([
			{transform: 'translate(110px,0)'},
			{transform: 'translate(0)'}
		], 1000);
		animation2.addEventListener('finish',function(){
			element2.style.transform = 'translate(0,0)';
		});
		document.querySelector('.jskrug').style.transform = 'translate(110px,0)';
		document.querySelector('.jskrug2').style.transform = 'translate(0,0)';
		document.querySelector('body').style.background = '#fff';
		document.querySelector('.third-column').style.background = '#FFF';
		document.querySelector('.second-column').style.background = '#f5f5fb';
		document.querySelector('.first-column').style.background = '#FFF';
		var elements = document.getElementsByClassName('upspan');
		for (var i=0; i<elements.length; i++) {
			elements[i].style.color = '#011f3b';
		}
		document.querySelector('.allcourses').style.color = '#011F3B';
		document.querySelector('.Alexa').style.color = '#011F3B';
		document.querySelector('.thirdcolumn-9-element').style.background = 'url("../../img/XMLID 15.png") 176px 63px no-repeat, url("../../img/Mask Group6.png"), #f5f5fb';
		document.querySelector('.downloadohara').style.color = '#000';
		document.querySelector('.firstcolumn-4-element').style.background = '#f5f5fb';
	};
	document.querySelector('.jskrug2').onclick = function() {
		//document.querySelector('.jskrug2').style.transform = 'translate(110px,0)';
		let element2 = document.querySelector('.jskrug2');
		let animation2 = element2.animate([
			{transform: 'translate(0)'},
			{transform: 'translate(110px,0)'}
		], 1000);
		animation2.addEventListener('finish',function(){
			element2.style.transform = 'translate(110px,0)';
		});
		let element1 = document.querySelector('.jskrug');
		let animation1 = element1.animate([
			{transform: 'translate(110px,0)'},
			{transform: 'translate(0)'}
		], 1000);
		animation1.addEventListener('finish',function(){
			element1.style.transform = 'translate(0,0)';
		});
		document.querySelector('body').style.background = '#000';
		document.querySelector('.third-column').style.background = '#000';
		document.querySelector('.second-column').style.background = '#001';
		document.querySelector('.first-column').style.background = '#000';
		var elements = document.getElementsByClassName('upspan');
		for (var i=0; i<elements.length; i++) {
			elements[i].style.color = '#fff';
		}
		document.querySelector('.allcourses').style.color = '#fff';
		document.querySelector('.Alexa').style.color = '#fff';
		document.querySelector('.thirdcolumn-9-element').style.background = 'url("../../img/XMLID 15.png") 176px 63px no-repeat, url("../../img/Mask Group6.png"), #001';
		document.querySelector('.downloadohara').style.color = '#fff';
		document.querySelector('.firstcolumn-4-element').style.background = '#001';
	};
	
		function garland() {
	  let nums = document.getElementById('nums_1').innerHTML
	  if (nums == 1) {
	   document.getElementById('garland').className = 'garland_1';
	   document.getElementById('nums_1').innerHTML = '2'
	  }
	  if (nums == 2) {
	    document.getElementById('garland').className = 'garland_2';
	    document.getElementById('nums_1').innerHTML = '3'
	  }
	  if (nums == 3) {
	    document.getElementById('garland').className = 'garland_3';
	    document.getElementById('nums_1').innerHTML = '4'
	  }
	  if (nums == 4) {
	    document.getElementById('garland').className = 'garland_4';
	    document.getElementById('nums_1').innerHTML = '1'
	  }

	}
	var y=1;	
	document.querySelector('.jskrug3').onclick = function(){
		switch(y){
			case 1:
				setInterval(function() {
					garland();
				}, 600);
				document.querySelector('body').style.background = 'url("../../img/1409518074_575789-1920x1200.jpg")';
				document.getElementById('garland').style.display = 'block';
				document.querySelector('.elka').style.display = 'block';
				document.querySelector('.elka').style.display = 'block';
				/*document.querySelector('.second-column').style.background = 'rgba(255,255,255,0)';
				document.querySelector('.first-column').style.background = 'rgba(255,255,255,0)';
				document.querySelector('.third-column').style.background = 'rgba(255,255,255,0)';*/
				let element1 = document.querySelector('.jskrug3');
				let animation1 = element1.animate([
					{transform: 'translate(0)'},
					{transform: 'translate(110px,0)'}
				], 1000);
				animation1.addEventListener('finish',function(){
					element1.style.transform = 'translate(110px,0)';
				});
				y=0;
				console.log(y);
			break;
			case 0:
				setInterval(function() {
					garland();
				}, 600);
				document.querySelector('body').style.background = '';
				document.getElementById('garland').style.display = 'none';
				document.querySelector('.elka').style.display = 'none';
				let element2 = document.querySelector('.jskrug3');
				let animation2 = element2.animate([
					{transform: 'translate(110px,0)'},
					{transform: 'translate(0)'}
				], 1000);
				animation2.addEventListener('finish',function(){
					element2.style.transform = 'translate(0)';
				});
				y=1;
				console.log(y);
			break;
		}
	};
	document.getElementById('fon1').onclick = function(){
		document.querySelector('body').style.background = "url('../img/171-uyutnyy-teplyy-les.jpg')";
	};
	document.getElementById('fon2').onclick = function(){
		document.querySelector('body').style.background = "url('../img/1613636461_1-p-fon-dlya-prezentatsii-gori-1.jpg')";
	};
	document.getElementById('fon3').onclick = function(){
		document.querySelector('body').style.background = "url('../img/1586161791_5-p-foni-dlya-rieltorskikh-saitov-13.jpg')";
	};
	document.getElementById('fon4').onclick = function(){
		document.querySelector('body').style.background = "url('../img/ozero-voda-glad-derevyannyj-mostik-tablichka-osen-derevya-otrazhenie-nebo-tuchi.jpg')";
	};
	document.getElementById('fon5').onclick = function(){
		document.querySelector('body').style.background = "url('../img/1613666350_93-p-fon-dlya-prezentatsii-reka-111.jpg')";
	};
	document.getElementById('fon6').onclick = function(){
		document.querySelector('body').style.background = "url('../img/1334160481_abstraktnye-oboi-29.jpg')";
	};
}
