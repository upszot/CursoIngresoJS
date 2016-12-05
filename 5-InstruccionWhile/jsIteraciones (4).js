function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while((numero >9 ) || (numero <0))
	{
		numero = prompt("Re-ingrese un número entre 0 y 9.");
	}
	alert ("El numero es correcto");

}//FIN DE LA FUNCIÓN