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

var results = {
	login: null,
	corrects: 0,
	answered: 0
};

var page = {
	create: function(i) {
		alert("create1 "+i);
		var pageDiv=$('<div data-role="page" id="page-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" data-position="fixed" >'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Bilbapp</h1>'+
			'</div>';
		
		var contentDiv=
			'<div data-role="content">'+
				'<ul data-role="listview" id="page-'+i+'-0" data-inset="true">'+
					'<li data-icon="false"><a href="#page'+i+'-1"><i class="fa fa-info fa-3x"></i></a></li>'+
					'<li data-icon="false"><a href="#page'+i+'-2"><i class="fa fa-map fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page'+i+'-3"><i class="fa fa-comments fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page'+i+'-4"><i class="fa fa-align-justify fa-3x" style="line-height:50px"></i></a></li>'+
					'<li data-icon="false"><a href="#page'+i+'-5"><i class="fa fa-star fa-3x" style="line-height:50px"></i></a></li>'+
				'</ul>'+				
			'</div>';
		
		var footerDiv=
			'<div data-role="footer">'
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
