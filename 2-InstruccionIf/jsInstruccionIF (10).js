function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		//var numero= parseInt((Math.random() * 10) +1 );
		var numero = MiRandom(1,10);
	
	if(numero >=9)
	{
		alert("Sacaste un: " + numero + " EXCELENTE");
	}
	else
	{
		if(numero >4)
		{
			alert("Sacaste un: " + numero + " Aprobo");
		}
		else
		{
			alert("Sacaste un: " + numero + " Vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN

function MiRandom(Inicial, Maximo)
{// devuelve un Nro random entre el valor Inicial y el Maximo
	return parseInt((Math.random() * Maximo) + Inicial );
} // fin MiRandom
