function calcular() {
	var p = parseFloat(document.getElementById('peso').value.replace(',','.'));
	var a = parseFloat(document.getElementById('altura').value.replace(',','.'));
	var imc = (p/(a * a)).toFixed(1);
	if(imc<18.5){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Baixo peso";
	}
	else if(imc>=18.5 && imc<=24.9){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Peso ideal";
	}
	else if(imc>=25 && imc<=29.9){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Sobrepeso";
	}
	else if(imc>=30 && imc<=34.9){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Obesidade grau 1";
	}
	else if(imc>=35 && imc<=40){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Obesidade grau 2";
	}
	else if(imc>40){
		document.getElementById("texto").innerHTML="Seu IMC é de: " + imc.replace('.',',') + " - Obesidade grau 3";
	}
}
