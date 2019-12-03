
// Descripcion: Esta funcion muestra el autor del script
// Fecha: 16/11/19

//Encapsulamiento, no se modificaran variables dentro de esta funcion y
//modularidad
var myScript = (function (){

	var autor = "Kali Tibu", 
		year = 2019,

		whoMakeThis = function(){
			alert("Lo hizo "+autor);
		},

		whatYear = function(){
			alert("Year: "+year);
		},

		//Con este method se lograra cambiar el valor del author
		setAuthor = function(nuevo){
			autor = nuevo;
		};

	return{
		quien: whoMakeThis,
		time: whatYear,
		setAuthor: setAuthor
	}
})();