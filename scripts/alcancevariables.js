/**********************************************************************/
/**********************************************************************/
/**********************************************************************/
/**
 * @author Ingeniero Jaime Alberto Gutiérrez Mejía
 * Universidad EAN
 * Facultad de Ingeniería
 * Programa de Ingeniería de Sistemas
 * Desarrollo Web
 * Unidad de Estudio:  Implementación de Scripting para páginas Web
 * con JavaScript
 
 * Archivo de Scripting JS para visualizar el alcance de las variables del
 * lenguaje
 */
/**********************************************************************/
/**********************************************************************/
/**********************************************************************/
	/*
	 * Variables a nivel de script
	 * Tienen alcance por todo el código de la aplicación,
	 * específicamente al interior de los Funciones (equivalentes a métodos) de 
	 * programación, responsables de la alteración de su estado
	 * */
	var numero1 = 0;
	var numero2 = 0;
	var resultado = 0;
	/****************************************/
	/****************************************/
	/****************************************/
	//Funciones (equivalentes a métodos) de lógica de la clase
	/*
	 * Funciones (equivalentes a métodos) que emplean las variables de instancia
	 * para la realización de cálculos.  Como se observa
	 * en el código, el IDE pinta las variables de color azul
	 * para indicar al compilar el alcance de estas, dentro
	 * de los Funciones (equivalentes a métodos)
	 * */
	function calcularSuma ()
	{
		resultado = numero1 + numero2;
		return (resultado);
	}
	/****************************************/
	/****************************************/
	/****************************************/
	function imprimirResultado (mensaje, valor)
	{
		resultado = valor;
		alert (mensaje + resultado);
	}
	/****************************************/
	/****************************************/
	/****************************************/
	/*
	 * Funciones (equivalentes a métodos) que emplean variables con alcance solo
	 * local a dichos Funciones (equivalentes a métodos).  A diferencia de los Funciones (equivalentes a métodos)
	 * anteriores, como se observa acá, en el momento de
	 * declarar una variable de tipo entero, local al método
	 * calcularProducto y calcularCociente, esto hace que el IDE la coloque
	 * de color negro, indicándole con ello a compilador, de que
	 * a pesar de llamarse igual al atributo de la clase, esta 
	 * variable solo tiene alcance local en el método y solo
	 * va a ser utilizada en el procesamiento algorítmico del mismo
	 * */
	function calcularProducto (n1,n2)
	{
		var resultado = 0;
		resultado = n1 * n2;
		return (resultado);
	}
	/****************************************/
	/****************************************/
	/****************************************/
	function calcularPotencia (n1,n2)
	{
		var resultado = 0;
		resultado = Math.pow(n1,n2);
		return (resultado);
	}
	/****************************************/
	/****************************************/
	/****************************************/
	/*
	 *   En los siguientes Funciones (equivalentes a métodos), observaremos
	 *   la declaración de variables con alcance únicamente
	 *   en instrucciones.  Esto significa, que una vez
	 *   la variable ha sido utilizada, no puede ser invocada
	 *   en otros sectores del código donde la variable
	 *   no es visible
	 * */
	function calcularPromedioNotas (numero_notas)
	{
		//Alcance de la variable solo dentro de un ciclo para
		var promedio = 0.0;
		var nota = 0.0;
		
		for (var i = 0;  i < numero_notas;  i++)
		{
			nota = parseInt(window.prompt("Ingrese el valor de la nota: ",""));
			promedio = promedio + nota;
		}
		
		//Esta instrucción no podría ejecutarse, puesto que la variable i
		//tiene alcance solo en el for
		//window.alert("Valor del contadori i: " + i);
		
		//En cambio, promedio como tiene alcance en el método
		//si puede ser accesada fuera del for, pero no antes de
		//su declaración
		promedio = promedio/numero_notas;
		window.alert("Promedio de notas: " + promedio);
	}
	/****************************************/
	/****************************************/
	/****************************************/
	function imprimirMatrizNumerosPares (limite)
	{
		var numero = 0;
		
	    for (var i = 0;  i < limite;  i++)
	    {
	    	for (var j = 0;  j < limite;  j++)
	    	{
	    		//Acá podemos imprimir la variable i si queremos
	    		
	    		if (numero % 2 == 0)
	    		{
	    			window.alert("Valor de la matriz en la posición en [" + i + "][" + j + "]:" + numero);
	    		}

	    		numero++;
	    	}//Fin del for interno
	    	
	    	//Pero si quisiéramos imprimir el valor de j en este punto
	    	//no podríamos porque el alcance de esa variable solo
	    	//se encuentra en el for interno
	    	//System.out.println ("Valor actual de j: " + j);
	    }//Fin del for externo
	}
	/****************************************/
	/****************************************/
	/****************************************/
	function darBienvenida()
	{
		alert ("Bienvenido al Demo de Implementación del uso de variables en funciones de JavaScript (Scope - Alcance)");
	}
	/****************************************/
	/****************************************/
	/****************************************/
	function calcularExpresiones()
	{
		//***********************************************************************
		//***********************************************************************
		//Obtenemos los datos de los controles (input texts) del formulario
		var resultado = 0;
		numero1 = parseInt(document.getElementById("numero1").value);
		numero2 = parseInt(document.getElementById("numero2").value);
		//***********************************************************************
		//***********************************************************************
		//Uso de la función sin parámetros
		alert ("Probando la función sin parámetros: calcularSuma()");
		resultado = calcularSuma();
		document.getElementById("resultado1").value = resultado;
		imprimirResultado("Resultado de la suma: ",resultado);
		//***********************************************************************
		//***********************************************************************
		//Función con parámetros
		resultado = calcularProducto(numero1,numero2);
		alert ("Probando la función con parámetros: calcularProducto(numero1,numero2)");
		document.getElementById("resultado2").value = resultado;
		imprimirResultado("Resultado del producto: ",resultado);
		//***********************************************************************
		//***********************************************************************
		resultado = calcularPotencia(numero1,numero2);
		alert ("Probando la función con parámetros: calcularPotencia(numero1,numero2)");
		document.getElementById("resultado3").value = resultado;
		imprimirResultado("Resultado de la potencia: ",resultado);
	}
	/****************************************/
	/****************************************/
	/****************************************/
