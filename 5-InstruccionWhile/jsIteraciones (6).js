function Mostrar()
{

	var contador=0;
	var acumulador=0;

while(contador <5)
{

	var Nro=parseInt(prompt("Ingrese un Nro: "));
	acumulador=acumulador+Nro;

	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN