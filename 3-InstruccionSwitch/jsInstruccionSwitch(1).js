function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

console.log("Mes del año seleccionado: " + mesDelAño);

switch(mesDelAño)
{
	case "Enero":
		alert("Que empieces bien el año!!");
		break;
	case "Marzo":
		alert("A clases...");
		break;
	case "Julio":
		alert("se vienen las vacaciones..");
		break;
	case "Diciembre":
		alert("Felices fiestas!!!");		
}

}//FIN DE LA FUNCIÓN