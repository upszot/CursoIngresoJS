/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo=parseInt( document.getElementById('numeroDividendo').value);

	var divisor=parseInt( document.getElementById('numeroDivisor').value);

   	var rta = parseInt(dividendo%divisor);

	alert( "Modulo: " + dividendo%divisor);
	alert( "Modulo con rta: " + rta);

}
