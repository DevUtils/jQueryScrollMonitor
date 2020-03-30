# jQueryScrollMonitor

> Monitor browser scroll in percentage


## Live example

http://jsfiddle.net/marceloxp/7u0co37v/

## Usage

## HTML

```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset='utf-8'>
		<title>jQuery Simple Masks - Demo</title>
		<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
		<script type="text/javascript" src="../src/jquery.scrollMonitor.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>
		<style type="text/css">
			body
			{
				font-family: arial,helvetica;
				font-size: 12px;
			}
		</style>
	</head>
	<body>

		<div style="position: fixed; top: 20px; left: 20px;">
			<input type="text" name="lastShot" id="lastShot" style="width: 440px;">
			<br/><br/>
			<div id="divtest" style="width: 400px; height: 70px; border: 1px solid gray; padding: 20px; overflow-y: auto; ">
				Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
				É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).
				Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
			</div>
			<br/><br/><br/>
			<input type="text" name="lastWindowShot" id="lastWindowShot" style="width: 440px;">
		</div>

		<div style="height: 5000px;"></div>

	</body>
	</html>
```

## JS

```js
$(document).ready(function() {
	
	$(window).scrollMonitor
	(
		{
			oneShot: true,
			onTriggerPoint: function(e)
			{
				console.log('window scroll shot', e);
				$('#lastWindowShot').val('window scroll shot: ' + e);
			}
		}
	);

	$('#divtest').scrollMonitor
	(
		{
			oneShot: false,
			onTriggerPoint: function(e)
			{
				console.log('div element shot', e);
				$('#lastShot').val('div element shot: ' + e);
			}
		}
	);

});
```
