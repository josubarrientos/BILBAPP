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

var appConstants = {
	serverURL: "http://192.168.0.23:8080/BILBAPP_SERVER/",
	requestSitiosURL: function() {
		return this.serverURL+"rest/Bilbapp/requestSitios";
	},
	requestCriticasURL: function() {
		return this.serverURL+"rest/Bilbapp/requestCriticas";
	}
};

var initial_pages = {
	login: null,
	total: 7
};

var opcionesIniciales = {
		seleccion: ["Fiesta","Compras","Restaurantes","Alojamiento","Deportes","Monumentos","Transportes"]
	};

var places = {
		euskadi: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		galicia: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		catalunia: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		spain: ["Bares","Compras","Restaurantes","Hostales","Deportes","Monumentos","Transportes"],
		england: ["Bars","Shopping","Restaurants","Inns","Sports","Monuments","trasnports"],
		france: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"]
	};

var instrucciones = {
		euskadi: ["Elementu lista","Mapak","Itzulpenak","Esperientziak","Berrikuzpenak"],
		galicia: ["Elementu lista","Mapak","Itzulpenak","Esperientziak","Berrikuzpenak"],
		catalunia: ["Elementu lista","Mapak","Itzulpenak","Esperientziak","Berrikuzpenak"],
		spain: ["Lista de elementos","Mapas","Traducciones","Experiencias Compartidas","Opiniones"],
		england: ["Elemment LIst","Maps","Translations","Experiences","Reviews"],
		france: ["Elementu lista","Mapak","Itzulpenak","Esperientziak","Berrikuzpenak"]
	};

var expresiones = {	
		listado: [
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			},
			{
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				galicia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				catalunia: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				spain: [["Cuanto cuesta?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]],
				england: [["How much is it?","Cuanto cuesta?","Zenbat Kostatzen du?"],["how1?","Cuanto?","Zenat1?"]],
				france: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Zenbat1?","Cuanto?","Zenat1?"]]
			}
		]
	};

var results = {
	login: null,
	corrects: 0,
	answered: 0
};

//Instrucciones

var instruct_page = {
		create: function() {
			var instruc = instrucciones[langua];
			var pageDiv=$('<div data-role="page" data-dialog="true" data-close-btn="none" id="instruction-page-2"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Bilbapp</h1>'+
				'</div>';
			
			var contentDiv=
				'<div data-role="content">'+
					'<div class="ui-grid-a">'+
						'<div class="ui-block-a" style="width:10%;text-align:center;height:50px"><i class="fa fa-info fa-3x" style="line-height:50px"></i></div>'+
						'<div class="ui-block-b" style="width:90%;text-align:center;height:50px;line-height: 50px">'+instruc[0]+'</div>'+
						'<div class="ui-block-a" style="width:10%;text-align:center;height:50px"><i class="fa fa-map fa-3x" style="line-height:50px"></i></div>'+
						'<div class="ui-block-b" style="width:90%;text-align:center;height:50px;line-height: 50px">'+instruc[1]+'</div>'+
						'<div class="ui-block-a" style="width:10%;text-align:center;height:50px"><i class="fa fa-comments fa-3x" style="line-height:50px"></i></div>'+
						'<div class="ui-block-b" style="width:90%;text-align:center;height:50px;line-height: 50px">'+instruc[2]+'</div>'+
						'<div class="ui-block-a" style="width:10%;text-align:center;height:50px"><i class="fa fa-align-justify fa-3x" style="line-height:50px"></i></div>'+
						'<div class="ui-block-b" style="width:90%;text-align:center;height:50px;line-height: 50px">'+instruc[3]+'</div>'+
						'<div class="ui-block-a" style="width:10%;text-align:center;height:50px"><i class="fa fa-star fa-3x" style="line-height:50px"></i></div>'+
						'<div class="ui-block-b" style="width:90%;text-align:center;height:50px;line-height: 50px">'+instruc[4]+'</div>'+
					'</div>'+
					'<a href="#page-home" id="button-1" class="ui-btn ui-corner-all ui-btn-b">OK</a>'+
				'</div>';

			
			pageDiv.append(headerDiv,contentDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};


//Home-Page

var home_page = {
		create: function() {
			var pageDiv=$('<div data-role="page" id="page-home" data-theme="a">');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="text-align:center">BILBAPP</h1>'+
				'</div>';
			
			var contentDiv=
				'<div data-role="content" style="position:absolute;width:100%">'+
					'<div class="ui-grid-c">'+		
						'<br><br><br><br><br><br>'+
						'<div class="ui-block-a" style="width:18%;text-align:center;height:50px"><a href="#page-1" id="home-page-1"><i class="fa fa-glass fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-b" style="width:25%;text-align:center;height:50px"><a href="#page-2" id="home-page-2"><i class="fa fa-shopping-cart fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-c" style="width:25%;text-align:center;height:50px"><a href="#page-3" id="home-page-3"><i class="fa fa-cutlery fa-4x" style="line-height:50px"></i></a></div>'+		
						'<div class="ui-block-d" style="width:25%;text-align:center;height:50px"><a href="#page-4" id="home-page-4"><i class="fa fa-bed fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-a" style="width:93%;text-align:center;height:150px"><img id="logo-2" alt="" src="img/bilbao.jpg"/></div>'+
						'<div class="ui-block-b" style="width:0%;text-align:center;height:150px"></div>'+
						'<div class="ui-block-c" style="width:0%;text-align:center;height:150px"></div>'+
						'<div class="ui-block-d" style="width:0%;text-align:center;height:150px"></div>'+
						'<div class="ui-block-a" style="width:26%;text-align:center;height:60px"><a href="#page-5" id="home-page-5"><i class="fa fa-futbol-o fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-b" style="width:33%;text-align:center;height:60px"><a href="#page-6" id="home-page-6"><i class="fa fa-building-o fa-4x" style="line-height:50px"></i></a></div>'+					
						'<div class="ui-block-c" style="width:33%;text-align:center;height:60px"><a href="#page-7" id="home-page-7"><i class="fa fa-subway fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-d" style="width:0%;text-align:center;height:60px"></div>'+
					'</div>'+
				'</div>';

			
			pageDiv.append(headerDiv,contentDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};



/////Option Lists

var page = {
	create: function(i) {
		var pageDiv=$('<div data-role="page" id="page-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" data-position="fixed" >'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Bilbapp</h1>'+
			'</div>';
		
		var contentDiv=
			'<div data-role="content">'+
				'<ul data-role="listview" id="page-'+i+'-0" data-inset="true">'+
					'<li data-icon="false"><a href="#page-'+i+'-1"><i class="fa fa-info fa-3x"></i></a></li>'+
					'<li data-icon="false"><a href="#page-'+i+'-2"><i class="fa fa-map fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page-'+i+'-3"><i class="fa fa-comments fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page-'+i+'-4"><i class="fa fa-align-justify fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page-'+i+'-5"><i class="fa fa-star fa-3x" style="line-height:50px"></i></a></li>'+
				'</ul>'+				
			'</div>';
		
		var footerDiv=
			'<div data-role="footer" data-position="fixed">'
				'<a href="#home-page" id="home-button" class="ui-btn ui-corner-all">Home</a>'
			'</div>';
		
		pageDiv.append(headerDiv,contentDiv,footerDiv);
		
//		alert("create2");
		return pageDiv;
	},

};

/////////Información

var info_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-1"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			var contentDiv = querySitiosInfo(i);
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);

			return pageDiv;
		}

	};


/////////Mapa

var map_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-2"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			var contentDiv=
				'<div class="ui-field-contain">'+
				'<label for="select-1">Select:</label>'+
				'<select name="select-1" id="select-1-'+i+'" data-theme="a">';
				contentDiv += querySitiosMapa(i);
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};

/////////Expresiones

var exp_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-3"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			listado = expresiones.listado[i-1];
			lista_idioma = listado[langua];
			
			var contentDiv='<div data-role="content">'+
			'<div data-role="collapsible-set" id="collapsible-set-1">';
			for (cont=0; cont<lista_idioma.length; cont++) {
				
				contentDiv += '<div data-role="collapsible">';
				
				elemento = lista_idioma[cont];
				contentDiv += '<h4>'+elemento[0]+'</h4>';
				contentDiv += '<p>Español: '+elemento[1]+'<br>Español: '+elemento[2]+'</p>';
				contentDiv += '</div>';
			}
			contentDiv += '</div>';
			
			contentDiv += '</div>';
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};

//Foro

var forum_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-4"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			var contentDiv=
				'<div data-role="content" id="list-opiniones-'+i+'">'+
				'<h4>user1</h4>'+
				'<p>Todo muy bien</p>'+
				'<hr>'+
				'<h4>user2</h4>'+
				'<p>Todo malisiko</p>'+
				'<hr>'+
			'</div>';
				
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'+
					'<form name="opiForm'+i+'" action="" method="GET">'+
					'Introduce tu opinión <br>'+
					'User Name<input type="text" name="userName" value=""><p>'+
					'Opinion <input type="text" name="userOpin" value=""><p>'+
					'<input type="button" name="button" value="Click" onClick="opinionFunction'+i+'(this.form)">'+
					'</form>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};

//Calificaciones

var calif_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-5"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			var contentDiv=
				'<div data-role="content">'+
				'<div id="star-1" class="star-group-dina">Zara<br></div>'+
				'<div id="star-2" class="star-group-dina">Carrefous<br></div>'+
				'<div id="star-3" class="star-group-dina">otros<br></div>'+
				'<div id="star-4" class="star-group-dina">nombrelargo<br></div>'+
			'</div>';
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		},

	};

