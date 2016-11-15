/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	alert( parseInt(document.getElementById('numeroUno').value) + parseInt(document.getElementById('numeroDos').value));

}

function restar()
{
	alert( parseInt(document.getElementById('numeroUno').value) - parseInt(document.getElementById('numeroDos').value));
}

function multiplicar()
{ 
	alert( parseInt(document.getElementById('numeroUno').value) * parseInt(document.getElementById('numeroDos').value));	
}

function dividir()
{
		alert( parseInt(document.getElementById('numeroUno').value) / parseInt(document.getElementById('numeroDos').value));
}
