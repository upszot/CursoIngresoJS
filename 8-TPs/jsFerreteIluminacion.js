/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
 id="Cantidad"
 id="precioDescuento"
 id="Marca"
		ArgentinaLuz
		FelipeLamparas
		JeLuz
		HazIluminacion
		Osram
*/					

function CalcularPrecio () 
{
	var Cantidad= document.getElementById('Cantidad').value;
	var Marca= document.getElementById('Marca').value;

	var PorcentajeDescuento=0;
	var Precio = 35;
	var PrecioConDescuento;
	var IngresosBrutos;

 	if(Cantidad >= 6)
 	{
 		PorcentajeDescuento=50;
 	}
 	else
 	{
 		switch (Cantidad)
 		{
 			case "5":
 				//ver marca
 				if(Marca =='ArgentinaLuz')
 				{
 					PorcentajeDescuento=40;
 				}
 				else
 				{
 					PorcentajeDescuento=30;
 				}
 				break;

 			case "4":
 				//ver marca
 				if((Marca =='ArgentinaLuz') ||(Marca == 'FelipeLamparas'))
 				{
 					PorcentajeDescuento=25;
 				}
 				else
 				{
 					PorcentajeDescuento=20;
 				}
 				break;

 			case "3":
 				//ver marca
 				if(Marca =='ArgentinaLuz') 
 				{
 					PorcentajeDescuento=15;
 				}
 				else
 				{
 					if(Marca == 'FelipeLamparas')
 					{
 						PorcentajeDescuento=10;
 					}
 					else
 					{
 						PorcentajeDescuento=5;	
 					}
 					
 				} 				
 				break;
 			default:
 				console.log("Se me escapo del switch");
 		} // fin switch (Cantidad)

 	} // fin if(Cantidad > 6)



 	//Precio total de la compra sin descuentos
	Precio=Precio * Cantidad
	
	//Precio con descuento
	PrecioConDescuento= Precio - (Precio * PorcentajeDescuento / 100);
	
	if(PrecioConDescuento >120)
	{ // Sumo un 10% de Ingresos Brutos
		IngresosBrutos = PrecioConDescuento * 10 /100 ;
		PrecioConDescuento= PrecioConDescuento + IngresosBrutos;

		alert("Usted Tiene que pagar Ingresos Brutos de: " + IngresosBrutos + " , siendo 10% el impuesto que se pagó.");
	}

 	
 	document.getElementById('precioDescuento').value = PrecioConDescuento;
 	console.log("Descuento aplicado: " + PorcentajeDescuento);
}

/*
Enunciado:
Las lámparas están al mismo precio de $35 pesos final. 
A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 

B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y 
	si es de otra marca el descuento es del 30%. 

C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
	se hace un descuento del 25 % y si es de otra marca el descuento es del 20%. 

D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, 
	si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%. 

E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos
	 en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
*/
