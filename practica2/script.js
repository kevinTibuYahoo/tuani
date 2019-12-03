var calculadora = (function(){
	var 
		num1, num2, result,
		capturar = function(){
			num1 = $("#op1").val();
			num2 = $("#op2").val();

			result = $("#resultado");
		},

		sumar = function(){
			try{
				capturar();

				result.html(parseFloat(num1) + parseFloat(num2));

			}catch(error){
				alert("Error");
			}
		},
		restar = function(){
			try{
				capturar();

				result.html(parseFloat(num1) - parseFloat(num2));
			}catch(error){
				alert("Error");
			}
		},
		multiplicar = function(){
			try{
				capturar();

				result.html(parseFloat(num1) * parseFloat(num2));
			}catch(error){
				alert("Error");
			}
		},
		division = function(){
			try{
				capturar();

				if (num2 == "0") {
					alert("Division por 0");
				}else
					result.html(parseFloat(num1) / parseFloat(num2));
				
			}catch(error){
				alert("Error");
			}
		},

		inicializar = function(){
			$("#sum").click(sumar);
			$("#mul").click(multiplicar);
			$("#res").click(restar);
			$("#div").click(division);
		};

	return{
		inicializar: inicializar
		// sum: sumar,
		// restar: restar,
		// division: division,
		// multiplicar: multiplicar
	}

})();

$( document ).ready(calculadora.inicializar);