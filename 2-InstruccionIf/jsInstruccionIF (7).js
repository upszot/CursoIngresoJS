
/*
<select id="estadoCivil">
<option value="Soltero"> Soltero </option>
<option value="Casado"> Casado </option>
<option value="Divorciado"> 
*/	

function Mostrar()
{
//tomo la edad  

var edad=document.getElementById('edad').value ;
edad=parseInt(edad);

var estadoCivil=document.getElementById('estadoCivil').value;
var mensaje = 'Es mayor de edad';

if(edad <18)
{ // si es menor de edad
	switch (estadoCivil)
	{
		case 'Soltero':
			mensaje='Esta bien todavia juega con muñecas';
			break;

		case 'Casado':
			mensaje='Es muy pequeño para NO ser soltero.';
			break;
	}
} // fin del if (edad<18)

	alert(mensaje);

} //fin function Mostrar()

