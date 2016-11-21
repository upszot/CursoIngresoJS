/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function MiRandom(Inicial, Maximo)
{// devuelve un Nro random entre el valor Inicial y el Maximo
	return parseInt((Math.random() * Maximo) + Inicial );
} // fin MiRandom

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = MiRandom(1,100);
    alert(numeroSecreto);
	
	contadorIntentos=0;
	document.getElementById('intentos').value = 0;

}

function verificar()
{	
	var Nro = document.getElementById('numero').value;
	contadorIntentos++;
	if(numeroSecreto == Nro)
	{
		alert("Usted es un ganador!!! y en solo X intentos");
	}
	else
	{
		document.getElementById('intentos').value = contadorIntentos;
		if(Nro > numeroSecreto)
		{
			alert("Te pasaste");
		}
		else
		{
			alert("Te quedaste corto");	
		}
	}
}
