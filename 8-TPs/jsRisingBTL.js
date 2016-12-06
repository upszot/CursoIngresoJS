/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
 	var dato=[];
 	var i;

 	for (i=0 ; i<6 ; i++)
 	{
 		do
 		{
 			dato[i]=prompt(DatoPedido(i));
 		}while(ValidaDato(dato[i],i))
 	}

 	CargaHTML(dato);

}

function DatoPedido(opcion)
{
	var sms;
	switch (opcion)
	{
		case 0:
			sms="Ingrese la Edad (entre 18 y 90 años inclusive): "
			break;
		case 1:
			sms="Ingrese la Sexo (F/M): "
			break;
		case 2:
			sms="Ingrese la EstadoCivil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos): "
			break;
		case 3:
			sms="Ingrese la Sueldo (no menor a 8000): "
			break;
		case 4:
			sms="Ingrese la Legajo: "
			break;
		case 5:
			sms="Ingrese la Nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados): "
			break;									
	}
	return sms;
}

function ValidaDato(dato,opcion)
{
	var Valido=true;

	switch (opcion)
	{
		case 0:		
			//0 sms="Ingrese la Edad: "	 A.	Edad, entre 18 y 90 años inclusive. 	
			dato=parseInt(dato);
			if((dato > 17) && (dato < 91))
			{
				Valido=false;
			}
			break;
		case 1:
			//sms="Ingrese la Sexo: " B.	Sexo, “M” para masculino y “F” para femenino 
			if((dato=='F')||(dato=='M'))
			{
				Valido=false;
			}
			break;
		case 2:
			//sms="Ingrese la EstadoCivil: " C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos 
			dato=parseInt(dato);
			if((dato > 0) && (dato < 5))
			{
				Valido=false;
			}
			break;
		case 3:
			//3 sms="Ingrese la Sueldo: " 
			dato=parseInt(dato);
			if(dato > 8000)
			{
				Valido=false;
			}
			break;
		case 4:
			//4 sms="Ingrese el Legajo: "
			//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. 
			dato=parseInt(dato);

			if ((dato > 999 ) && (dato < 10000))
			{
				Valido=false;
			}
			break;
		case 5:
			//sms="Ingrese la Nacionalidad: "
			if ((dato=='A') || (dato=='E') || (dato=='N') )
			{//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
				Valido=false;				
			}
			break;									
	}
	return Valido;
}

function CargaHTML(dato)
{
	var Dato_Procesado;
	 for (i=0 ; i<6 ; i++)
	 {
	 	if (i==0 || i==3 || i==4)
	 	{
	 		Dato_Procesado=parseInt(dato[i]);	 		
	 	}
	 	else
	 	{
	 		if (i==2)
	 		{// estado civil
	 			Dato_Procesado=parseInt(dato[i]);
	 			switch (Dato_Procesado)
	 			{//Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	 				case 1:
	 					Dato_Procesado="soltero";
	 					break;
	 				case 2:
	 					Dato_Procesado="casados";
	 					break;
	 				case 3:
	 					Dato_Procesado="divorciados";
	 					break;	 					
	 				case 4:
	 					Dato_Procesado="viudos";
	 					break;	 	 					
	 			}

	 		}
	 		else
	 		{
	 			Dato_Procesado=dato[i];
	 		}		
	 	}

	 	switch (i)
	 	{
	 		case 0:
	 			document.getElementById('Edad').value=Dato_Procesado;
	 			break;
	 		case 1:
	 			document.getElementById('Sexo').value=Dato_Procesado;
	 			break;
	 		case 2:
	 			document.getElementById('EstadoCivil').value=Dato_Procesado;
	 			break;
	 		case 3:
	 			document.getElementById('Sueldo').value=Dato_Procesado;
	 			break;
	 		case 4:
	 			document.getElementById('Legajo').value=Dato_Procesado;
	 			break;
	 		case 5:
	 			document.getElementById('Nacionalidad').value=Dato_Procesado;
	 			break;
	 	}
	 		
	 } //fin for
}

/*
Enunciado:
Rising BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente
 (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 12. Los datos requeridos son los siguientes: 
A.	Edad, entre 18 y 90 años inclusive. 
B.	Sexo, “M” para masculino y “F” para femenino 
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos 
D.	Sueldo bruto, no menor a 8000. 
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda. 
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.


				<input type="text" readonly placeholder="Edad validada" id="Edad">
				<input type="text" readonly placeholder="Sexo validado" id="Sexo">
				<input type="text" readonly placeholder="Estado civil validado" id="EstadoCivil">
				<input type="text" readonly placeholder="Sueldo bruto validado" id="Sueldo">
				<input type="text"  readonly placeholder="Lejago validado" id="Legajo">
				<input type="text"  readonly placeholder="Nacionalida validada" id="Nacionalidad">

*/