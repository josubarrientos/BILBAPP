/*
 * $Id: functions.js Oct 9, 2016 9:47:15 AM tta1617$
 * 
 * Copyright (C) 2016 Maider Huarte Arrayago
 * 
 * This file is part of TTA1617_LS-EX_08v5_www.zip.
 * 
 * TTA1617_LS-EX_08v5_www.zip is based on templates by Eclipse.org - Thym and it is intended
 * for learning purposes only.
 *     margin-top: -50px;
    margin-left: -125px;
    width: 250px;
    height: 100px;
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

function language(lang) {
	langua=$(lang).attr("id");
	//alert(langua);
	$(".banderas").hide();
	$("#instruc-1").show();
	page_creation();

	$('.star-group').raty({
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

