function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value ;
edad=parseInt(edad);

var TipoDePersona ="";

if ((edad >= 13) && (edad<=17))
{
	TipoDePersona="Adolescente";
}

if ((edad>18) && (TipoDePersona==""))
{
	TipoDePersona="Mayor de edad";
}

if((edad<13) && (TipoDePersona==""))
{
	TipoDePersona="Menor de 13";
}

alert("La persona es: " + TipoDePersona);

}//FIN DE LA FUNCIÓN