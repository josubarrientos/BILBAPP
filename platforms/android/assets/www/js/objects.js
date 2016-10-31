/*
 * $Id: objects.js Oct 9, 2016 9:45:18 AM tta1617$
 * 
 * Copyright (C) 2016 Maider Huarte Arrayago
 * 
 * TTA1617_LS-EX_08v5_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 * 
 * TTA1617_LS-EX_08v5_www.zip is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * TTA1617_LS-EX_08v5_www.zip is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details
 * <http://www.gnu.org/licenses/>.
 */

var initial_pages = {
	login: null,
	total: 7,
	test: [
	       {
	    	   	question: "Bla bla bla?",
	    	   	resp: [
	    	          "Response 0-A",
	    	          "Response 0-B",
	    		      "Response 0-C",
	    		      "Response 0-D"
	    		      ],
	    		correct: "1",
	    		adv: [
	    	          "audio/ADV_0_0.ogg",
	    	          "",
	    		      "Advice 0-C",
	    		      "Advice 0-D"
	    		     ]
	       },
	       {
	    	   	question: "Ble ble ble?",
	    	   	resp: [
	    	          "Response 1-A",
	    	          "Response 1-B",
	    		      "Response 1-C",
	    		      "Response 1-D"
	    		      ],
	    		correct: "3",
	    		adv: [
	    	          "video/ADV_1_0.mp4",
	    	          "Advice 1-B",
	    		      "Advice 1-C",
	    		      ""
	    		     ]	      
	       },
	       {
	    	   	question: "Bli bli bli?",
	    	   	resp: [
	    	          "Response 2-A",
	    	          "Response 2-B",
	    		      "Response 2-C",
	    		      "Response 2-D"
	    		      ],
	    		correct: "0",
	    		adv: [
	    	          "",
	    	          "img/ADV_2_1.jpg",
	    		      "img/ADV_2_2.png",
	    		      "Advice 2-D"
	    		     ]
	       }
	 ]
};

var places = {
		euskadi: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		galicia: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		catalunia: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"],
		spain: ["Bares","Compras","Restaurantes","Hostales","Deportes","Monumentos","Transportes"],
		england: ["Bars","Shopping","Restaurants","Inns","Sports","Monuments","trasnports"],
		france: ["Bar","Erosketak","Restaurantea","Aterpea","Kirola","Monumentuak","Garraioak"]
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
	load: function(i) {
//		alert("load1");
		
     	$("#question-"+i).text("QUESTION "+i+": "+tests.test[i].question);
    	
     	$("label[id|='label-radio-choice-"+i+"']").each(
     			function(index) {     				
     				$(this).text(tests.test[i].resp[index]);     				
    		    }
     	);
     	
     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
//			alert("load7");
 	}
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
			
			var contentDiv=
				'<div data-role="content" id="scrollable">'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
				'sdfgsdfgsd<br/>'+
				'xcbxcvb<br/>'+
				'zxcbad4256<br/>'+
				'sdfgcvbertw554e62<br/>'+
				'kjdfahdf7899845<br/>'+
				'row asfdasd<br/>'+
				'asdfasd<br/>'+
			'</div>';
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
//			alert("create2");
			return pageDiv;
		},
		
		load: function(i) {
//			alert("load1");
			
	     	$("#question-"+i).text("QUESTION "+i+": "+tests.test[i].question);
	    	
	     	$("label[id|='label-radio-choice-"+i+"']").each(
	     			function(index) {     				
	     				$(this).text(tests.test[i].resp[index]);     				
	    		    }
	     	);
	     	
	     	$("#prev-"+i).attr("href","#page-"+(i-1));
	     	$("#next-"+i).attr("href","#page-"+(i+1));
//				alert("load7");
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
				'<div data-role="content" id="google-map">'+
				'<h1>MAPA</h1>'+
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
				'<div data-role="content" id="google-map">'+
				'<h1>FORO</h1>'+
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
				'<div id="star-1" class="star-group">Zara<br></div>'+
				'<div id="star-2" class="star-group">Carrefous<br></div>'+
				'<div id="star-3" class="star-group">otros<br></div>'+
				'<div id="star-4" class="star-group">nombrelargo<br></div>'+
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

