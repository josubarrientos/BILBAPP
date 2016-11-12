/*
 * 
 * Copyright (C) 2016 Josu Barrientos Bahamonde
 * 
 * 
 * BILBAPP is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * BILBAPP is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

function language(lang) {
	langua=$(lang).attr("id");
	//alert(langua);
	$(".banderas").hide();
	//querySitios();
	page_creation();
	
	window.location.href = "#instruction-page-2";
	
	$('.starrr-0').starrr({
		readOnly: true,
		rating: 0
	});
	
	$('.starrr-1').starrr({
		readOnly: true,
		rating: 1
	});
	
	$('.starrr-2').starrr({
		readOnly: true,
		rating: 2
	});
	
	$('.starrr-3').starrr({
		readOnly: true,
		rating: 3
	});
	
	$('.starrr-4').starrr({
		readOnly: true,
		rating: 4
	});
	
	$('.starrr-5').starrr({
		readOnly: true,
		rating: 5
	});
		
	$('.star-group-dina').raty({
		  click: function(score, evt) {
		    alert('ID: ' + this.attr('id') + '\nscore: ' + score + '\nevent: ' + evt);
		  }
		});
}

function instruc() {
	
	$("#instruc-1").hide();
	$("#page-home").show();
	
}

function page_creation() {
	
	var instpageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		instpageDiv=instruct_page.create(i);
		$("body").append(instpageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var homepageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		homepageDiv=home_page.create(i);
		$("body").append(homepageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	
	var pageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		pageDiv=page.create(i);
		$("body").append(pageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var infopageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		infopageDiv=info_page.create(i);
		$("body").append(infopageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var mappageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		mappageDiv=map_page.create(i);
		$("body").append(mappageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var exppageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		exppageDiv=exp_page.create(i);
		$("body").append(exppageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var forumpageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		forumpageDiv=forum_page.create(i);
		$("body").append(forumpageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var califpageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		califpageDiv=calif_page.create(i);
		$("body").append(califpageDiv); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
}

function opinionFunction1(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    //alert("User name "+x);
    //alert("Uer opiion "+y);

    //var elemento = $('<p>Nuevo</p>');
    //$('#list-opiniones-4').append(elemento);
	
}

function opinionFunction1(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;

    $('#list-opiniones-1').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');    
	
}

function opinionFunction2(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    
	$('#list-opiniones-2').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function opinionFunction3(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    
	$('#list-opiniones-3').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function opinionFunction4(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    
	$('#list-opiniones-4').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function opinionFunction5(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
	
	$('#list-opiniones-5').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function opinionFunction6(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    
	$('#list-opiniones-6').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function opinionFunction7(form) {
	var x = form.userName.value;
	var y = form.userOpin.value;
    
	$('#list-opiniones-7').append('<h4>'+x+'</h4>'+'<p>'+y+'</p>'+'<hr>');
	
}

function querySitiosInfo(i) {
	
	var recuperado = opcionesIniciales["seleccion"];
	var elemento = recuperado[i-1];
	
	var contentDiv='<div data-role="content" id="scrollable">';
	
	$.getJSON(appConstants.requestSitiosURL()+"?opcionName="+elemento,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	elemen=field2.sitio;
			            	//contentDiv+='<div>'+elemen+'  '+field2.puntuacion+'/5<br></div>';
				            //contentDiv+='<div class="star-group" data-rating="4">'+elemen+'<br></div>';
			            	contentDiv+='<div class="starrr-'+field2.puntuacion+'">'+elemen+'</div>';
				        });
			        });
					
					//listado=JSON.stringify(response, null, 2);
					//alert(listado);
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				contentDiv+='</div>';
				
			}
		);
	
	return contentDiv;
	
}

function querySitiosMapa(i) {
	
	var recuperado = opcionesIniciales["seleccion"];
	var elemento = recuperado[i-1];
	
	var contentDiv='<div data-role="content" id="scrollable">';
	
	$.getJSON(appConstants.requestSitiosURL()+"?opcionName="+elemento,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	elemen=field2.sitio;
			            	contentDiv+='<option value="'+field2.direccion+'">'+elemen+'</option>';
				        });
			        });
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				
				contentDiv+='</select>';
				//contentDiv+='<a href="" id="button-1" data-rel="external" class="ui-btn ui-icon-location ui-btn-icon-left ui-corner-all">SEARCH</a>';
				contentDiv+='<a href="" id="button-mapa-'+i+'" onclick=genMapa("select-1-'+i+'") class="ui-btn ui-icon-location ui-btn-icon-left ui-corner-all">SEARCH</a>';
				contentDiv+='</div>';
				
			}
		);
	
	return contentDiv;
	
}

function genMapa(datos) {
	
	alert(datos);
	
	var direccion = document.getElementById(datos).value;

	
	//alert(direccion);
	
	window.location.href = direccion;
	
}




