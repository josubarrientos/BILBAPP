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
	var langua=$(lang).attr("id");
	alert(langua);
	$(".banderas").hide();
	$("#instruc-1").show();
}

function instruc2() {
	
	$("#instruc-1").hide();
	$("#instruc-2").show();
	
}

function instruc3() {
	
	$("#instruc-2").hide();
	$(".inicio").show();
	
}


function check(i) {
//	alert("check 1");
	
	results.answered++;
	
	var answer=$("input[name='radio-choice-"+i+"']:checked").val();
	
	if(answer==tests.test[i].correct) {
		alert("CORRECT");
		results.corrects++;
	}
	else {
		alert("WRONG");
		$("#button-"+i+"-2").attr("onclick","advice("+i+","+answer+")");
		$("#button-"+i+"-2").css("display","block");
	}
	
	$(".res-1").text(""+results.corrects+"/"+results.answered);
	$(".res-2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	
	$("label[id|='label-radio-choice-"+i+"']").each(
		function(index) {
			if(index!=tests.test[i].correct) { //This can be done because of appropriate "value" attributes and label-radio-choice id attributes
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-"+i+"-1").attr("onclick","");
//	alert("check 7");
}
//pI: numero de pantalla / qI: nuemro de conseojo
function advice(pI,qI) {
	var adv=tests.test[pI].adv[qI];
	if(adv.endsWith("ogg")||adv.endsWith("mp3")){
		$("#src-audio-"+pI).attr("src",adv);
		$("#audio-"+pI).trigger("load");//provocamos que se cargue el fichero
		$("#audioAdvice-"+pI).show();//enseñamos el elemento en pantalla
		$("#audio-"+pI).trigger("play");
	}
	else{
		if(adv.endsWith("mp4")){
			//set video URL
			$("#src-video-"+pI).attr("src",adv);
			//load video
			$("#video-"+pI).trigger("load");
			//show video
			$("#videoAdvice-"+pI).show();
			//play video
			$("#video-"+pI).trigger("play");
		}
		else{
			if(adv.endsWith("jpg")||adv.endsWith("png")){
				$("#image-"+pI).attr("src",adv);
				$("#imageAdvice-"+pI).show();
			}
			else{
				alert("ADVICE: "+adv);
			}
		}
	}
		
}
