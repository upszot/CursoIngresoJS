function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=='si')
	{
		var Nro=prompt("Ingrese un Nro: ");
		Nro=parseInt(Nro);
		acumulador=acumulador+Nro;
		contador++;
		respuesta=prompt("Ingrese  (si) para continuar... ");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN