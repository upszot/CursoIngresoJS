function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);



switch(mesDelAño)
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("falta para el invierno");
		break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio!! ");
		break;
	default:
		alert("Ya paso el frio");
		break;

}

}//FIN DE LA FUNCIÓN