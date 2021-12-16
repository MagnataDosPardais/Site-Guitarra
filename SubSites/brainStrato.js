var cost = document.getElementById("guitarPriceDiv");	//Boleto

var titles = []										//Lista de títulos
titles.push(document.getElementById("bodyWood"))	//Madeira do corpo
titles.push(document.getElementById("bodyColor"))	//Cor do corpo
titles.push(document.getElementById("bodyVarnish"))	//Verniz
titles.push(document.getElementById("neckWood"))	//Madeira do braço
titles.push(document.getElementById("scaleWood"))	//Madeira da escala
titles.push(document.getElementById("neckMarker"))	//Marcador da escala
titles.push(document.getElementById("bodyCap"))		//Captador do corpo
titles.push(document.getElementById("shieldColor"))	//Cor do escudo
titles.push(document.getElementById("bodyBridge"))	//Ponte

var price = [380,0,0,0,0,0,0,0,0,0,0]	//Preçário
var slctd = [0,0,0,0,0,0,0,0,0];		//Itens selecionados

var wood = "...";	//Nome da madeira do corpo
var bdWood = [];	//Lista das madeiras do corpo
//Selecionáveis
bdWood.push(document.getElementById("Result00"));
bdWood.push(document.getElementById("Result01"));
bdWood.push(document.getElementById("Result02"));
bdWood.push(document.getElementById("Result03"));
bdWood.push(document.getElementById("Result04"));
bdWood.push(document.getElementById("Result05"));
bdWood.push(document.getElementById("Result06"));
bdWood.push(document.getElementById("Result07"));
bdWood.push(document.getElementById("Result08"));
bdWood.push(document.getElementById("Result09"));
bdWood.push(document.getElementById("Result0A"));
bdWood.push(document.getElementById("Result0B"));
bdWood.push(document.getElementById("Result0C"));
bdWood.push(document.getElementById("Result0D"));

var clr = "...";	//Nome da cor
var bdColor = []	//Lista das cores do corpo
//Selecionáveis
bdColor.push(document.getElementById("Result10"));
bdColor.push(document.getElementById("Result11"));
bdColor.push(document.getElementById("Result12"));
bdColor.push(document.getElementById("Result13"));
bdColor.push(document.getElementById("Result14"));
bdColor.push(document.getElementById("Result15"));
bdColor.push(document.getElementById("Result16"));
bdColor.push(document.getElementById("Result17"));
bdColor.push(document.getElementById("Result18"));
bdColor.push(document.getElementById("Result19"));
bdColor.push(document.getElementById("Result1A"));

var vr = "...";	//Uso do verniz
var bdVrnz = []	//Lista de seleção de vernizes
//Selecionáveis
bdVrnz.push(document.getElementById("Result20"));
bdVrnz.push(document.getElementById("Result21"));

var nw = "...";	//Nome da medeira do braço
var nkWood = []	//Lista de medeiras do braço
//Selecionáveis
nkWood.push(document.getElementById("Result30"));
nkWood.push(document.getElementById("Result31"));
nkWood.push(document.getElementById("Result32"));
nkWood.push(document.getElementById("Result33"));
nkWood.push(document.getElementById("Result34"));
nkWood.push(document.getElementById("Result35"));
nkWood.push(document.getElementById("Result36"));
nkWood.push(document.getElementById("Result37"));
nkWood.push(document.getElementById("Result38"));
nkWood.push(document.getElementById("Result39"));

var sclWd = "...";	//Nome da madeira da escala
var scWood = []		//Lista de da madeira da escala
//Selecionáveis
scWood.push(document.getElementById("Result40"));
scWood.push(document.getElementById("Result41"));
scWood.push(document.getElementById("Result42"));
scWood.push(document.getElementById("Result43"));
scWood.push(document.getElementById("Result44"));
scWood.push(document.getElementById("Result45"));
scWood.push(document.getElementById("Result46"));
scWood.push(document.getElementById("Result47"));
scWood.push(document.getElementById("Result48"));

var mk = "...";	//Nome do marcador
var mkWood = []	//Lista de marcadores
//Selecionáveis
mkWood.push(document.getElementById("Result50"));
mkWood.push(document.getElementById("Result51"));
mkWood.push(document.getElementById("Result52"));
mkWood.push(document.getElementById("Result53"));
mkWood.push(document.getElementById("Result54"));
mkWood.push(document.getElementById("Result55"));
mkWood.push(document.getElementById("Result56"));
mkWood.push(document.getElementById("Result57"));

var cap = "...";	//Nome do captador
var bdCap = []		//Lista de captadores
//Selecionáveis
bdCap.push(document.getElementById("Result60"));
bdCap.push(document.getElementById("Result61"));
bdCap.push(document.getElementById("Result62"));
bdCap.push(document.getElementById("Result63"));

var sh = "...";	//Nome da cor do escudo
var bdShld = []	//Lista de cores do escudo
//Selecionáveis
bdShld.push(document.getElementById("Result70"));
bdShld.push(document.getElementById("Result71"));
bdShld.push(document.getElementById("Result72"));
bdShld.push(document.getElementById("Result73"));
bdShld.push(document.getElementById("Result74"));
bdShld.push(document.getElementById("Result75"));
bdShld.push(document.getElementById("Result76"));
bdShld.push(document.getElementById("Result77"));

var bridge = "...";	//Nome da ponte
var bdBrg = []		//Lista das pontes
//Selecionáveis
bdBrg.push(document.getElementById("Result80"));
bdBrg.push(document.getElementById("Result81"));

//Soma todos os valores e atializa o texto do boleto
function updateCost(){
	price[10] = 0
	for(let p = 0; p <= 9; p++){
		price[10] += price[p];
	}
	cost.innerHTML = `
	<h4 id="guitarPriceH4">Boleto:</h4>
	<p id="guitarPriceP">Peças + Mão de obra: R$${price[0]},00</p>
	<p id="guitarPriceP">Madeira do corpo [${wood}]: R$${price[1]},00</p>
	<p id="guitarPriceP">Pintura do corpo [${clr}]: R$${price[2]},00</p>
	<p id="guitarPriceP">Verniz [${vr}]: R$${price[3]},00</p>
	<p id="guitarPriceP">Madeira do braço [${nw}]: R$${price[4]},00</p>
	<p id="guitarPriceP">Madeira da escala [${sclWd}]: R$${price[5]},00</p>
	<p id="guitarPriceP">Marcador da escala [${mk}]: R$${price[6]},00</p>
	<p id="guitarPriceP">Captador [${cap}]: R$${price[7]},00</p>
	<p id="guitarPriceP">Escudo [${sh}]: R$${price[8]},00</p>
	<p id="guitarPriceP">Ponte [${bridge}]: R$${price[9]},00</p>
	<p id="guitarPriceP"><b>TOTAL: R$${price[10]},00</b></p>`;
}

/*
funções 'sel':
	Recebe o valor da função 'onclick' do HTML
	Coloca todos os selecionáveis no mesmo padrão
	Altera o CSS do selecionado
	Altera a variável que leva o nome do selecionado
	Altera a lista (a partir do índice) o custo do material
*/
function selWood(w){
	wood = "...";
	price[1] = 0.00;
	if(slctd[0] != w){
		slctd[0] = w;
	}
	else{
		slctd[0] = 0;
	}
	for(let x of bdWood){
		x.style.background = "none";
		x.style.color = "#FFF";
		x.style.padding = "0%";
		x.style.borderRadius = "0%";
		x.style.borderStyle = "none";
		x.style.borderColor = "none";
	}
	if(slctd[0] == 1){
		bdWood[0].style.background = "#FFF"
		bdWood[0].style.color = "#000"
		bdWood[0].style.padding = "4%";
		bdWood[0].style.borderRadius = "2%"
		bdWood[0].style.borderStyle = "solid"
		bdWood[0].style.borderColor = "#000"
		wood = "Alder";
		price[1] = 139.00;
	}
	else if(slctd[0] == 2){
		bdWood[1].style.background = "#FFF"
		bdWood[1].style.color = "#000"
		bdWood[1].style.padding = "4%";
		bdWood[1].style.borderRadius = "2%"
		bdWood[1].style.borderStyle = "solid"
		bdWood[1].style.borderColor = "#000"
		wood = "Ash";
		price[1] = 120.00;
	}
	else if(slctd[0] == 3){
		bdWood[2].style.background = "#FFF"
		bdWood[2].style.color = "#000"
		bdWood[2].style.padding = "4%";
		bdWood[2].style.borderRadius = "2%"
		bdWood[2].style.borderStyle = "solid"
		bdWood[2].style.borderColor = "#000"
		wood = "BassWood";
		price[1] = 100.00;
	}
	else if(slctd[0] == 4){
		bdWood[3].style.background = "#FFF"
		bdWood[3].style.color = "#000"
		bdWood[3].style.padding = "4%";
		bdWood[3].style.borderRadius = "2%"
		bdWood[3].style.borderStyle = "solid"
		bdWood[3].style.borderColor = "#000"
		wood = "Cedro-Rosa";
		price[1] = 120.00;
	}
	else if(slctd[0] == 5){
		bdWood[4].style.background = "#FFF"
		bdWood[4].style.color = "#000"
		bdWood[4].style.padding = "4%";
		bdWood[4].style.borderRadius = "2%"
		bdWood[4].style.borderStyle = "solid"
		bdWood[4].style.borderColor = "#000"
		wood = "Freijó";
		price[1] = 141.00;;
	}
	else if(slctd[0] == 6){
		bdWood[5].style.background = "#FFF"
		bdWood[5].style.color = "#000"
		bdWood[5].style.padding = "4%";
		bdWood[5].style.borderRadius = "2%"
		bdWood[5].style.borderStyle = "solid"
		bdWood[5].style.borderColor = "#000"
		wood = "Imbuia";
		price[1] = 180.00;
	}
	else if(slctd[0] == 7){
		bdWood[6].style.background = "#FFF"
		bdWood[6].style.color = "#000"
		bdWood[6].style.padding = "4%";
		bdWood[6].style.borderRadius = "2%"
		bdWood[6].style.borderStyle = "solid"
		bdWood[6].style.borderColor = "#000"
		wood = "Ipê";
		price[1] = 178.00;
	}
	else if(slctd[0] == 8){
		bdWood[7].style.background = "#FFF"
		bdWood[7].style.color = "#000"
		bdWood[7].style.padding = "4%";
		bdWood[7].style.borderRadius = "2%"
		bdWood[7].style.borderStyle = "solid"
		bdWood[7].style.borderColor = "#000"
		wood = "Jatobá";
		price[1] = 130.00;
	}
	else if(slctd[0] == 9){
		bdWood[8].style.background = "#FFF"
		bdWood[8].style.color = "#000"
		bdWood[8].style.padding = "4%";
		bdWood[8].style.borderRadius = "2%"
		bdWood[8].style.borderStyle = "solid"
		bdWood[8].style.borderColor = "#000"
		wood = "Marupá";
		price[1] = 132.00;
	}
	else if(slctd[0] == 10){
		bdWood[9].style.background = "#FFF"
		bdWood[9].style.color = "#000"
		bdWood[9].style.padding = "4%";
		bdWood[9].style.borderRadius = "2%"
		bdWood[9].style.borderStyle = "solid"
		bdWood[9].style.borderColor = "#000"
		wood = "Mogno";
		price[1] = 156.00;
	}
	else if(slctd[0] == 11){
		bdWood[10].style.background = "#FFF"
		bdWood[10].style.color = "#000"
		bdWood[10].style.padding = "4%";
		bdWood[10].style.borderRadius = "2%"
		bdWood[10].style.borderStyle = "solid"
		bdWood[10].style.borderColor = "#000"
		wood = "Pau-Ferro";
		price[1] = 200.00;
	}
	else if(slctd[0] == 12){
		bdWood[11].style.background = "#FFF"
		bdWood[11].style.color = "#000"
		bdWood[11].style.padding = "4%";
		bdWood[11].style.borderRadius = "2%"
		bdWood[11].style.borderStyle = "solid"
		bdWood[11].style.borderColor = "#000"
		wood = "Pau-Marfim";
		price[1] = 185.00;
	}
	else if(slctd[0] == 13){
		bdWood[12].style.background = "#FFF"
		bdWood[12].style.color = "#000"
		bdWood[12].style.padding = "4%";
		bdWood[12].style.borderRadius = "2%"
		bdWood[12].style.borderStyle = "solid"
		bdWood[12].style.borderColor = "#000"
		wood = "Roxinho";
		price[1] = 210.00;
	}
	else if(slctd[0] == 14){
		bdWood[13].style.background = "#FFF"
		bdWood[13].style.color = "#000"
		bdWood[13].style.padding = "4%";
		bdWood[13].style.borderRadius = "2%"
		bdWood[13].style.borderStyle = "solid"
		bdWood[13].style.borderColor = "#000"
		wood = "Tauari";
		price[1] = 164.00;
	}
	titles[0].innerHTML = `- Madeira do corpo: ${wood}`;
	updateCost();
}
function selBcolor(c){
	clr = "...";
	price[2] = 0.00;
	if(slctd[1] != c){
		slctd[1] = c;
	}
	else{
		slctd[1] = 0;
	}
	for(let y of bdColor){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "0%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[1] == 1){
		bdColor[0].style.background = "#FFF"
		bdColor[0].style.color = "#000"
		bdColor[0].style.padding = "4%";
		bdColor[0].style.borderRadius = "2%"
		bdColor[0].style.borderStyle = "solid"
		bdColor[0].style.borderColor = "#000"
		clr = "Madeira crua";
	}
	else if(slctd[1] == 2){
		bdColor[1].style.background = "#FFF"
		bdColor[1].style.color = "#000"
		bdColor[1].style.padding = "4%";
		bdColor[1].style.borderRadius = "2%"
		bdColor[1].style.borderStyle = "solid"
		bdColor[1].style.borderColor = "#000"
		clr = "Amarelo";
		price[2] = 40.00;
	}
	else if(slctd[1] == 3){
		bdColor[2].style.background = "#FFF"
		bdColor[2].style.color = "#000"
		bdColor[2].style.padding = "4%";
		bdColor[2].style.borderRadius = "2%"
		bdColor[2].style.borderStyle = "solid"
		bdColor[2].style.borderColor = "#000"
		clr = "Azul";
		price[2] = 50.00;
	}
	else if(slctd[1] == 4){
		bdColor[3].style.background = "#FFF"
		bdColor[3].style.color = "#000"
		bdColor[3].style.padding = "4%";
		bdColor[3].style.borderRadius = "2%"
		bdColor[3].style.borderStyle = "solid"
		bdColor[3].style.borderColor = "#000"
		clr = "Branco";
		price[2] = 70.00;
	}
	else if(slctd[1] == 5){
		bdColor[4].style.background = "#FFF"
		bdColor[4].style.color = "#000"
		bdColor[4].style.padding = "4%";
		bdColor[4].style.borderRadius = "2%"
		bdColor[4].style.borderStyle = "solid"
		bdColor[4].style.borderColor = "#000"
		clr = "Cherry";
		price[2] = 60.00;
	}
	else if(slctd[1] == 6){
		bdColor[5].style.background = "#FFF"
		bdColor[5].style.color = "#000"
		bdColor[5].style.padding = "4%";
		bdColor[5].style.borderRadius = "2%"
		bdColor[5].style.borderStyle = "solid"
		bdColor[5].style.borderColor = "#000"
		clr = "Dourado";
		price[2] = 85.00;
	}
	else if(slctd[1] == 7){
		bdColor[6].style.background = "#FFF"
		bdColor[6].style.color = "#000"
		bdColor[6].style.padding = "4%";
		bdColor[6].style.borderRadius = "2%"
		bdColor[6].style.borderStyle = "solid"
		bdColor[6].style.borderColor = "#000"
		clr = "Prata";
		price[2] = 80.00;
	}
	else if(slctd[1] == 8){
		bdColor[7].style.background = "#FFF"
		bdColor[7].style.color = "#000"
		bdColor[7].style.padding = "4%";
		bdColor[7].style.borderRadius = "2%"
		bdColor[7].style.borderStyle = "solid"
		bdColor[7].style.borderColor = "#000"
		clr = "Preto";
		price[2] = 70.00;
	}
	else if(slctd[1] == 9){
		bdColor[8].style.background = "#FFF"
		bdColor[8].style.color = "#000"
		bdColor[8].style.padding = "4%";
		bdColor[8].style.borderRadius = "2%"
		bdColor[8].style.borderStyle = "solid"
		bdColor[8].style.borderColor = "#000"
		clr = "Sunburst1";
		price[2] = 65.00;
	}
	else if(slctd[1] == 10){
		bdColor[9].style.background = "#FFF"
		bdColor[9].style.color = "#000"
		bdColor[9].style.padding = "4%";
		bdColor[9].style.borderRadius = "2%"
		bdColor[9].style.borderStyle = "solid"
		bdColor[9].style.borderColor = "#000"
		clr = "Sunburst2";
		price[2] = 65.00;
	}
	else if(slctd[1] == 11){
		bdColor[10].style.background = "#FFF"
		bdColor[10].style.color = "#000"
		bdColor[10].style.padding = "4%";
		bdColor[10].style.borderRadius = "2%"
		bdColor[10].style.borderStyle = "solid"
		bdColor[10].style.borderColor = "#000"
		clr = "Vermelho";
		price[2] = 65.00;
	}
	titles[1].innerHTML = `- Cor do corpo: ${clr}`;
	updateCost();
}
function selVrn(v){
	vr = "...";
	price[3] = 0.00
	if(slctd[2] != v){
		slctd[2] = v;
	}
	else{
		slctd[2] = 0;
	}
	for(let x of bdVrnz){
		x.style.background = "none";
		x.style.color = "#FFF";
		x.style.padding = "3%";
		x.style.borderRadius = "0%";
		x.style.borderStyle = "none";
		x.style.borderColor = "none";

	}
	if(slctd[2] == 1){
		bdVrnz[0].style.background = "#FFF";
		bdVrnz[0].style.color = "#000";
		bdVrnz[0].style.padding = "4%";
		bdVrnz[0].style.borderRadius = "2%";
		bdVrnz[0].style.borderStyle = "solid";
		bdVrnz[0].style.borderColor = "#000";
		vr = "Sim";
		price[3] = 40.00
	}
	else if(slctd[2] == 2){
		bdVrnz[1].style.background = "#FFF";
		bdVrnz[1].style.color = "#000";
		bdVrnz[1].style.padding = "4%";
		bdVrnz[1].style.borderRadius = "2%";
		bdVrnz[1].style.borderStyle = "solid";
		bdVrnz[1].style.borderColor = "#000";
		vr = "Não";
	}
	titles[2].innerHTML = `- Verniz: ${vr}`;
	updateCost();
}
function selNeckWood(w){
	nw = "...";
	price[4] = 0.00
	if(slctd[3] != w){
		slctd[3] = w;
	}
	else{
		slctd[3] = 0;
	}
	for(let y of nkWood){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "0%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[3] == 1){
		nkWood[0].style.background = "#FFF"
		nkWood[0].style.color = "#000"
		nkWood[0].style.padding = "4%";
		nkWood[0].style.borderRadius = "2%"
		nkWood[0].style.borderStyle = "solid"
		nkWood[0].style.borderColor = "#000"
		nw = "Angico";
		price[4] = 40.00;
	}
	else if(slctd[3] == 2){
		nkWood[1].style.background = "#FFF"
		nkWood[1].style.color = "#000"
		nkWood[1].style.padding = "4%";
		nkWood[1].style.borderRadius = "2%"
		nkWood[1].style.borderStyle = "solid"
		nkWood[1].style.borderColor = "#000"
		nw = "Bálsamo";
		price[4] = 65.00;
	}
	else if(slctd[3] == 3){
		nkWood[2].style.background = "#FFF"
		nkWood[2].style.color = "#000"
		nkWood[2].style.padding = "4%";
		nkWood[2].style.borderRadius = "2%"
		nkWood[2].style.borderStyle = "solid"
		nkWood[2].style.borderColor = "#000"
		nw = "Ébano";
		price[4] = 85.00;
	}
	else if(slctd[3] == 4){
		nkWood[3].style.background = "#FFF"
		nkWood[3].style.color = "#000"
		nkWood[3].style.padding = "4%";
		nkWood[3].style.borderRadius = "2%"
		nkWood[3].style.borderStyle = "solid"
		nkWood[3].style.borderColor = "#000"
		nw = "Goiabão";
		price[4] = 55.00;
	}
	else if(slctd[3] == 5){
		nkWood[4].style.background = "#FFF"
		nkWood[4].style.color = "#000"
		nkWood[4].style.padding = "4%";
		nkWood[4].style.borderRadius = "2%"
		nkWood[4].style.borderStyle = "solid"
		nkWood[4].style.borderColor = "#000"
		nw = "Grevilea";
		price[4] = 65.00;
	}
	else if(slctd[3] == 6){
		nkWood[5].style.background = "#FFF"
		nkWood[5].style.color = "#000"
		nkWood[5].style.padding = "4%";
		nkWood[5].style.borderRadius = "2%"
		nkWood[5].style.borderStyle = "solid"
		nkWood[5].style.borderColor = "#000"
		nw = "Imbuia";
		price[4] = 90.00;
	}
	else if(slctd[3] == 7){
		nkWood[6].style.background = "#FFF"
		nkWood[6].style.color = "#000"
		nkWood[6].style.padding = "4%";
		nkWood[6].style.borderRadius = "2%"
		nkWood[6].style.borderStyle = "solid"
		nkWood[6].style.borderColor = "#000"
		nw = "Jacarandá";
		price[4] = 80.00;
	}
	else if(slctd[3] == 8){
		nkWood[7].style.background = "#FFF"
		nkWood[7].style.color = "#000"
		nkWood[7].style.padding = "4%";
		nkWood[7].style.borderRadius = "2%"
		nkWood[7].style.borderStyle = "solid"
		nkWood[7].style.borderColor = "#000"
		nw = "Jacarandá Violeta";
		price[4] = 85.00;
	}
	else if(slctd[3] == 9){
		nkWood[8].style.background = "#FFF"
		nkWood[8].style.color = "#000"
		nkWood[8].style.padding = "4%";
		nkWood[8].style.borderRadius = "2%"
		nkWood[8].style.borderStyle = "solid"
		nkWood[8].style.borderColor = "#000"
		nw = "Mapple";
		price[4] = 95.00;
	}
	else if(slctd[3] == 10){
		nkWood[9].style.background = "#FFF"
		nkWood[9].style.color = "#000"
		nkWood[9].style.padding = "4%";
		nkWood[9].style.borderRadius = "2%"
		nkWood[9].style.borderStyle = "solid"
		nkWood[9].style.borderColor = "#000"
		nw = "Pau-Marfim";
		price[4] = 65.00;
	}
	titles[3].innerHTML = `- Madeira do braço: ${nw}`;
	updateCost();
}
function selSclWood(s){
	sclWd = "...";
	price[5] = 0.00;
	if(slctd[4] != s){
		slctd[4] = s;
	}
	else{
		slctd[4] = 0;
	}
	for(let y of scWood){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "0%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[4] == 1){
		scWood[0].style.background = "#FFF"
		scWood[0].style.color = "#000"
		scWood[0].style.padding = "4%";
		scWood[0].style.borderRadius = "2%"
		scWood[0].style.borderStyle = "solid"
		scWood[0].style.borderColor = "#000"
		sclWd = "Ébano";
		price[5] = 65.00;
	}
	else if(slctd[4] == 2){
		scWood[1].style.background = "#FFF"
		scWood[1].style.color = "#000"
		scWood[1].style.padding = "4%";
		scWood[1].style.borderRadius = "2%"
		scWood[1].style.borderStyle = "solid"
		scWood[1].style.borderColor = "#000"
		sclWd = "Imbuia";
		price[5] = 70.00;
	}
	else if(slctd[4] == 3){
		scWood[2].style.background = "#FFF"
		scWood[2].style.color = "#000"
		scWood[2].style.padding = "4%";
		scWood[2].style.borderRadius = "2%"
		scWood[2].style.borderStyle = "solid"
		scWood[2].style.borderColor = "#000"
		sclWd = "Ipê";
		price[5] = 75.00;
	}
	else if(slctd[4] == 4){
		scWood[3].style.background = "#FFF"
		scWood[3].style.color = "#000"
		scWood[3].style.padding = "4%";
		scWood[3].style.borderRadius = "2%"
		scWood[3].style.borderStyle = "solid"
		scWood[3].style.borderColor = "#000"
		sclWd = "Jacarandá";
		price[5] = 60.00;
	}
	else if(slctd[4] == 5){
		scWood[4].style.background = "#FFF"
		scWood[4].style.color = "#000"
		scWood[4].style.padding = "4%";
		scWood[4].style.borderRadius = "2%"
		scWood[4].style.borderStyle = "solid"
		scWood[4].style.borderColor = "#000"
		sclWd = "Jacarandá Violeta";
		price[5] = 65.00;
	}
	else if(slctd[4] == 6){
		scWood[5].style.background = "#FFF"
		scWood[5].style.color = "#000"
		scWood[5].style.padding = "4%";
		scWood[5].style.borderRadius = "2%"
		scWood[5].style.borderStyle = "solid"
		scWood[5].style.borderColor = "#000"
		sclWd = "Mapple";
		price[5] = 75.00;
	}
	else if(slctd[4] == 7){
		scWood[6].style.background = "#FFF"
		scWood[6].style.color = "#000"
		scWood[6].style.padding = "4%";
		scWood[6].style.borderRadius = "2%"
		scWood[6].style.borderStyle = "solid"
		scWood[6].style.borderColor = "#000"
		sclWd = "Pau-Ferro";
		price[5] = 55.00;
	}
	else if(slctd[4] == 8){
		scWood[7].style.background = "#FFF"
		scWood[7].style.color = "#000"
		scWood[7].style.padding = "4%";
		scWood[7].style.borderRadius = "2%"
		scWood[7].style.borderStyle = "solid"
		scWood[7].style.borderColor = "#000"
		sclWd = "Pau-Marfim";
		price[5] = 45.00;
	}
	else if(slctd[4] == 9){
		scWood[8].style.background = "#FFF"
		scWood[8].style.color = "#000"
		scWood[8].style.padding = "4%";
		scWood[8].style.borderRadius = "2%"
		scWood[8].style.borderStyle = "solid"
		scWood[8].style.borderColor = "#000"
		sclWd = "Roxinho";
		price[5] = 82.00;
	}
	titles[4].innerHTML = `- Madeira da escala: ${sclWd}`;
	updateCost();
}
function selMarker(m){
	mk = "...";
	price[6] = 0.00;
	if(slctd[5] != m){
		slctd[5] = m;
	}
	else{
		slctd[5] = 0;
	}
	for(let y of mkWood){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "3%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[5] == 1){
		mkWood[0].style.background = "#FFF"
		mkWood[0].style.color = "#000"
		mkWood[0].style.padding = "4%";
		mkWood[0].style.borderRadius = "2%"
		mkWood[0].style.borderStyle = "solid"
		mkWood[0].style.borderColor = "#000"
		mk = "Botão";
		price[6] = 6.00;
	}
	else if(slctd[5] == 2){
		mkWood[1].style.background = "#FFF"
		mkWood[1].style.color = "#000"
		mkWood[1].style.padding = "4%";
		mkWood[1].style.borderRadius = "2%"
		mkWood[1].style.borderStyle = "solid"
		mkWood[1].style.borderColor = "#000"
		mk = "Cruz (Tony Iomi)";
		price[6] = 14.00;
	}
	else if(slctd[5] == 3){
		mkWood[2].style.background = "#FFF"
		mkWood[2].style.color = "#000"
		mkWood[2].style.padding = "4%";
		mkWood[2].style.borderRadius = "2%"
		mkWood[2].style.borderStyle = "solid"
		mkWood[2].style.borderColor = "#000"
		mk = "Cruz de Malta";
		price[6] = 18.00;
	}
	else if(slctd[5] == 4){
		mkWood[3].style.background = "#FFF"
		mkWood[3].style.color = "#000"
		mkWood[3].style.padding = "4%";
		mkWood[3].style.borderRadius = "2%"
		mkWood[3].style.borderStyle = "solid"
		mkWood[3].style.borderColor = "#000"
		mk = "Dente de tubarão";
		price[6] = 16.00;
	}
	else if(slctd[5] == 5){
		mkWood[4].style.background = "#FFF"
		mkWood[4].style.color = "#000"
		mkWood[4].style.padding = "4%";
		mkWood[4].style.borderRadius = "2%"
		mkWood[4].style.borderStyle = "solid"
		mkWood[4].style.borderColor = "#000"
		mk = "Floral";
		price[6] = 25.00;
	}
	else if(slctd[5] == 6){
		mkWood[5].style.background = "#FFF"
		mkWood[5].style.color = "#000"
		mkWood[5].style.padding = "4%";
		mkWood[5].style.borderRadius = "2%"
		mkWood[5].style.borderStyle = "solid"
		mkWood[5].style.borderColor = "#000"
		mk = "Pássaro";
		price[6] = 19.00;
	}
	else if(slctd[5] == 7){
		mkWood[6].style.background = "#FFF"
		mkWood[6].style.color = "#000"
		mkWood[6].style.padding = "4%";
		mkWood[6].style.borderRadius = "2%"
		mkWood[6].style.borderStyle = "solid"
		mkWood[6].style.borderColor = "#000"
		mk = "Raio";
		price[6] = 11.00;
	}
	else if(slctd[5] == 8){
		mkWood[7].style.background = "#FFF"
		mkWood[7].style.color = "#000"
		mkWood[7].style.padding = "4%";
		mkWood[7].style.borderRadius = "2%"
		mkWood[7].style.borderStyle = "solid"
		mkWood[7].style.borderColor = "#000"
		mk = "Trapézio";
		price[6] = 12.00;
	}
	titles[5].innerHTML = `- Marcador do braço: ${mk}`;
	updateCost();
}
function selCap(c){
	cap = "...";
	price[7] = 0.00;
	if(slctd[6] != c){
		slctd[6] = c;
	}
	else{
		slctd[6] = 0;
	}
	for(let y of bdCap){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "3%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[6] == 1){
		bdCap[0].style.background = "#FFF"
		bdCap[0].style.color = "#000"
		bdCap[0].style.padding = "4%";
		bdCap[0].style.borderRadius = "2%"
		bdCap[0].style.borderStyle = "solid"
		bdCap[0].style.borderColor = "#000"
		cap = "S S S";
		price[7] = 204.00;
	}
	else if(slctd[6] == 2){
		bdCap[1].style.background = "#FFF"
		bdCap[1].style.color = "#000"
		bdCap[1].style.padding = "4%";
		bdCap[1].style.borderRadius = "2%"
		bdCap[1].style.borderStyle = "solid"
		bdCap[1].style.borderColor = "#000"
		cap = "S S H";
		price[7] = 256.00;
	}
	else if(slctd[6] == 3){
		bdCap[2].style.background = "#FFF"
		bdCap[2].style.color = "#000"
		bdCap[2].style.padding = "4%";
		bdCap[2].style.borderRadius = "2%"
		bdCap[2].style.borderStyle = "solid"
		bdCap[2].style.borderColor = "#000"
		cap = "H S H";
		price[7] = 308.00;
	}
	else if(slctd[6] == 4){
		bdCap[3].style.background = "#FFF"
		bdCap[3].style.color = "#000"
		bdCap[3].style.padding = "4%";
		bdCap[3].style.borderRadius = "2%"
		bdCap[3].style.borderStyle = "solid"
		bdCap[3].style.borderColor = "#000"
		cap = "H &nbsp;.&nbsp;  H";
		price[7] = 240.00;
	}
	titles[6].innerHTML = `- Captadores: ${cap}`;
	updateCost();
}
function selBshield(s){
	sh = "...";
	price[8] = 0.00;
	if(slctd[7] != s){
		slctd[7] = s;
	}
	else{
		slctd[7] = 0;
	}
	for(let y of bdShld){
		y.style.background = "none";
		y.style.color = "#FFF";
		y.style.padding = "0%";
		y.style.borderRadius = "0%";
		y.style.borderStyle = "none";
		y.style.borderColor = "none";
	}
	if(slctd[7] == 1){
		bdShld[0].style.background = "#FFF"
		bdShld[0].style.color = "#000"
		bdShld[0].style.padding = "4%";
		bdShld[0].style.borderRadius = "2%"
		bdShld[0].style.borderStyle = "solid"
		bdShld[0].style.borderColor = "#000"
		sh = "Sem escudo";
	}
	else if(slctd[7] == 2){
		bdShld[1].style.background = "#FFF"
		bdShld[1].style.color = "#000"
		bdShld[1].style.padding = "4%";
		bdShld[1].style.borderRadius = "2%"
		bdShld[1].style.borderStyle = "solid"
		bdShld[1].style.borderColor = "#000"
		sh = "Azul";
		price[8] = 75.00;
	}
	else if(slctd[7] == 3){
		bdShld[2].style.background = "#FFF"
		bdShld[2].style.color = "#000"
		bdShld[2].style.padding = "4%";
		bdShld[2].style.borderRadius = "2%"
		bdShld[2].style.borderStyle = "solid"
		bdShld[2].style.borderColor = "#000"
		sh = "Branco";
		price[8] = 70.00;
	}
	else if(slctd[7] == 4){
		bdShld[3].style.background = "#FFF"
		bdShld[3].style.color = "#000"
		bdShld[3].style.padding = "4%";
		bdShld[3].style.borderRadius = "2%"
		bdShld[3].style.borderStyle = "solid"
		bdShld[3].style.borderColor = "#000"
		sh = "Casco de tartaruga";
		price[8] = 88.00;
	}
	else if(slctd[7] == 5){
		bdShld[4].style.background = "#FFF"
		bdShld[4].style.color = "#000"
		bdShld[4].style.padding = "4%";
		bdShld[4].style.borderRadius = "2%"
		bdShld[4].style.borderStyle = "solid"
		bdShld[4].style.borderColor = "#000"
		sh = "Dourado";
		price[8] = 150.00;
	}
	else if(slctd[7] == 6){
		bdShld[5].style.background = "#FFF"
		bdShld[5].style.color = "#000"
		bdShld[5].style.padding = "4%";
		bdShld[5].style.borderRadius = "2%"
		bdShld[5].style.borderStyle = "solid"
		bdShld[5].style.borderColor = "#000"
		sh = "Prata";
		price[8] = 145.00;
	}
	else if(slctd[7] == 7){
		bdShld[6].style.background = "#FFF"
		bdShld[6].style.color = "#000"
		bdShld[6].style.padding = "4%";
		bdShld[6].style.borderRadius = "2%"
		bdShld[6].style.borderStyle = "solid"
		bdShld[6].style.borderColor = "#000"
		sh = "Preto";
		price[8] = 65.00;
	}
	else if(slctd[7] == 8){
		bdShld[7].style.background = "#FFF"
		bdShld[7].style.color = "#000"
		bdShld[7].style.padding = "4%";
		bdShld[7].style.borderRadius = "2%"
		bdShld[7].style.borderStyle = "solid"
		bdShld[7].style.borderColor = "#000"
		sh = "Vermelho";
		price[8] = 70.00;
	}
	titles[7].innerHTML = `- Cor do escudo: ${sh}`;
	updateCost();
}
function selBridge(v){
	bridge = "...";
	price[9] = 0.00;
	if(slctd[8] != v){
		slctd[8] = v;
	}
	else{
		slctd[8] = 0;
	}
	for(let x of bdBrg){
		x.style.background = "none";
		x.style.color = "#FFF";
		x.style.padding = "3%";
		x.style.borderRadius = "0%";
		x.style.borderStyle = "none";
		x.style.borderColor = "none";
	}
	if(slctd[8] == 1){
		bdBrg[0].style.background = "#FFF";
		bdBrg[0].style.color = "#000";
		bdBrg[0].style.padding = "4%";
		bdBrg[0].style.borderRadius = "2%";
		bdBrg[0].style.borderStyle = "solid";
		bdBrg[0].style.borderColor = "#000";
		bridge = "Floyd Rose";
		price[9] = 220.00;
	}
	else if(slctd[8] == 2){
		bdBrg[1].style.background = "#FFF";
		bdBrg[1].style.color = "#000";
		bdBrg[1].style.padding = "4%";
		bdBrg[1].style.borderRadius = "2%";
		bdBrg[1].style.borderStyle = "solid";
		bdBrg[1].style.borderColor = "#000";
		bridge = "Ponte trêmulo";
		price[9] = 150.00;
	}
	titles[8].innerHTML = `- Ponte: ${bridge}`;
	updateCost();
}

/*
Verifica se tudo foi selecionado
	Item não selecionado{
		Pinta a div de vermelho
		Define a execução do alerta
	}
	Item selecionado{
		Pinta a div de #434551
	}
	Se estiver definida a execução:
		Executa do alerta
	Senão{
		Pergunta ao usuário se ele deseja finalizar a compra
		Sim{
			Redireciona para o site do boleto
		}
		Não{
			Não faz nada
		}
	}
*/
function buy(){
	let er = false;
	for(let w = 0; w <= 8; w++){
		if(slctd[w] == 0){
			let wrp = document.getElementById(`Wr${w}`);
			wrp.style.background = "red";
			er = true;
		}
		else{
			let wrp = document.getElementById(`Wr${w}`);
			wrp.style.background = "#434551";
		}
	}
	if(er){
		window.alert("Itens não definidos");
	}
	else{
		if(window.confirm("Deseja comprar o projeto?")){
			window.open("Form.html")
		}
	}
}