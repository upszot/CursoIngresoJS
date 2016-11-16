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
 	 var base;
 	 var altura;

 	 base = parseInt( document.getElementById('Largo').value );
 	 altura=parseInt( document.getElementById('Ancho').value);

 	 longitud_perimetro=  2 * (base + altura)   ;

 	alert ( "Cantidad de Alambre a comprar: " + (parseInt(longitud_perimetro) * cant_vueltas ) );
}

function Circulo () 
{ // perimetro circunsferencia 2pi * r

	
	longitud_perimetro= 2 * PI * ( parseInt( document.getElementById('Radio').value ) );

	console.log(longitud_perimetro)
    alert ( "Cantidad de Alambre a comprar: " + ( longitud_perimetro  * cant_vueltas ) );	

}

function Materiales () 
{//C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
 //     debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
	 var base;
 	 var altura;
	 var contrapiso; 	 

 	 base = parseInt( document.getElementById('Largo').value );
 	 altura=parseInt( document.getElementById('Ancho').value);

	contrapiso=base * altura;

	var RTA= 	"Para hacer el contrapiso se necesitan \n "  	+ 
				 ( 2 * contrapiso) + " Bolsas de cemento y \n " + 
				 ( 3 * contrapiso) + " Bolsas de Cal ";
	
	alert(RTA);
	
 	 //alert("cantidad de bolsas de cemento: " + ( 2 * contrapiso));
 	 //alert("cantidad de bolsas de cal: "     + ( 3 * contrapiso));

}