/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*

				<input type="text"  placeholder="Largo del terreno" id="Largo">
				<input type="text"  placeholder="Ancho del terreno" id="Ancho">
				<input type="text"  placeholder="Radio del terreno" id="Radio">
*/
var longitud_perimetro;
var cant_vueltas=3;
var PI= Math.PI;


function Rectangulo () 
{
 	 longitud_perimetro=  (parseInt( document.getElementById('Largo').value ) *2 ) +
 							 (parseInt( document.getElementById('Ancho').value)  *2 ) ;

 	alert ( "Cantidad de Alambre a comprar: " + (parseInt(longitud_perimetro) * cant_vueltas ) );
}

function Circulo () 
{ // perimetro circunsferencia 2pi * r
	longitud_perimetro= ( parseInt( document.getElementById('Radio') )  * 2 * PI);

    alert ( "Cantidad de Alambre a comprar: " + (parseInt(longitud_perimetro) * cant_vueltas ) );	

}

function Materiales () 
{
	
}