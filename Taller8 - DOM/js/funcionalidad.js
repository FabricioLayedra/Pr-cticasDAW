function mostrarDocument() {
	/*DOM:Objeto document*/
	console.log(document);
}

function porIdentificador(id){
	console.log(document.getElementById(id));
}

function porEtiqueta(tag) {
	lista = document.getElementsByTagName(tag);
	console.log(lista);

	/*Mostrar el elementos en la posición 0 y 5*/
	console.log(lista[0])
	console.log(lista[5])
	
	/*Mostrar cada uno de los elementos*/
	for (var i = 0; i<lista.length ; i++){
		console.log(lista[i]);
	}

}

function porNombreDeClase(className) {
	lista = document.getElementsByClassName(className);
	console.log(lista);

	/*Mostrar cada uno de los elementos*/
	for (var i = 0; i<lista.length ; i++){
		console.log(lista[i]);
	}
}

function cambiarEstiloImagen() {
	/*Usando los selectores adecuados, cambie la clase de las imágenes a img-thumbnail*/
	lista = document.querySelectorAll(".caption img")
	
	for(let i = 0; i<lista.length; i++){
		lista[i].setAttribute("class","img-thumbnail")
	}
}

function cambiarInnerOutter() {
	/*por Id*/

	/*Inner*/


	/*Outer*/

}

function agregarPie() {
	/*crear un footer*/
	let footer = document.createElement('footer')
	/*let footer = $('<footer>');

	/*Agregar la clase: footer y text-center*/
	footer.setAttribute("class","footer text-center")
	/* set
	footer.attr('class', 'footer text-center')*/
	/*get 
	var clase = footer.attr('class')*/
	
	/*crear un p*/
	let p = document.createElement('p')

	/*crear texto: CinemaTu*/
	let text = document.createTextNode('CinemaTu')
	
	/*Agregar texto a p*/
	p.appendChild(text)
	
	/*agregar p a footer*/
	footer.appendChild(p)

	/*crear un texto con el año*/
	let year = document.createTextNode('2017')
	
	/*agregar el año al titulo antes del texto de CinemaTu*/
	p.insertBefore( year ,text)
	
	/*agregar el footer a contenedor principal*/
	let container = document.getElementById('contenedor-principal')
	container.appendChild(footer)
	
	/*reemplazar el innerElement del p por 2017 - CinemaTu */
	p.innerHTML = "2017 - CinemaTu"
	
	/*crear un nodo con texto con '2017 - CinemaTu' y reemplazar por titulo*/
	p.outerHTML = "<p> 2017 - CinemaTu </p>"
	
	/*remover el footer*/
	container.removeChild(footer)

}

function redirigir() {
	/*redirigr a http://www.google.com */
	
}

function metodoDarClick() {
	/*registrar a cada boton una reacción diferente*/
	
	var jumbotron = document.getElementsByClassName('jumbotron')
	jumbotron[0].onmouseover = function(){
		alert("¡Ganaste unas entradas!");
	}
	
}
 
function listenerDarClick() {
	/*registrar dos listeners al primer boton*/
	/*mostrar el titulo*/
	var titulos = document.querySelectorAll('h3.text-center');
	var botones = document.querySelectorAll('a.btn');
	for (var i = 0; i < botones.length; i++){
		let nombre = titulos[i].innerHTML;
		botones[i].addEventListener('click', function(){
		alert("Titulo de la Película: "+ nombre);
		})
	
	}
}
function mostrarAvances (){
	var mostrarAvance = document.getElementsByClassName('btn btn-primary');
	var nombresPelis = document.getElementsByClassName('text-center pelicula');
	for (var i = 0; i < mostrarAvance.length; i++){
		/*console.log(nombresPelis[i]);*/
		let texto = nombresPelis[i].innerHTML;
		mostrarAvance[i].onclick = function(){
			alert(texto);
		}
	}
}

function mostrarAvances_altern (){
	var botones = document.querySelectorAll('a.btn');
	for (var i = 0; i < botones.length; i++){
		/*console.log(nombresPelis[i]);*/
		abuelo = this.parentElement.parentElement;
		texto = abuelo.getElementsByTagName('h3')[0].innerHTML;
		alert(texto);
	}
}

window.onload = function() {
	metodoDarClick();
	mostrarAvances();
	/*cargar las dos últimas funciones*/
	
	$('#thumb1').click(function(){
		alert('click en la imagen');
		return false;
	});
	/*
	$('#thumb1').click(function(event){
		event.preventDefault();
		alert('click en la imagen');
		return false;
	});
	*/
	
	$('.caption').click(function(){
		alert('click en caption');
	});
}
