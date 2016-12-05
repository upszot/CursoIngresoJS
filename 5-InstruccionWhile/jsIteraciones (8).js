function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta=='si')
	{
		var Nro=prompt("Ingrese un Nro: ");
		Nro=parseInt(Nro);
		
		if(Nro!=0)
		{
			if(Nro>0)
			{
				positivo+=Nro;
			}
			else
			{
				negativo=negativo*Nro;
			}
		}

		respuesta=prompt("Ingrese  (si) para continuar... ");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN