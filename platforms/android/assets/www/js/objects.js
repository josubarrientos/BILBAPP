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
	serverURL: "http://u017633.ehu.eus:28080/BILBAPP_SERVER/",
	requestSitiosURL: function() {
		return this.serverURL+"rest/Bilbapp/requestSitios";
	},
	requestCriticasURL: function() {
		return this.serverURL+"rest/Bilbapp/requestCriticas";
	},
	addCriticaURL: function() {
		return this.serverURL+"rest/Bilbapp/addCriticas";
	},
	addPuntuacionURL: function() {
		return this.serverURL+"rest/Bilbapp/addPuntuacion";
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
		euskadi: ["Festa","Erosketak","Jatetxeak","Ostatua","Kirola","Monumentuak","Garraioak"],
		galicia: ["Festa","Compras","Restaurante","Aloxamento","Deporte","Monumento","Transporte"],
		catalunia: ["partit","compres","restaurant","Allotjament","Esport","Monuments","Transport"],
		spain: ["Fiesta","Compras","Restaurantes","Alojamiento","Deportes","Monumentos","Transportes"],
		england: ["Party","Shopping","Restaurants","Inns","Sports","Monuments","Transportation"],
		france: ["Fête","Courses","Restaurant","Courses","Sport","Monument","Transport"]
	};

var instrucciones_generales_titul = {
		euskadi: "Argibideak",
		galicia: "Instrucións",
		catalunia: "Instruccions",
		spain: "Instrucciones",
		england: "Instructions",
		france: "Instructions"
	};

var traduccion_actualizar = {
		euskadi: "Eguneratu",
		galicia: "Actualizar",
		catalunia: "Actualitzar",
		spain: "Actualizar",
		england: "Update",
		france: "Mettre à jour"
	};

var traduccion_publicar = {
		euskadi: "Zabaldu",
		galicia: "Publicar",
		catalunia: "Publicar",
		spain: "Publicar",
		england: "Publish",
		france: "Publier"
	};

var traduccion_busqueda = {
		euskadi: "Bilatu",
		galicia: "Busca",
		catalunia: "Buscar",
		spain: "Buscar",
		england: "Search",
		france: "Recherche"
	};

var instrucciones_generales_content = {
		euskadi: "Sakatu interesatzen zaizun logoa gai horri buruzko informazio gehiago izateko.",
		galicia: "Prema nun logotipo para aprender sobre o mesmo.",
		catalunia: "Pinxa en un dels logos d'interès per obtenir informació sobre el mateix.",
		spain: "Pincha en uno de los logos de interés para obtener información sobre el mismo.",
		england: "Click on one of the logos of interest to obtain information of the same.",
		france: "Cliquez sur un des logos d'intérêt pour obtenir des informations sur elle."
	};

var instrucciones = {
		euskadi: ["Elementu lista","Mapak","Itzulpenak","Esperientziak","Berrikuzpenak"],
		galicia: ["Lista de elementos","Mapas","Traducións","Experiencias","Comentarios"],
		catalunia: ["Llista d'elements","Mapes","Traduccions","Experiències","Opinions"],
		spain: ["Lista de elementos","Mapas","Traducciones","Experiencias","Opiniones"],
		england: ["Item List","Maps","Translations","Experiences","Reviews"],
		france: ["Liste des articles","Cartes","Traductions","Expériences","Avis"]
	};

var expresiones = {	
		listado: [
			{//Fiesta
				euskadi: [["Non topa dezaket diskoteka?","¿Dónde puedo encontrar la discoteca?","Non topa dezaket diskoteka?"],["Zein musika mota entzuten da diskotekan?","¿Qué tipo de música ponen en la discoteca?","Zein musika mota entzuten da diskotekan?"],["Badago garraiorik diskotekaren inguruan?","¿Hay transporte cerca de la discoteca?","Badago garraiorik diskotekaren inguruan?"],["Nolakoa da diskotekaren giroa?","¿Cómo es el ambiente de la discoteca?","Nolakoa da diskotekaren giroa?"],["Zenbat ordaindu behar da diskotekara sartzeko?","¿Cuánto cuesta la entrada de la discoteca?","Zenbat ordaindu behar da diskotekara sartzeko?"],["Non erosi ahal dut nire sarrera?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]],
				galicia: [["Onde está a discoteca?","¿Dónde puedo encontrar la discoteca?","Non topa dezaket diskoteka?"],["Qué tipo de música é nesa discoteca/ nese club ?","¿Qué tipo de música ponen en la discoteca?","Zein musika mota entzuten da diskotekan?"],["Podo econtrar transporte preto do discoteca ?","¿Hay transporte cerca de la discoteca?","Badago garraiorik diskotekaren inguruan?"],["Como é a atmosfera deste club","¿Cómo es el ambiente de la discoteca?","Nolakoa da diskotekaren giroa?"],["canto diñeiro é a entrada ao disco?","¿Cuánto cuesta la entrada de la discoteca?","Zenbat ordaindu behar da  diskotekara sartzeko?"],["Onde podo mercar un billete para a discoteca?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]],
				catalunia: [["On puc trobar la discoteca?","¿Dónde puedo encontrar la discoteca?","Non topa dezaket diskoteka?"],["Quina mena de música posen a la discoteca?","¿Qué tipo de música ponen en la discoteca?","Zein musika mota entzuten da diskotekan?"],["Hi ha transport a prop de la discoteca?","¿Hay transporte cerca de la discoteca?","Badago garraiorik diskotekaren inguruan?"],["Com és lŽambient de la discoteca?","¿Cómo es el ambiente de la discoteca?","Nolakoa da diskotekaren giroa?"],["Quant costa lŽentrada de la discoteca?","¿Cuánto cuesta la entrada de la discoteca?","Zenbat ordaindu behar da  diskotekara sartzeko?"],["A on puc aconseguir la meua entrada?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]],
				spain: [["Dónde puedo encontrar la discoteca?","¿Dónde puedo encontrar la discoteca?","Non topa dezaket diskoteka?"],["¿Qué tipo de música ponen en la discoteca?","¿Qué tipo de música ponen en la discoteca?","Zein musika mota entzuten da diskotekan?"],["¿Hay transporte cerca de la discoteca?","¿Hay transporte cerca de la discoteca?","Badago garraiorik diskotekaren inguruan?"],["¿Cómo es el ambiente de la discoteca?","¿Cómo es el ambiente de la discoteca?","Nolakoa da diskotekaren giroa?"],["¿Cuánto cuesta la entrada de la discoteca?","¿Cuánto cuesta la entrada de la discoteca?","Zenbat ordaindu behar da  diskotekara sartzeko?"],["¿Dónde puedo conseguir mi entrada?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]],
				england: [["Where can I find the X discoteque?","¿Dónde puedo encontrar la discoteca?","Non topa dezaket diskoteka?"],["What type of music can I listen in X discoteque?","¿Qué tipo de música ponen en la discoteca?","Zein musika mota entzuten da diskotekan?"],["Is there transport near the X discoteque?","¿Hay transporte cerca de la discoteca?","Badago garraiorik diskotekaren inguruan?"],["How is the ambience in X discoteque?","¿Cómo es el ambiente de la discoteca?","Nolakoa da diskotekaren giroa?"],["How much does it cost the ticket of the X discoteque?","¿Cuánto cuesta la entrada de la discoteca?","Zenbat ordaindu behar da  diskotekara sartzeko?"],["Where can I buy a ticket?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]],
				france: [["Où je peux trouver la discothèque?","¿Dónde puedo encontrar la discoteca ?","Non topa dezaket  diskoteka?"],["Quel type de musique  il y a en cette discothèque?","¿Qué tipo de música ponen en la discoteca ?","Zein musika mota entzuten da diskotekan?"],["Il y a transport proche a la discothèque?","¿Hay transporte cerca de la discoteca ?","Badago garraiorik  diskotekaren inguruan?"],["Comme est l' environnement de la discothèque?","¿Cómo es el ambiente de la discoteca ?","Nolakoa da  diskotekaren giroa?"],["Combien ça coûte l'entr ée de la discothéque?","¿Cuánto cuesta la entrada de la discoteca ?","Zenbat ordaindu behar da  diskotekara sartzeko?"],["Où je puex obtenir mon entr ée?","¿Dónde puedo conseguir mi entrada?","Non erosi ahal dut nire sarrera?"]]
			},
			{//Compras
				euskadi: [["Non dago  kalea?","¿Dónde está la calle ?","Non dago  kalea?"],["Non dago  denda?","¿Dónde está la tienda ?","Non dago  denda?"],["Zein dendak daude  kalean?","¿Qué tiendas hay en la calle?","Zein dendak daude  kalean?"],["Badago eskaintzaren bat  dendan?","¿Hay alguna oferta en la tienda ?","Badago eskaintzaren bat  dendan?"],["Zenbat balio du ?","¿Cuánto cuesta ?","Zenbat balio du ?"],["Non dago probalekua?","¿Dónde está el probador?","Non dago probalekua?"],["Txartelarekin ordaindu ahal dut?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]],
				galicia: [["Onde está a rúa ?","¿Dónde está la calle ?","Non dago  kalea?"],["Onde está a tienda ?","¿Dónde está la tienda?","Non dago  denda?"],["Que tendas están a na rúa?","¿Qué tiendas hay en la calle?","Zein dendak daude  kalean?"],["hai unha oferta na tenda?","¿Hay alguna oferta en la tienda ?","Badago eskaintzaren bat  dendan?"],["Canto custa?","¿Cuánto cuesta ?","Zenbat balio du ?"],["Onde está o probrador?","¿Dónde está el probador?","Non dago probalekua?"],["Podo pagar coa tarxeta de crédito?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]],
				catalunia: [["A on està el carrer ?","¿Dónde está la calle ?","Non dago  kalea?"],["On està la botiga ?","¿Dónde está la tienda?","Non dago  denda?"],["Quines botigues hi ha al carrer ?","¿Qué tiendas hay en la calle ?","Zein dendak daude  kalean?"],["Hi ha alguna oferta a la botiga?","¿Hay alguna oferta en la tienda ?","Badago eskaintzaren bat  dendan?"],["Quant cota?","¿Cuánto cuesta ?","Zenbat balio du ?"],["A on està el provador?","¿Dónde está el probador?","Non dago probalekua?"],["Pus pagar amb targeta?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]],
				spain: [["¿Dónde está la calle ?","¿Dónde está la calle ?","Non dago  kalea?"],["¿Dónde está la tienda ?","¿Dónde está la tienda?","Non dago  denda?"],["¿Qué tiendas hay en la calle?","¿Qué tiendas hay en la calle ?","Zein dendak daude  kalean?"],["¿Hay alguna oferta en la tienda?","¿Hay alguna oferta en la tienda ?","Badago eskaintzaren bat  dendan?"],["¿Cuánto cuesta ?","¿Cuánto cuesta?","Zenbat balio du ?"],["¿Dónde está el probador?","¿Dónde está el probador?","Non dago probalekua?"],["¿Puedo pagar con tarjeta?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]],
				england: [["Where is the X Street?","¿Dónde está la calle ?","Non dago  kalea?"],["Where is the X shop?","¿Dónde está la tienda ?","Non dago  denda?"],["What shops are in X street?","¿Qué tiendas hay en la calle ?","Zein dendak daude  kalean?"],["Is there any offer in X?","¿Hay alguna oferta en la tienda?","Badago eskaintzaren bat  dendan?"],["How much does it cost?","¿Cuánto cuesta?","Zenbat balio du ?"],["Where is the fitting room?","¿Dónde está el probador?","Non dago probalekua?"],["Can I pay with credit card?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]],
				france: [["Où est la rue ?","¿Dónde está la calle ?","Non dago  kalea?"],["où est cette boutique?","¿Dónde está la tienda ?","Non dago  denda?"],["Quell es boutiques il y a on cette rue?","¿Qué tiendas hay en la calle ?","Zein dendak daude  kalean?"],["Il y a quelques offres dans la boutique?","¿Hay alguna oferta en la tienda ?","Badago eskaintzaren bat  dendan?"],["Combien ça coûte?","¿Cuánto cuesta?","Zenbat balio du ?"],["Où est la cabine d'essayage?","¿Dónde está el probador?","Non dago probalekua?"],["est ce que je peux payer avec la carte de cr édit?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"]]
			},
			{//Restaurantes
				euskadi: [["Non dago  jatetxea?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["Zein jatetxeak daude  kalean?","¿Qué restaurante hay en la calle ?","Zein jatetxeak daude  kalean?"],["Garestia da  jatetxea?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["Ondo jaten da  jatetxean?","¿Se come bien en el restaurante?","Ondo jaten da  jatetxean?"],["Zein janari mota eskaintzen da  jatetxean?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["Zenbat balio du?","¿Cuánto cuesta?","Zenbat balio du?"],["Mina da?","¿Es picante?","Mina da?"],["Goxoa ala gazia da?","¿Es dulce o salado?","Goxoa ala gazia da?"],["Txartelarekin ordaindu ahal dut?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["Kontua ekarri ahal didazu, mesedez?","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]],
				galicia: [["Onde está o restaurante?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["Que restaurante alí na rúa ?","¿Qué restaurante hay en la calle?","Zein jatetxeak daude  kalean?"],["O restaurante é caro?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["Se coma ben no restaurante ?","¿Se come bien en el restaurante?","Ondo jaten da  jatetxean?"],["Que tipo de comida serve o restaurante ?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["Canto custa?","¿Cuánto cuesta?","Zenbat balio du?"],["É picante?","¿Es picante?","Mina da?"],["É dulce ou salado?","¿Es dulce o salado?","Goxoa ala gazia da?"],["Podo pagar coa tarxeta de crédito?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["Me pode levar a conta, por favor","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]],
				catalunia: [["On està el restaurant ?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["Quin restaurant nŽhi ha al carrer?","¿Qué restaurante hay en la calle ?","Zein jatetxeak daude  kalean?"],["És car el restaurant ?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["És menja bé al restaurant ?","¿Se come bien en el restaurante ?","Ondo jaten da  jatetxean?"],["Quina mena de menjar serveix el restaurant?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["Quant costa?","¿Cuánto cuesta?","Zenbat balio du?"],["És picant?","¿Es picante?","Mina da?"],["És dolc o salat?","¿Es dulce o salado?","Goxoa ala gazia da?"],["Puc pagar amb targeta?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["Em podries dur el compte, per favor?","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]],
				spain: [["¿Dónde está el restaurante ?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["¿Qué restaurante hay en la calle ?","¿Qué restaurante hay en la calle ?","Zein jatetxeak daude  kalean?"],["¿Es caro el restaurante ?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["¿Se come bien en el restaurante ?","¿Se come bien en el restaurante?","Ondo jaten da  jatetxean?"],["¿Qué tipo de comida sirve el restaurante ?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["¿Cuánto cuesta?","¿Cuánto cuesta?","Zenbat balio du?"],["¿Es picante?","¿Es picante?","Mina da?"],["¿Es dulce o salado?","¿Es dulce o salado?","Goxoa ala gazia da?"],["¿Puedo pagar con tarjeta?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["¿Me puedes traer la cuenta, por favor?","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]],
				england: [["Where is the X restaurant?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["What restaurant is in the X street?","¿Qué restaurante hay en la calle?","Zein jatetxeak daude  kalean?"],["Is it expensive the X restaurant?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["Is good the food of the X restaurant?","¿Se come bien en el restaurante ?","Ondo jaten da  jatetxean?"],["What kind of food can I find in X restaurant?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["How much does it cost?","¿Cuánto cuesta?","Zenbat balio du?"],["Is it spicy?","¿Es picante?","Mina da?"],["Is it sweet or salad?","¿Es dulce o salado?","Goxoa ala gazia da?"],["Can I pay with card?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["Can you bring me the bill, please?","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]],
				france: [["Où est le restaurant ?","¿Dónde está el restaurante ?","Non dago  jatetxea?"],["Quel restaurant il y a dans la rue?","¿Qué restaurante hay en la calle?","Zein jatetxeak daude  kalean?"],["Est-ce restaurant cher?","¿Es caro el restaurante ?","Garestia da  jatetxea?"],["Mangez-vous bien dans cet restaurant?","¿Se come bien en el restaurante ?","Ondo jaten da  jatetxean?"],["Quel type de nourriture il y a dans cet restaurant?","¿Qué tipo de comida sirve el restaurante ?","Zein janari mota eskaintzen da  jatetxean?"],["Combien ça coûte?","¿Cuánto cuesta?","Zenbat balio du?"],["Cette piquante?","¿Es picante?","Mina da?"],["Est-il sucr é ou salé?","¿Es dulce o salado?","Goxoa ala gazia da?"],["Est-ce que je peux payer avec la carte de crédit?","¿Puedo pagar con tarjeta?","Txartelarekin ordaindu ahal dut?"],["Pouvez-vous me donner l'addit ion, s'il vous plaît?","¿Me puedes traer la cuenta, por favor?","Kontua ekarri ahal didazu, mesedez?"]]
			},
			{//Alojamiento
				euskadi: [["Non dago  kalea?","¿Dónde está la calle ?","Non dago  kalea?"],["Nolakoa da  hotela?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["Gauero, zenbat ordaindu behar da  hotelean?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["Zein hotela gomendatzen didazu?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["Gosaria prezioren barne sartzen da?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["Noiz egiten dira check in eta check off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["Logela bikoitzak dira  hotelean?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["Zer nolako zerbitzua eskaitzen du  hotelak?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["Non dago nire gela?","¿Dónde está mi habitación?","Non dago nire gela?"],["Nondik joan ahal naiz igerilekura?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["Hirian, zein jarduera motak egin ahal dira?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["Harrera-lekua egun osoan irekita al dago?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["Hirian zein monumentuak ikusi ditzaket?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["Nola heldu ahal naiz -ra?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]],
				galicia: [["Onde está a rúa ?","¿Dónde está la calle ?","Non dago  kalea?"],["Como é o hotel?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["Cal é o prezo de un cuarto de hotel por unha noite?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["Cal hotel é bo?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["é almorzo incluído?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["Cando é o check in e check-off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["Os cuartos do hotel son compartidos?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["Que ofrece o hotel?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["Onde é o cuarto meu?","¿Dónde está mi habitación?","Non dago nire gela?"],["Onde podo ir á piscina?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["Que actividades podo facer na cidade?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["A recepción está aberta 24 horas?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["¿Que podo ver na cidade?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["Cómo vou para ?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]],
				catalunia: [["On està el carrer ?","¿Dónde está la calle ?","Non dago  kalea?"],["Com és lŽhotel ?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["Quant costa per nit lŽhotel ?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["Quin hotel em recomanaries?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["Està inclòs lŽesmorcar?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["Quan es realitza el check in i el check off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["Les habitacions són compartides a lŽhotel ?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["Quins serveis ofereix lŽhotel ?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["On està la meua habitació?","¿Dónde está mi habitación?","Non dago nire gela?"],["Com puc accedir a la piscina?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["Quines activitats es poden fer a la ciutat?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["La recepció està oberta les 24 hores?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["Quins monuments puc visitar a la ciutat?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["Com puc arribar fins a ?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]],
				spain: [["¿Dónde está la calle ?","¿Dónde está la calle ?","Non dago  kalea?"],["¿Cómo es el hotel ?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["¿Cuánto cuesta por noche el hotel ?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["¿Qué hotel me recomendarías?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["¿Está incluido el desayuno?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["¿Cuándo se realiza el check in y el check off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["¿Las habitaciones son compartidas en el hotel ?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["¿Qué servicios ofrece el hotel ?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["¿Dónde está mi habitación?","¿Dónde está mi habitación?","Non dago nire gela?"],["¿Cómo puedo acceder a la piscina?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["¿Qué actividades se pueden hacer en la ciudad?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["¿La recepción está abierta las 24 horas?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["¿Qué monumentos puedo visitar en la ciudad?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["¿Cómo puedo llegar hasta ?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]],
				england: [["Where is the X street?","¿Dónde está la calle ?","Non dago  kalea?"],["How is the X hotel?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["How much does it cost a night in the X hotel?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["What hotel would you recommend me?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["Is it the breakfast included?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["When do we do the check in and the check off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["Are shared-rooms in the X hotel?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["What services do the X hotel offer?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["Where is my room?","¿Dónde está mi habitación?","Non dago nire gela?"],["How can I find the swimming pool?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["What type of activities can I do in the city?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["Is the reception opened all day and night?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["What monuments can I visit in the city?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["How can I go to ?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]],
				france: [["Où est la rue ?","¿Dónde está la calle ?","Non dago  kalea?"],["Comme est l'hotel ?","¿Cómo es el hotel ?","Nolakoa da  hotela?"],["Combien ça coûte par nuit l'hotel?","¿Cuánto cuesta por noche el hotel ?","Gauero, zenbat ordaindu behar da  hotelean?"],["Quel hôtel me recommandez- vous?","¿Qué hotel me recomendarías?","Zein hotela gomendatzen didazu?"],["Le petit déjeuner est inclus?","¿Está incluido el desayuno?","Gosaria prezioren barne sartzen da?"],["Quand on doit faire le ckeck in et le check off?","¿Cuándo se realiza el check in y el check off?","Noiz egiten dira check in eta check off?"],["Les habitations sont pour partager dans cet hôtel?","¿Las habitaciones son compartidas en el hotel ?","Logela bikoitzak dira  hotelean?"],["Quels sont les service de l'hôtel?","¿Qué servicios ofrece el hotel ?","Zer nolako zerbitzua eskaitzen du  hotelak?"],["Où est ma chambre?","¿Dónde está mi habitación?","Non dago nire gela?"],["Comme je peux aller a la piscine?","¿Cómo puedo acceder a la piscina?","Nondik joan ahal naiz igerilekura?"],["Quelles activités ont peux fair dans la ville?","¿Qué actividades se pueden hacer en la ciudad?","Hirian, zein jarduera motak egin ahal dira?"],["La reception il est ouvert les 24h?","¿La recepción está abierta las 24 horas?","Harrera-lekua egun osoan irekita al dago?"],["Quels monuments je peux visiter dans la ville?","¿Qué monumentos puedo visitar en la ciudad?","Hirian zein monumentuak ikusi ditzaket?"],["Comme je peux arri ver jusqu'à?","¿Cómo puedo llegar hasta ?","Nola heldu ahal naiz -ra?"]]
			},
			{//Deportes
				euskadi: [["Non dago  polikiroldegia/zelaia?","¿Dónde está la calle ?","Non dago  polikiroldegia/zelaia?"],["Zein kirol mota praktikatu ahal dira  polikiroldegian?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["Noiz dago partida  zelaian?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["Zenbat balio du  zelaiaren sarrera?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["Zein taldea jokatzen du  zelaian?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["Zeintzuk dira gertuago dauden mendiak?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["Zenbat luzatzen da  mendiaren igoera?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["Oso zaila da  mendiaren igoera?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["Zeintzuk dira Bilboko ohiko kirolak?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["Non ikus daitezke Bilboko ohiko kirolak?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["Non topa dezaket kirol-dendak?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]],
				galicia: [["Onde está o estadio do deporte","¿Dónde está la calle ?","Non dago  polikiroldegia/zelaia?"],["Que deporte podo facer no centro de deportes?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["Cando hai un partido no estadio?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["Cual é o prezo a entrada do estadio?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["De cal equipo é este estadio?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["Cales son as montañas máis próximas?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["Canto tempo leva a subir a montaña?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["É moi difícil para subir a montaña?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["Cales son as deportes típicos do Bilbao?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["Onde podo practicar/ver  os deportes típicos do Bilbao?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["Onde hai tendas de deporte?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]],
				catalunia: [["On està el poliesportiu/ estadi?","¿Dónde está la calle ?","Non dago  polikiroldegia/zelaia?"],["Quins esports es poden fer en el poliesportiu ?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["Quan hi ha partit a lŽestadi ?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["Quant costa una estrada a lŽestadi ?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["De quin equip és lŽestadi ?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["Quines són les muntanyes més properes?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["Quan es triga a pujar la muntanya ?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["És molt dura la pujada a la muntanya ?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["Quins són el esports típics de Bilbao?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["A on es pot practicar/ veure esports típics de Bilbao?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["A on puc trobar botigues dŽesports?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]],
				spain: [["¿Dónde está el polideportivo/estadio ?","¿Dónde está la calle ?","Non dago  polikiroldegia/zelaia?"],["¿Qué deportes se pueden hacer en el polideportivo ?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["¿Cuándo hay partido en el estadio ?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["¿Cuánto cuesta una entrada en el estadio ?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["¿De qué equipo es el estadio ?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["¿Cuáles son los montes más cercanos?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["¿Cuánto se tarda en subir al monte ?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["¿Es muy dura la subida del monte ?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["¿Cuáles son los deportes típicos de Bilbao?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["¿Dónde puedo encontrar tiendas deportivas?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]],
				england: [["Where is the X sports centre/stadium ?","¿Dónde está la calle ?","Non dago  polikiroldegia/zelaia?"],["What sports can I do in the X sports centre?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["When is a match in the X stadium?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["How much does it cost a ticket in the X stadium?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["What is the team of this stadium?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["What are the nearest mountains?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["How long it takes to go Mount X?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["Is it difficult to go the mountain X?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["What are the tipical sports of Bilbao?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["Where can I practise/see tipical sports in Bilbao?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["Where can I find sports shops?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]],
				france: [["Où est le gymnase/stade ?","¿Dónde está el polideportivo/estadio ?","Non dago  polikiroldegia/zelaia?"],["Quels sports peut fair e dans le gymnase?","¿Qué deportes se pueden hacer en el polideportivo ?","Zein kirol mota praktikatu ahal dira  polikiroldegian?"],["Quand il y a match dans le stade ?","¿Cuándo hay partido en el estadio ?","Noiz dago partida  zelaian?"],["Combien ça coûte une entrée dans le stade?","¿Cuánto cuesta una entrada en el estadio ?","Zenbat balio du  zelaiaren sarrera?"],["De quoi équipe est le stade?","¿De qué equipo es el estadio ?","Zein taldea jokatzen du  zelaian?"],["Quelles sont les montagnes plus proche?","¿Cuáles son los montes más cercanos?","Zeintzuk dira gertuago dauden mendiak?"],["Combien de temps il faut pour monter la montagne ?","¿Cuánto se tarda en subir al monte ?","Zenbat luzatzen da  mendiaren igoera?"],["C' est très difficile monter la montagne?","¿Es muy dura la subida del monte ?","Oso zaila da  mendiaren igoera?"],["Quels sont les sports typique de Bilbao?","¿Cuáles son los deportes típicos de Bilbao?","Zeintzuk dira Bilboko ohiko kirolak?"],["Où je peux practiquer/ voir sports á Bilbao?","¿Dónde se pueden practicar/ver deportes típicos de Bilbao?","Non ikus daitezke Bilboko ohiko kirolak?"],["Où je peux trouver magasins de sport?","¿Dónde puedo encontrar tiendas deportivas?","Non topa dezaket kirol-dendak?"]]
			},
			{//Monumentos
				euskadi: [["Non dago kalea/enparantza?","¿Dónde está la calle/plaza ?","Non dago kalea/enparantza?"],["Non topa dezaket  monumentua?", "¿Dónde está el monumento  ?","Non topa dezaket  monumentua?"], ["Nola deitzen da monumentu hau?","¿Cómo se llama el monumento ?","Nola deitzen da monumentu hau?"],["Zein da monumentu honen istorioa?", "¿Cuál es la historia del monumento ?","Zein da monumentu honen istorioa?"]],
				galicia: [["Onde podo atopar o praza?","¿Dónde puedo encontrar la plaza  ?","Non dago kalea/enparantza?"],["Onde podo atopar o monumento","¿Dónde puedo encontrar el monumento  ?","Non topa dezaket monumentua?"],["Como se chama este momumento?", "¿Cómo se llama este monumento?", "Nola deitzen da monumento hau?"],["Cal é a historia deste monumento?","¿Cuál es la historia de este monumento?", "Zein da monumentu honen istorioa?"]],
				catalunia: [["On està el carrer/placa?","¿Dónde está la calle/plaza  ?","Non dago  kalea/enparantza?"],["On puc trobar el monument?","¿Dónde puedo encontrar el monumento  ?","Non topa dezaket  monumentua?"],["Com sŽanomena aquest monument?","¿Cómo se llama este monumento","Nola deitzen da monumento hau?"],["Quina és la historia dŽaquest monument?","¿Cuál es la historia de este monumento?","Zein da monumentu honen istorioa?"]],
				spain: [["¿Dónde está la calle/plaza ?","¿Dónde está la calle/plaza ?","Non dago kalea/enparantza?"],["¿Dónde está el monumento ?", "¿Dónde está el monumento  ?","Non topa dezaket  monumentua?"], ["¿Cómo se llama el monumento ?","¿Cómo se llama el monumento  ?","Nola deitzen da monumentu hau?"],["¿Cuál es la historia del monumento ?", "¿Cuál es la historia del monumento ?","Zein da monumentu honen istorioa?"]],
				england: [["Where is the X street/square ?","¿Dónde está la calle/plaza ?","Non dago kalea/enparantza?"],["Where can I find the X monument?", "¿Dónde está el monumento ?","Non topa dezaket  monumentua?"], ["What is the name of this monument?","¿Cómo se llama el monumento ?","Nola deitzen da monumentu hau?"],[" What is the history of this monument?", "¿Cuál es la historia del monumento?","Zein da monumentu honen istorioa?"]],
				france: [["Où est la rue/place?","¿Dónde está la calle/plaza ?","Non dago kalea/enparantza?"],[" Où je peux trouver le monument?", "¿Dónde está el monumento  ?","Non topa dezaket  monumentua?"], ["Comme s'appelle ce monument?","¿Cómo se llama el monumento ?","Nola deitzen da monumento hau?"],["Quelle est l' histoire de ce monument?", "¿Cuál es la historia del monumento?","Zein da monumentu honen istorioa?"]]
			},
			{//Transporte
				euskadi: [["Zenbat kostatzen du?","Cuanto cuesta?","Zenbat Kostatzen du?"],["Non dago kalea?","¿Dónde está la calle  ?",""],["Autobus/tren/metro hau  kalera doa?","¿Este autobús/tren/metro va a la calle  ?",""],["Non topa dezaket autobus/tren/metro geltokia?","¿Dónde puedo encontrar una estación de autobús/tren/metro?",""],["Zenbat balio du  autobus-/tren-/metro-txartelak?","¿Cuánto cuesta el billete de autobus/tren/metro?",""],["Nola eta non erosi dezaket autobus-/tren-/metro- txartela?","¿Dónde y cómo puedo comprar el billete deautobus/tren/metro?",""],["X kalera joateko, zein autobusa/trena/metroa hartu behar dut?","¿Qué autobus/tren/metro debo coger para ir a la calle  ?",""]],
				galicia: [["Onde está a rúa?","¿Dónde está la calle  ?","Non dago kalea?"],["Este autobús/tren/ metro indo á rúa?","¿Este autobus/tren/metro va a la calle ?",""],[" Onde podo atopar unha estación de autobuses / tren / metro?","¿Dónde puedo encontrar una estación de autobuses/tren/metro?",""],["Cuanto é o paso de autobuses/tren/metro?","",""],["Onde e como podo mercar o billete de autobús /tren/metro?","¿Dónde y cómo puedo encontrar una estación de autobuses/tren/metro?",""],["Que liña de autobuses / tren / metro debo tomar para chegar ata a rúa X?","¿Qué línea de autobuses/tren/metro tengo que coger para ir a la calle ?",""]],
				catalunia: [["On està el carrer?","¿Dónde está la calle  ?","Non dago kalea?"],["Aquest bus/tren/metro va al carrer?","¿Este autobus/metro tren/ va a la calle ? ","Autobus/tren/metro hau  kalera doa?"],["A on puc trobar una estació de bus/tren/metro?","¿Dónde puedo encontrar una estación de autobuses/tren/metro?","Non topa dezaket autobus/tren/metro geltokia?"],["Quant costa el bitllet de bus/tren/metro?","Cuánto cuesta un billete de autobus/tren/metro?","Zenbat balio du  autobus-/tren-/metro-txartelak?"],["A on i com puc comprar el bitllet de bus/tren/metro?","¿Dónde y cómo puedo comprar un billete de autobus/tren/metro?","","Nola eta non erosi dezaket autobus-/tren-/metro- txartela?"],["Quin bus/tren/metro haig d agafar per anar al carrer X?","¿Qué línea de autobus/tren/metro tengo que coger para ir a la calle ? ","X kalera joateko, zein autobusa/trena/metroa hartu behar dut?"]],
				spain: [["¿Cuanto cuesta?","¿Cuanto cuesta?","Zenbat Kostatzen du?"],["","¿Dónde está la calle  ?",""],["¿Este autobus/metro tren/ va a la calle ? ","Autobus/tren/metro hau  kalera doa?",""],["¿Dónde puedo encontrar una estación de autobuses/tren/metro?","Non topa dezaket autobus/tren/metro geltokia?",""],["¿Cuánto cuesta un billete de autobus/tren/metro?","Zenbat balio du  autobus-/tren-/metro-txartelak?",""],["¿Dónde y cómo puedo comprar un billete de autobus/tren/metro?","Nola eta non erosi dezaket autobus-/tren-/metro- txartela?",""],["¿Qué línea de autobus/tren/metro tengo que coger para ir a la calle  ?","X kalera joateko, zein autobusa/trena/metroa hartu behar dut?",""]],
				england: [["How much is it?","Â¿Cuanto cuesta?","Zenbat Kostatzen du?"],["Where is the  Street?","¿Dónde está la calle  ?","Non dago kalea?"],["Does this bus/train/underground go to  street?","¿Este autobus/metro tren/ va a la calle ? ","Autobus/tren/metro hau  kalera doa?"],["Where can I find a bus/train/underground station?","¿Dónde puedo encontrar una estación de autobuses/tren/metro?","Non topa dezaket autobus/tren/metro geltokia?"],["How much does it cost a bus/train/underground ticket?","Cuánto cuesta un billete de autobus/tren/metro?","Zenbat balio du  autobus-/tren-/metro-txartelak?"],["Where and how can I buy a bus/train/underground ticket?","¿Dónde y cómo puedo comprar un billete de autobus/tren/metro?","","Nola eta non erosi dezaket autobus-/tren-/metro- txartela?"],["What line of bus/train/underground do I have to catch to go to ?","¿Qué línea de autobus/tren/metro tengo que coger para ir a la calle  ?","X kalera joateko, zein autobusa/trena/metroa hartu behar dut?"]],
				france: [["Où est la rue?","¿Dónde está la calle ?","Non dago kalea?"],["Ce bus/ train/ metro va à la rue?","¿Este autobús/metro/tren va a la calle ? ","Autobus/tren/metro hau  kalera doa?"],["Où je peux trouver une stat ion de bus/train/metro?","¿Dónde puedo encontrar una estación de autobuses/tren/metro?","Non topa dezaket autobus/tren/metro geltokia?"],[" Combien ça coûte le billet de bus/train/metro?","¿Cuánto cuesta un billete de autobús/tren/metro?","Zenbat balio du  autobus-/tren-/metro-txartelak?"],[" Où et comment je peux acheter le billet d' autobus/train/metro?","¿Dónde y cómo puedo comprar un billete de autobús/tren/metro?","Nola eta non erosi dezaket autobus-/tren-/metro- txartela?"],["Quelle ligne de bus/train/metro je dois prendre pour aller à la rue X?","¿Qué línea de autobús/tren/metro tengo que coger para ir a la calle ?","X kalera joateko, zein autobusa/trena/metroa hartu behar dut?"]]
			}
		]
	};

/////////////////////
//Objeto JSON critica
/////////////////////
var criticaUsuario= {
		critica: null,
		fecha: null,
		usuario: null,
		sitio: null
	};

var calificacionUsuario= {
		calificacion: null,
		sitio: null
	};


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////Objetos generadores de Pages
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////
//Instrucciones
///////////////
var instruct_page_1 = {
		create: function() {
			var instruc = instrucciones[langua];
			var pageDiv=$('<div data-role="page" data-dialog="true" data-close-btn="none" id="instruction-page-1"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">Bilbapp</h1>'+
				'</div>';
			
			var contentDiv=
				'<div data-role="content">'+
					'<h2 style="text-align:center;">'+instrucciones_generales_titul[langua]+'</h2>'+
					'<h4 style="text-align:center;">'+instrucciones_generales_content[langua]+'</h4>'+
					'<a href="#instruction-page-2" id="button-1" class="ui-btn ui-corner-all ui-btn-b">OK</a>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv);

			return pageDiv;
		},

	};
var instruct_page_2 = {
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

			return pageDiv;
		},

	};
///////////
//Home-Page
///////////
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
						'<br><br><br><br><br><br><br>'+
						'<div class="ui-block-a" style="width:18%;text-align:center;height:50px"><a href="#page-1" id="home-page-1"><i class="fa fa-glass fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-b" style="width:25%;text-align:center;height:50px"><a href="#page-2" id="home-page-2"><i class="fa fa-shopping-cart fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-c" style="width:25%;text-align:center;height:50px"><a href="#page-3" id="home-page-3"><i class="fa fa-cutlery fa-4x" style="line-height:50px"></i></a></div>'+		
						'<div class="ui-block-d" style="width:25%;text-align:center;height:50px"><a href="#page-4" id="home-page-4"><i class="fa fa-bed fa-4x" style="line-height:50px"></i></a></div>'+
						'<div class="ui-block-a" style="width:93%;text-align:center;height:150px"><img id="logo-2" alt="" src="img/BILBAPP.png"/></div>'+
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

			return pageDiv;
		},

	};
/////////////////
/////Option Lists
/////////////////
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
	
		return pageDiv;
	},

};
////////////////////
/////////Información
////////////////////
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
				'<div data-role="footer" data-position="fixed" style="text-align:center">'+
					'<a href="" id="button-refresh-'+i+'" class="ui-btn ui-icon-refresh ui-btn-icon-left ui-corner-all" onclick=regeneradorInfo()>'+traduccion_actualizar[langua]+'</a>'+
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);

			return pageDiv;
		}

	};
/////////////
/////////Mapa
////////////
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

			return pageDiv;
		},

	};
////////////////////
/////////Expresiones
////////////////////
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
				contentDiv += '<p>Español: '+elemento[1]+'<br>Euskera: '+elemento[2]+'</p>';
				contentDiv += '</div>';
			}
			contentDiv += '</div>';
			
			contentDiv += '</div>';
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
			return pageDiv;
		},

	};
//////
//Foro
//////
var forum_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-4"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';		
			
			var contentDiv='<div data-role="content" id="foro-scroll-'+i+'">'+
				'<div class="ui-field-contain">'+
				'<label for="select-1">Select:</label>'+
				'<select name="select-1" id="select-2-'+i+'" data-theme="a">';
				contentDiv += querySitiosCritica(i);			
				contentDiv+='</div>';
				
			var footerDiv='<div data-role="footer" data-position="fixed">'+
				'User Name: <input type="text" id="username-'+i+'" name="userName" value=""><p>'+
				'Opinion: <input type="text" id="usercritica-'+i+'" name="userOpin" value=""><p>'+
				'<a href="" id="button-critica-'+i+'" onclick=addCritica("select-2-'+i+'",'+i+') class="ui-btn ui-icon-comment ui-btn-icon-left ui-corner-all">'+traduccion_publicar[langua]+'</a>'+
				'</div>';
	
			pageDiv.append(headerDiv,contentDiv,footerDiv);

			return pageDiv;
		},

	};
///////////////
//Calificaciones
///////////////
var calif_page = {
		create: function(i) {
			var place = places[langua];
			var pageDiv=$('<div data-role="page" id="page-'+i+'-5"></div>');
			var headerDiv=
				'<div data-role="header" data-position="fixed" >'+
					'<h1">'+place[i-1]+'</h1>'+
				'</div>';
			
			var contentDiv = querySitiosPuntuacion(i);
			
			var footerDiv=
				'<div data-role="footer" data-position="fixed">'
					'<a href="#page-'+i+'" id="go_back" class="ui-btn ui-corner-all">Back</a>'
				'</div>';
			
			pageDiv.append(headerDiv,contentDiv,footerDiv);
			
			return pageDiv;
		},

	};