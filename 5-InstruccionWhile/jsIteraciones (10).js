function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var respuesta="si";

	var Contador_Positivos=0;
	var Contador_Negativos=0;
	var Contador_Ceros=0;
	var Contador_Pares=0;
	var Promedio_Positivos;
	var Promedio_Negativos;
	var Suma_Positivos=0;
	var Suma_Negativos=0;

	while(respuesta!="no")
	{
		var Nro=prompt("Ingrese un Nro: ");
		Nro=parseInt(Nro);
		
		if(Nro==0)
		{
			Contador_Ceros++;
		}
		else
		{
			if(Nro>0)
			{
				Suma_Positivos=Suma_Positivos+Nro;
				Contador_Positivos++;
			}
			else
			{
				Suma_Negativos=Suma_Negativos+Nro;
				Contador_Negativos++;
			}

			if(Nro % 2 == 0)
			{//Numero es par
				Contador_Pares++;
			}
		}// if(Nro==0)




		respuesta=prompt("Ingrese  (no) para Terminar... ");
	}

document.write("<br> 1. Suma de los Negativos: " + Suma_Negativos);
document.write("<br> 2. Suma de los Positivos: " + Suma_Positivos);
document.write("<br> 3. La cantidad de numeros positivos es: " + Contador_Positivos);
document.write("<br> 4. La cantidad de numeros negativos es: " + Contador_Negativos);
document.write("<br> 5. Cantidad de Nros 0: " + Contador_Ceros);
document.write("<br> 6. Cantidad de Nros Pares: " + Contador_Pares);
document.write("<br> 7. Promedio de Positivos: " + (Suma_Positivos/Suma_Positivos) );
document.write("<br> 8. Promedio de Negativos: " + (Suma_Negativos/Suma_Negativos) );
document.write("<br> 9. Diferencia entre positivos y negativos: " + (Suma_Positivos - Suma_Negativos));

}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/