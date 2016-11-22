/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=MiRandom(1,3);
	if(eleccionMaquina==1) 	console.log("Maquina  - >  Piedra");
	if(eleccionMaquina==2) 	console.log("Maquina  - >  Papel");
	if(eleccionMaquina==3) 	console.log("Maquina  - >  Tijera");

}//FIN DE LA FUNCIÓN

function piedra()
{ // Piedra = 1
	alert("El ganador es: " + BuscaGanador_PiedraPapelTijera(eleccionMaquina,1) );	

}//FIN DE LA FUNCIÓN
function papel()
{// Papel = 2
	alert("El ganador es: " + BuscaGanador_PiedraPapelTijera(eleccionMaquina,2) );	

}//FIN DE LA FUNCIÓN
function tijera()
{ // Tijera = 3
	alert("El ganador es: " + BuscaGanador_PiedraPapelTijera(eleccionMaquina,3) );	

}//FIN DE LA FUNCIÓN

function MiRandom(Inicial, Maximo)
{// devuelve un Nro random entre el valor Inicial y el Maximo
	return parseInt((Math.random() * Maximo) + Inicial );
} // fin MiRandom

function BuscaGanador_PiedraPapelTijera(maquina,player)
{// piedra=1 	papel=2 	tijera=3

	if(maquina==player)
	{
		return "Empate";
	}
//----------------
	if((maquina==1) && (player==2))
	{//  piedra    		 papel
		return "El Jugador";
	}
	if((maquina==1) && (player==3))
	{//  piedra    		 tijera
		return "La maquina";
	}
//----------------
	if((maquina==2) && (player==3))
	{//  papel 			 tijera
		return "El Jugador";
	}
	if((maquina==2) && (player==1))
	{//   papel 		piedra
		return "La maquina";
	}
//----------------
	if((maquina==3) && (player==1))
	{// tijera 			 piedra
		return "El Jugador";
	}
	if((maquina==3) && (player==2))
	{// tijera 			 papel
		return "La maquina";
	}
} // fin function BuscaGanador_PiedraPapelTijera(maquina,player)