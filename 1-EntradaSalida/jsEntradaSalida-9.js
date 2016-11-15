/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
 // sueldo
 // resultado

  var porcentaje=prompt("Ingrese % a calcular");
  var sueldo = parseInt(document.getElementById('sueldo').value);
  var rta = sueldo + (sueldo * porcentaje /100);

 //var rta = parseInt( document.getElementById('sueldo').value  * 1.1)
 //alert(rta); 
 document.getElementById('resultado').value= rta;

	
}
