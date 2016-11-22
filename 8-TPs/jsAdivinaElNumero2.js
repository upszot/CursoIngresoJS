/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	document.getElementById('intentos').value = contadorIntentos;

	if(numeroSecreto == Nro)
	{
		console.log("Acerto en el Intento: " + contadorIntentos);
		alert(Mensaje(contadorIntentos));
	}
	else
	{		
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


function MiRandom(Inicial, Maximo)
{// devuelve un Nro random entre el valor Inicial y el Maximo
	return parseInt((Math.random() * Maximo) + Inicial );
} // fin MiRandom

function Mensaje(CantIntentos)
{
	var sms;
	switch (CantIntentos)
	{
		case 1:
			sms="usted es un Psíquico";
			break;
		case 2:
			sms="excelente percepción";
			break;
		case 3:
			sms="Esto es suerte";
			break;
		case 4:
			sms="Excelente técnica";
			break;
		case 5:
			sms="usted está en la media";
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			sms="falta técnica";
			break;							
		default:
			sms="afortunado en el amor!!";
	}
	return sms;
}