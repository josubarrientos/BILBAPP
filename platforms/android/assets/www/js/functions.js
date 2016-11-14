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
	$(".banderas").hide();
	page_creation();
	
	window.location.href = "#instruction-page-1";
	
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
	
	$('.starrr-puntua').starrr({
		change: function(e, value){
			//alert('new rating is ' + value + " " +$( this ).text());
			
			if(value==undefined)//Control para eliminar efecto undefined al repetir valor de puntuacion sobre el mismo elemento
				value=puntuacion_previa;
			
			addPuntuacion($( this ).text(),value);
		    
			puntuacion_previa=value;
		    	
		  }
		})
		
}

function page_creation() {
	
	var instpageDiv_prim;
	for(var i=1;i<=initial_pages.total;i++) {
		instpageDiv_prim=instruct_page_1.create(i);
		$("body").append(instpageDiv_prim); //añadimos el pagediv, con toda la pagina, al DOM
	}
	
	var instpageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		instpageDiv=instruct_page_2.create(i);
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

function querySitiosInfo(i) {
	
	var recuperado = opcionesIniciales["seleccion"];
	var elemento = recuperado[i-1];
	
	var contentDiv='<div data-role="content" id="scrollable-info-'+i+'">';
	
	$.getJSON(appConstants.requestSitiosURL()+"?opcionName="+elemento,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	elemen=field2.sitio;
			            	contentDiv+='<div class="starrr-'+Math.round(field2.puntuacion)+'">'+elemen+'</div>';
				        });
			        });

				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				contentDiv+='</div>';
				
			}
		);
	
	//alert(contentDiv);
	
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
				contentDiv+='<a href="" id="button-mapa-'+i+'" onclick=genMapa("select-1-'+i+'") class="ui-btn ui-icon-location ui-btn-icon-left ui-corner-all">'+traduccion_busqueda[langua]+'</a>';
				contentDiv+='</div>';
				
			}
		);
	
	return contentDiv;
	
}

function genMapa(datos) {
	
	
	var direccion = document.getElementById(datos).value;

	window.location.href = direccion;
	
}

function querySitiosCritica(i) {
	
	var recuperado = opcionesIniciales["seleccion"];
	var elemento = recuperado[i-1];
	
	var contentDiv='<div data-role="content" id="scrollable">';
	
	$.getJSON(appConstants.requestSitiosURL()+"?opcionName="+elemento,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	elemen=field2.sitio;
			            	contentDiv+='<option value="'+elemen+'">'+elemen+'</option>';
				        });
			        });
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				
				contentDiv+='</select>';
				contentDiv+='<a href="" id="button-mapa-'+i+'" onclick=genCriticas("select-2-'+i+'",'+i+') class="ui-btn ui-icon-search ui-btn-icon-left ui-corner-all">'+traduccion_busqueda[langua]+'</a>';
				contentDiv+='</div>';
				
			}
		);
	
	return contentDiv;
	
}

function genCriticas(datos,i) {
	
	var nombreSitio = document.getElementById(datos).value;
	nombreSitioREG = nombreSitio.replace(/ /g,"_"); //Aplicamos REGEX para eliminar espacion de los identificadores
	
	if(id_temporal_critica!=null){//Evaluamos si se ha creado algun scroll de criticas, y si es así se elimina.
		
		var total = "#"+id_temporal_critica;
		
		$(total).remove();
		
	}
	
	id_temporal_critica = "list-opiniones-"+i+"-"+nombreSitioREG;//Se crea identificador temporal para facilitar el borrado de componente
	
	var contentDiv='<div data-role="content" id="list-opiniones-'+i+'-'+nombreSitioREG+'">';
	
	$.getJSON(appConstants.requestCriticasURL()+"?sitioName="+nombreSitio,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	usuario=field2.usuario;
			            	fecha=field2.fecha;
			            	critica=field2.critica;
			            	
			            	contentDiv+='<h4>'+usuario+'</h4><h4>'+fecha+'</h4>';
			            	contentDiv+='<p>'+critica+'</p>';
			            	contentDiv+='<hr>';			            	
				        });
			        });
					
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				contentDiv+='</div>';
				
			}
		);
	
	$("#foro-scroll-"+i+"").append(contentDiv);//Una vez creado el scroll se añade a la pagina
	
}



function addCritica(datos,i) {
	
	var nombreSitio = document.getElementById(datos).value;
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	today = yyyy+'-'+mm+'-'+dd;

	var user=$("#username-"+i+"").val();//coger los valores introducidos por el usuario
	var fecha=today;
	var criticas=$("#usercritica-"+i+"").val();
	
	$("#username-"+i+"").val("")
	$("#usercritica-"+i+"").val("");
	
	if((user!=null&&user!="")&&(fecha!=null&&fecha!="")&&(criticas!=null&&criticas!="")) {
		criticaUsuario.usuario=user;
		criticaUsuario.fecha=fecha;
		criticaUsuario.critica=criticas;
		criticaUsuario.sitio=nombreSitio;
		
		
		//alert("Ha enviar: "+criticaUsuario.usuario+" "+criticaUsuario.fecha+" "+criticaUsuario.critica+" "+criticaUsuario.sitio);
		
			$.post(appConstants.addCriticaURL(),JSON.stringify(criticaUsuario),//Enviar al Servidor el objeto critica,que debe ser convertido a string
				function(data,status) {//Función callback
					if(status=="success"){//Si la HTTP-RESPONSE es OK
						alert("Su opinion se ha añadido");//Indicar al usuario que se ha publicado la opinion
					}
					else {
						alert("NO RESPONSE FROM SERVER");
					}			
				},
				"text"//Content-type esperado en HTTP-RESPONSE: text lo que se espera recibir
			);
	}
	else{
		alert("All fields are required");
	}
	
}

function querySitiosPuntuacion(i) {
	
	var recuperado = opcionesIniciales["seleccion"];
	var elemento = recuperado[i-1];
	
	var contentDiv='<div data-role="content" id="scrollable">';
	
	$.getJSON(appConstants.requestSitiosURL()+"?opcionName="+elemento,
			function(response,status) {
				if(status=="success"){
					$.each(response, function(i, field){
			            $.each(field, function(i, field2){
			            	elemen=field2.sitio;
			            	contentDiv+='<div class="starrr-puntua">'+elemen+'</div>';
				        });
			        });

				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}

				contentDiv+='</div>';
				
			}
		);
	
	return contentDiv;
	
}

function addPuntuacion(datos,i) {
	
	calificacionUsuario.calificacion=i;
	calificacionUsuario.sitio=datos;
	
	$.post(appConstants.addPuntuacionURL(),JSON.stringify(calificacionUsuario),//Enviar al Servidor el objeto calificaicon,que debe ser convertido a string
			function(data,status) {//Función callback
				if(status=="success"){//Si la HTTP-RESPONSE es OK
					alert("Su calificacion se ha añadido");//Indicar al usuario que se ha publicado la opinion
				}
				else {
					alert("NO RESPONSE FROM SERVER");
				}			
			},
			"text"//Content-type esperado en HTTP-RESPONSE: text lo que se espera recibir
		);
	
	regeneradorInfo();
}

function regeneradorInfo() {
	
	var infopageDiv;
	for(var i=1;i<=initial_pages.total;i++) {
		var elemento = "#scrollable-info-"+i;
		$(elemento).remove();
		infopageDiv_part=querySitiosInfo(i);
		element_id="#page-"+i+"-1";
		$(element_id).append(infopageDiv_part); //añadimos el pagediv, con toda la pagina, al DOM
		
	}
	
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

}




