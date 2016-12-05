function Mostrar()
{

	var contador=0;
	// declarar variables
	var Mayor=0;
	var Menor=0;
	var respuesta='si';
	var flag=0;

	while(respuesta!='no')
	{
		var Nro=prompt("Ingrese un Nro: ");
		Nro=parseInt(Nro);

		if(flag==0)
		{
			Mayor=Nro;	
			Menor=Nro;	
			flag=1;
		}

		if(Nro>Mayor)
		{
			Mayor=Nro;
		}

		if(Nro<Menor)
		{
			Menor=Nro;
		}

		respuesta=prompt("Ingrese  (no) para Terminar... ");
	}
	document.getElementById('maximo').value=Mayor;
	document.getElementById('minimo').value=Menor;


}//FIN DE LA FUNCIÓN