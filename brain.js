var selectGuitar = 0;	//Guitarra selecionada;

var stratoBG = document.getElementById("st");		//Figure da stratocaster
var lesPaulBG = document.getElementById("lp");		//Figure da les paul
var teleBG = document.getElementById("tl");			//Figure da telecaster
var sgBG = document.getElementById("sg");			//Figure da sg
var info = document.getElementById("information");	//Aside
var nx = document.getElementById("stPrj");			//Botão


function sel(g){			//Função de seleção [ativa clicando nas figures]
	if(selectGuitar != g){	//Se o usuário selecionar uma guitarra diferente da anterior:
		selectGuitar = g;	//Atualize para a nova
	}
	else{					//Se for a mesma
		selectGuitar = 0;	//Deselecione a guitarra
	}

	if(selectGuitar == 0){				//Se nenhuma guitarra estiver selecionada
		nx.style.background = "#FFA";	//Pinta o botão de #FFFFAA
		nx.style.opacity = "0.4";		//40% de opaciadade
	}
	else{								//Se alguma guitarra estiver selecionada
		nx.style.background = "#FF3";	//Pinta o botão de #FFFF33
		nx.style.opacity = "0.75";		//75% de opaciadade
	}
	//Pinta o fundo de todas as figuras de #99999
	stratoBG.style.background = "#999";
	lesPaulBG.style.background = "#999";
	teleBG.style.background = "#999";
	sgBG.style.background = "#999";
	if(selectGuitar == 1){					//Se a stratocaster for selecionada
		stratoBG.style.background = "#FFF"; //Pinta o fundo da figura da stratocaster de #99999
		info.innerHTML = `
		<h3 id="asTitle">Stratocaster</h3><br/><br/><br/>
		<h4 id="asSubtitle">Resumo: </h4>
		<p id="asTopic">&nbsp;&nbsp;A Stratocaster surgiu em 1954, uma obra prima que saiu 
		das mãos do inventor Leo Fender. Este novo modelo de guitarra trouxe, na época, 
		muitas inovações para o instrumento, como um novo design que foi baseado em opiniões 
		de músicos profissionais, equipe da Fender e do criador Leo Fender, e trouxe mais conforto 
		e melhor tocabilidade para os guitarristas.<br/>
		&nbsp;&nbsp;Uma das grandes novidades da Stratocaster foi a inserção de um terceiro 
		captador, que proporcionou maior diversidade de texturas e timbres.
		A maior inovação desse modelo foi, sem dúvidas, o lançamento de um novo tipo de ponte 
		com vibrato, chamada “tremolo bridge”. Essa ponte foi criada para permitir que os 
		guitarristas pudessem fazer bends nas cordas, alcançando uma sonoridade semelhante 
		ao som do efeito do pedal das guitarras Steel, instrumento muito popular na Country 
		Music da época.<br/>
		&nbsp;&nbsp;O modelo de guitarra Stratocaster sofreu pequenas alterações desde o 
		projeto de 54, e com certeza revolucionou a música popular. É uma das guitarras mais 
		conhecidas e influentes, escolhida por guitarristas de todos os níveis e estilos musicais. 
		Seu timbre é muito versátil, e até hoje é apreciado e respeitado pelos fãs de guitarra 
		em todo o mundo.</p><br/><br/>
		<h4 id="asSubtitle">Características: </h4>
		<p id="asTopic">⋅ Ataques com bastante presença;</p>
		<p id="asTopic">⋅ Timbre brilhante;</p>
		<p id="asTopic">⋅ Som estalado;</p><br/><br/>
		<h4 id="asSubtitle">Estilos: </h4>
		<p id="asTopic">⋅ Serve para todos os estilos de música;</p><br/><br/>
		<h4 id="asSubtitle">Músicos: </h4>
		<p id="asTopic">⋅ Buddy Guy - BUDDY GUY;</p>
		<p id="asTopic">⋅ David Gilmour - PINK FLOYD;</p>
		<p id="asTopic">⋅ Edu Ardanuy - DR. SIN;</p>
		<p id="asTopic">⋅ Eric Clapton - ERIC CLAPTON;</p>
		<p id="asTopic">⋅ Eric Johnson - ERIC JOHNSON;</p>
		<p id="asTopic">⋅ Jimi Hendrix - THE JIMI HENDRIX EXPERIENCE;</p>
		<p id="asTopic">⋅ Jeff Beck - JEFF BECK;</p>
		<p id="asTopic">⋅ Mark Knopfler - DIRE STRAITS;</p>
		<p id="asTopic">⋅ Richie Blackmore - DEEP PURPLE;</p>
		<p id="asTopic">⋅ Stevie Ray Vaughan - STEVIE RAY VAUGHAN;</p>
		<p id="asTopic">⋅ Yngwie Malmsteen - YNGWIE MALMSTEEN;</p>`;
		//Retorna ao aside no HTML as informações da guitarra
	}
	else if(selectGuitar == 2){					//Se a les paul for selecionada
		lesPaulBG.style.background = "#FFF";	//Pinta o fundo da figura da les paul de #99999
		info.innerHTML = `
		<h3 id="asTitle">Les Paul</h3><br/><br/><br/>
		<h4 id="asSubtitle">Resumo: </h4>
		<p id="asTopic">&nbsp;&nbsp;A Les Paul é uma guitarra com uma construção muito peculiar, 
		por isso ela tem características únicas de timbre, sendo um modelo versátil, mas não tanto 
		como a Stratocaster.<br/>
		&nbsp;&nbsp;Indiscutivelmente, é o modelo que representa de forma mais enfática o Rock pesado.
		Uma das marcas mais fortes dela é a “mordida”. Este som acontece quando a palheta encosta na 
		corda, na hora do solo com o drive ligado. Toda a sua construção e a parte elétrica 
		contribuem para que este som aconteça. Podemos dizer que num solo feito numa Les Paul, 
		cada palhetada com o drive ligado é uma “pancada”! Dá uma impressão que se arrancou um 
		pedaço de alguma coisa, daí a ideia de mordida. Deve se notar que tal sonoridade é conseguida 
		no captador da ponte. Nas outras posições da chave este aspecto do som fica menos evidente.
		<h4 id="asSubtitle">Características: </h4>
		<p id="asTopic">⋅ Corpo pesado;</p>
		<p id="asTopic">⋅ Timbre gordo;</p>
		<p id="asTopic">⋅ Sustein Exelente;</p><br/><br/>
		<h4 id="asSubtitle">Estilos: </h4>
		<p id="asTopic">⋅ Metal;</p>
		<p id="asTopic">⋅ Rock;</p><br/><br/>
		<h4 id="asSubtitle">Músicos: </h4>
		<p id="asTopic">⋅ George Harrison - THE BEATLES;</p>
		<p id="asTopic">⋅ Gibb Brothers - BEE GEES;</p>
		<p id="asTopic">⋅ Jimmy Page - LED ZEPPELIN;</p>
		<p id="asTopic">⋅ Joe Perry - AEROSMITH;</p>
		<p id="asTopic">⋅ John Norum - EUROPE;</p>
		<p id="asTopic">⋅ John Sykes - WHITE SNAKE;</p>
		<p id="asTopic">⋅ Les Paul (criador) - LES PAUL;</p>
		<p id="asTopic">⋅ Randy Roads - OZZY OSBOURNE;</p>
		<p id="asTopic">⋅ Slash - GUNS N' ROSES;</p>
		<p id="asTopic">⋅ Zakk Wylde - BLACK LABEL SOCIETY;</p>`;
		//Retorna ao aside no HTML as informações da guitarra
	}
	else if(selectGuitar == 3){				//Se a telecaster for selecionada
		teleBG.style.background = "#FFF";	//Pinta o fundo da figura da telecaster de #99999
		info.innerHTML = `
		<h3 id="asTitle">Telecaster</h3><br/><br/><br/>
		<h4 id="asSubtitle">Resumo: </h4>
		<p id="asTopic">&nbsp;&nbsp;Em 1948, foi projetado por Leo Fender um modelo de guitarra 
		de corpo maciço que possuía apenas um captador na posição da ponte. Esse modelo, lançado 
		em 1950, era conhecido como Esquire. No mesmo ano, o modelo foi modificado e produzido com 
		um captador na posição braço, além do que a guitarra já possuía na posição ponte. 
		Esse novo formato recebeu o nome de “Dual-Esquire”.<br/>
		&nbsp;&nbsp;Por serem modelos de guitarra que não possuíam tensor para a regulagem do 
		braço do instrumento,a maioria das guitarras estavam sendo devolvidas por reclamações de 
		empenamento no braço. Leo Fender lançou a guitarra dessa maneira, pois acreditava que 
		seria mais fácil trocar o braço dos instrumentos que ocorressem esse problema. 
		Por isso, a “Dual Esquire” foi relançada com tensor no braço e ganhou um novo nome: 
		“Broadcaster”. Porém, esse nome novo não durou muito tempo, pois a marca “Gretsch” possuía 
		uma linha de baterias com o nome de “Broadkaster”. Então finalmente, em 1951, a guitarra 
		ganhou o nome de
		“Telecaster”, e possui esse nome até os dias atuais.
		<h4 id="asSubtitle">Características: </h4>
		<p id="asTopic">⋅ Som presente;</p>
		<p id="asTopic">⋅ Timbre marcante;</p>
		<p id="asTopic">⋅ Corpo sólido;</p><br/><br/>
		<h4 id="asSubtitle">Estilos: </h4>
		<p id="asTopic">⋅ Country;</p>
		<p id="asTopic">⋅ Rock;</p><br/><br/>
		<h4 id="asSubtitle">Músicos: </h4>
		<p id="asTopic">⋅ Albert Collins - ALBERT COLLINS;</p>
		<p id="asTopic">⋅ James Burton - JAMES BURTON;</p>
		<p id="asTopic">⋅ John Frusciante - RED HOT CHILLI PEPPERS;</p>
		<p id="asTopic">⋅ Keith Richards - KEITH RICHARDS;</p>
		<p id="asTopic">⋅ Mick Jagger - ROLLING STONES;</p>
		<p id="asTopic">⋅ Muddy Waters - MUDDY WATERS;</p>
		<p id="asTopic">⋅ Noel Gallagher - OASIS;</p>`;
		//Retorna ao aside no HTML as informações da guitarra
	}
	else if(selectGuitar == 4){			//Se a sg for selecionada
		sgBG.style.background = "#FFF";	//Pinta o fundo da figura da sg de #99999
		info.innerHTML = `
		<h3 id="asTitle">Solid Guitar</h3><br/><br/><br/>
		<h4 id="asSubtitle">Resumo: </h4>
		<p id="asTopic">&nbsp;&nbsp;Em meados dos anos 1960, a Gibson começou a notar uma queda 
		nas vendas do modelo Les Paul. Algumas críticas assolavam o famoso modelo da marca. 
		Entre elas, vale destacar o peso do instrumento e a dificuldade de tocar usando as casas 
		dos últimos trastes.<br/>
		&nbsp;&nbsp;Com isso, a empresa lançou a Les Paul SG, que mais tarde passou a se chamar 
		apenas SG. A guitarra foi projetada para solucionar esses “problemas” que algumas pessoas 
		enxergavam na Les Paul. O nome SG vem das iniciais das palavras solid guitar (guitarra sólida).
		<h4 id="asSubtitle">Características: </h4>
		<p id="asTopic">⋅ Corpo leve;</p>
		<p id="asTopic">⋅ Som gordo-médio;</p>
		<p id="asTopic">⋅ Sustein bom;</p><br/><br/>
		<h4 id="asSubtitle">Estilos: </h4>
		<p id="asTopic">⋅ Blues;</p>
		<p id="asTopic">⋅ Metal;</p>
		<p id="asTopic">⋅ Rock;</p><br/><br/>
		<h4 id="asSubtitle">Músicos: </h4>
		<p id="asTopic">⋅ Angus Young - AC/DC;</p>
		<p id="asTopic">⋅ Daniel Johns - SILVERCHAIR;</p>
		<p id="asTopic">⋅ Duanne Allman - ALMAN BROTHERS;</p>
		<p id="asTopic">⋅ Eddie Vedder - PEARL JAM;</p>
		<p id="asTopic">⋅ Eric Clapton (início) - CREAM;</p>
		<p id="asTopic">⋅ Jimmy Page (double neck) - LED ZEPPELIN;</p>
		<p id="asTopic">⋅ Tony Iommi - BLACK SABBATH;</p>`;
		//Retorna ao aside no HTML as informações da guitarra
	}
	else{						//Se nenhuma guitarra estiver selecionada
		info.innerHTML = "";	//Limpe a seção do aside
	}
}

function startProject(g){									//Função de conclusão [ativa em stPrj]
	if(g != 0){												//Se alguma guitarra estiver selecionada
		window.open(`SubSites/Guitar${g}.html`);			//Abra o ite respectivo à aquela guitarra
	}
	else{													//Se nenhuma guitarra estiver selecionada
		window.alert("Selecione um modelo de guitarra");	//Alerta: "Selecione um modelo de guitarra"
	}
}