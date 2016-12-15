

function inicio()
{	
	var Nro;
	Nro=parseInt(prompt("ingrese Nro de ejercicio a probar: "));
	switch(Nro)
	{
		case 1:
			Nivel_1_1();
			break;
		case 2:
			Nivel_1_2();
			break;
		case 3:
			Nivel_1_3();
			break;
		case 4:
			Nivel_2_4();
			break;
		case 5:
			Nivel_2_5();
			break;
		case 6:
			Nivel_3_6();
			break;
		case 7:
			Nivel_3_7();
	}

}//fin inicio



// --------------------------- Nivel 1 -----------------------------
function Nivel_1_1()
{
	var BaseCuadrado=parseInt(document.getElementById('base').value);
	alert("El perimetro del cuadrado es: " + (BaseCuadrado * 4));
}

function Nivel_1_2()
{
	var importe;
	var importe_iva;

	importe=prompt("Ingrese el importe del producto: ");
	importe_iva = importe + (importe*21/100 );
	alert("El importe final es: " + importe_iva);
}

function Nivel_1_3()
{
	var largo= parseInt( document.getElementById('largo').value);
	var ancho= parseInt( document.getElementById('ancho').value);
	var perimetro;
	var cantidad_vueltas=3;

	perimetro=( (largo*2) + (ancho *2) );
	alert("Se necesitaran " + ( perimetro * cantidad_vueltas) + " Metros de alambre");
}

/*
Nivel 1 (entrada y salida de datos)
1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.
2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
sumándole el IVA (21%).
3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.
*/

// --------------------------- Nivel 2 -----------------------------
function Nivel_2_4()
{
	var Numero1;
	var Numero2;
	var Resultado;

	numero1=parseInt( prompt("Ingrese valor para el 1er Nro: ") );
	numero2=parseInt( prompt("Ingrese valor para el 2do Nro: ") );

	if(Numero1==Numero2)
	{
		Resultado= Numero1 * Numero2;
	}
	else
	{
		if(Numero1>Numero2)
		{
			Resultado= Numero1 - Numero2;
		}
		else
		{
			Resultado= Numero1 + Numero2;	
		}
	} //if(Numero1==Numero2)
	document.write(Resultado);
}

function Nivel_2_5()
{
	var Dia;
	Dia=prompt("Ingrese dia de la semana: ");
	switch(Dia)
	{
		case "Sabado":
		case "Domingo":
			alert("es fin de semana");
			break;
		default:
			alert("a trabajar !!!");
	}
}

/*
Nivel 2 (instrucción IF, SWITCH)
4- (IF) realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, si el
primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.

5- (SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o “Domingo”
informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .
*/

// --------------------------- Nivel 3 -----------------------------

function Nivel_3_6()
{	
	var importe=[];
	var dia;
	var Importe_Mayor_Menor=[];

	// posicion 0 para  el mayor y posicion 1 para  el menor
	Importe_Mayor_Menor[0]=0;
	Importe_Mayor_Menor[1]=0;

	for (dia=0 ; dia<24 ; dia++)
	{
		importe[dia]=valida_impote();
	}
	
	Importe_Mayor_Menor=BuscarDiaImporte(importe);

	alert("El importe mayor corresponde al dia: " + Importe_Mayor_Menor[0] + " y es: $ " + importe[Importe_Mayor_Menor[0]]);

	alert("El importe menor corresponde al dia: " + Importe_Mayor_Menor[1] + " y es: $ " + importe[Importe_Mayor_Menor[1]]);

}

function valida_impote()
{
	do
		importe=prompt("Ingrese el importe de las ventas (mayor que 0): ");
	while(importe < 0)

	return importe;
}

function BuscarDiaImporte(importe)
{
	var dia_del_importe_mayor=0;
	var dia_del_importe_menor=0;
	var aux=[];
	//aux lo voy a usar en la posicion 0 para retornar el mayor y posicion 1 para retornar el menor
	aux[0]=0;
	aux[1]=0;
	var i;

	for(i=0 ; i<24 ; i++)
	{
		if( importe[i] > importe[dia_del_importe_mayor] )
		{
			dia_del_importe_mayor=i;
		}

		if(importe[i] < dia_del_importe_menor)
		{
			dia_del_importe_menor=i;
		}
	}
	aux[0]=dia_del_importe_mayor;
	aux[1]=dia_del_importe_menor;
	return aux;
}
/*
Nivel 3 (iteraciones – validaciones-máximos y mínimos)

6- realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”) de los 24 días
hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y cuál fue el menor
importe de venta.
*/

function Nivel_3_7()
{
	var ListaAlumnos=[];
	var cantidad_alumnos=3;

	for(var i =0 ; i< cantidad_alumnos; i++)
	{
		ListaAlumnos[i]=Valida_Alumnos();
	}//for(var i =0 ; i< cantidad_alumnos; i++)
	
	alert("El Promedio de las Notas totales es: " +  PromedioNotas(ListaAlumnos, cantidad_alumnos) );
	alert("La menor nota es: " +  El_burro(ListaAlumnos, cantidad_alumnos) );
	alert("Cantidad de varones con nota mayor que 5: " +  Cantidad_Varones_Nota_Mayor6(ListaAlumnos, cantidad_alumnos) );
	
}

function Valida_Alumnos()
{
	var Nota;
	var Sexo;
	
	var Alumno ={};
	do
		Nota=parseInt(prompt("Ingrese la nota del alumno (entre 0 y 10): "));
	while((Nota < 0) || (Nota >10))

	do
		Sexo=prompt("Ingrese el Sexo del alumno (F/M): ");
	while((Sexo !='F') && (Sexo !='M'))

	Alumno.Nota=Nota;
	Alumno.Sexo=Sexo;
	
	return Alumno;
}

function PromedioNotas(Listado,Cantidad)
{
	var AcumuladorNotas=0;
	var Promedio;
	for(var i=0;i<Cantidad;i++)
	{
		AcumuladorNotas+=Listado[i].Nota;
	}
	Promedio=AcumuladorNotas/Cantidad;

	return Promedio
}

function El_burro(Listado,Cantidad)
{
	var MenorNota;
	for(var i=0;i<Cantidad;i++)
	{
		if((Listado[i].Nota < MenorNota) || (i==0))
		{
			MenorNota=Listado[i].Nota;
		}		
	}
	return MenorNota;
}
function Cantidad_Varones_Nota_Mayor6(Listado,Cantidad)
{
	var Contador=0;
	for(var i=0;i<Cantidad;i++)
	{
		if((Listado[i].Nota >=6) && (Listado[i].Sexo == 'M'))
		{
			Contador++;
		}		
	}
	return Contador;
}
/*

Nivel 3 (iteraciones – validaciones-máximos y mínimos)

7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

// --------------------------- Nivel 4 -----------------------------

/*
Nivel 4
8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo
*/