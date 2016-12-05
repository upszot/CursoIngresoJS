function Mostrar()
{


/*
var sexo = prompt("ingrese f ó m .");
while(sexo !='f' && sexo !='m') 
{
	sexo = prompt("Volver a ingresar un sexo valido (f / m )");
	
}
*/

do
{
	sexo = prompt("ingresar un sexo valido (f / m )");
}
while((sexo !='f') && (sexo !='m'))

document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN