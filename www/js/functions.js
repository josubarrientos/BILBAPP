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
	page_creation();
	
	window.location.href = "#instruction-page-2";
	
	//$("#instruction-page-2")
	
	//$("#instruction-page-2").show();
	
	$('.star-group').raty({
		  readOnly:  true,
		  start:     3
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