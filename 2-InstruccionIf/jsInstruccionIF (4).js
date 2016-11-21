function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value ;
edad=parseInt(edad);

if ((edad >= 13) && (edad<=17))
{
	alert("La persona se encuentra en el rango de edad de 13 a 17 años");
	//console.log("es mayor, ingreso: " & edad);
}
else
{
	console.log("Fuera de rango, Edad: " + edad);	
}

}//FIN DE LA FUNCIÓN
