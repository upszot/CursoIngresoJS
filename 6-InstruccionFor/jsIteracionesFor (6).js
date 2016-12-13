function Mostrar()
{
	
	console.clear()
	var ContadorNro=[];
	var PorcentajeNro=[];
	inicializa_vector(ContadorNro,10);
	inicializa_vector(PorcentajeNro,10);

	var NroRandom;
	var CantidadRandom=100000;
	
	var Total=0;
	var ContadorPar=0;
	var ContadorImpar=0;
	var Acumulador_Pares=0;
	var Acumulador_Impares=0;
	
	var Aparicion=-9;

	for(var i=0 ; i<CantidadRandom;i++)
	{	
		//console.log("Mi Nro Random: " + (i+1) +" es: "+ MiRandom(1,10));
		NroRandom=MiRandom(1,10);
		switch (NroRandom)
		{
			case 1:
				//ContadorNro1++;
				ContadorNro[0]++;
				break;
			case 2:
				//ContadorNro2++;
				ContadorNro[1]++;
				break;
			case 3:
				//ContadorNro3++;
				ContadorNro[2]++;
				break;
			case 4:
				//ContadorNro4++;
				ContadorNro[3]++;
				break;				
			case 5:
				//ContadorNro5++;
				
				//porcentaje= contador / total * 100
				var porcentaje_de_5= ContadorNro[4] / CantidadRandom * 100;
				if(porcentaje_de_5 < 7)
				{
					ContadorNro[4]++;
				}
				else
				{
					i--;
					continue;
				}
				
				break;
			case 6:
				//ContadorNro6++;
				ContadorNro[5]++;
				break;
			case 7:
				//ContadorNro7++;
				ContadorNro[6]++;
				break;												
			case 8:
				//ContadorNro8++;
				ContadorNro[7]++;
				break;
			case 9:
				//ContadorNro9++;
				ContadorNro[8]++;
				break;
			case 10:
				//ContadorNro10++;
				ContadorNro[9]++;
				break;												
		}//switch (MiRandom(1,10))

		if(NroRandom %2 == 0)
		{
			ContadorPar++;
			Acumulador_Pares+=NroRandom;
		}
		else
		{
			ContadorImpar++;
			Acumulador_Impares+=NroRandom;
		}

		//Aparicion=En_que_Nro_Aparecieron_todos_los_Nros(ContadorNro,10,i);
		if(Aparicion ==-9 )
		{
			Aparicion=En_que_Nro_Aparecieron_todos_los_Nros(ContadorNro,10,i);
		}

	}//for(var i=0 ; i<100;i++)
	//console.log("El Nro 1 salio: " );

	Total=Suma_cantidad_NrosRandom(ContadorNro,10);
	console.log("La cantidad de Nros random generados es: " + Total);

	//MostrarCantidad(ContadorNro,10);
	Porcentaje_Nro(ContadorNro,10,Total);
	console.log("Cantidad de Nros Pares: " + ContadorPar);
	console.log("Cantidad de Nros Impares: " + ContadorImpar);
	console.log("Acumulador_Pares: " + Acumulador_Pares + " Acumulador_Impares: " + Acumulador_Impares);
	console.log("Se encontraron todos los nros en la vuelta Nro: " + Aparicion);

}//FIN DE LA FUNCIÓN

function MiRandom(Inicial, Maximo)
{// devuelve un Nro random entre el valor Inicial y el Maximo
	return parseInt((Math.random() * Maximo) + Inicial );
} // fin MiRandom

function inicializa_vector(vector, tamaño)
{
	for(var i =0 ;i<tamaño ;i++)
	{
		vector[i]=0;
	}
}

function MostrarCantidad(vector,tamaño)
{
	for (var i=0 ; i < tamaño;i++)
	{
		console.log("Salio el Nro " + (i+1) + " ,  " + vector[i] + " veces" );
	}
}
function Suma_cantidad_NrosRandom(vector,tamaño)
{
	var Cantidad=0;
	for(var i = 0 ; i<tamaño ; i++)
	{
		Cantidad=Cantidad+vector[i];
	}
	return Cantidad;
}
//PorcentajeNro

function Porcentaje_Nro(vector,tamaño,Total)
{

	for (var i=0 ; i < tamaño;i++)
	{
		console.log("Salio el Nro " + (i+1) + " ,  " + vector[i] + " veces, que es un: " + (vector[i] / Total) +  " %" );
	}
	
}

function En_que_Nro_Aparecieron_todos_los_Nros(vector,tamaño, contador)
{
	var flag=0;
	var tirada;

	for(var i = 0 ; i<tamaño ; i++)
	{
		if(vector[i] >0)
		{
			flag++;
		}
	}

	if (flag==10)
	{
		tirada=contador;
	}
	else
	{
		tirada=-9;
	}
	return tirada;
}