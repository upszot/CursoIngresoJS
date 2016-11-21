function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value ;
edad=parseInt(edad);

if (edad >= 21)
{
	alert("La persona es mayor de edad");
	//console.log("es mayor, ingreso: " & edad);
}
else
{
	alert("La persona es menor de edad");
	//console.log("es menor, ingreso: " & edad);
}

}//FIN DE LA FUNCIÓN