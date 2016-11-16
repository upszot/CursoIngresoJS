/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//id=Temperatura

var Temperatura_F;
var Temperatura_C;

function FahrenheitCentigrados () 
{ //C = (F-32) / 1,8

	Temperatura_F = parseInt(document.getElementById('Temperatura').value) ;
	Temperatura_C = (Temperatura_F -32) / 1.8;

	alert( Temperatura_F + "º Fahrenheit son " + Temperatura_C + "º centígrados");
}

function CentigradosFahrenheit () 
{// F = 1,8 C + 32
	Temperatura_C = parseInt(document.getElementById('Temperatura').value) ;
	Temperatura_F = 1.8 * Temperatura_C  + 32;

	alert( Temperatura_C +  "º Celsius son " + Temperatura_F + "º Fahrenheit" );	
}
