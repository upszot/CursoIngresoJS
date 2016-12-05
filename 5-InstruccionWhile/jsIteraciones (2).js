function Mostrar()
{
	var contador=0;
	var Nro=10;
	document.write("<h2> Bienvenidos </h2>");

	while(contador<10)
	{
		//alert("El numero es: " + Nro);
		document.write("<br>El contador es: " + Nro);
		contador++;
		Nro--;		

	}

	document.write("<h2> El que queria el profe ;-) </h2>");
	Nro=10;
	while(Nro>0)
	{
		//alert("El numero es: " + Nro);
		document.write("<br>El contador es: " + Nro);
		Nro--;		

	}
	document.write("<h4><p> Termino </p></h4>");
}//FIN DE LA FUNCIÓN