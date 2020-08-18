//Variaveis
const div = document.querySelector('#valorFinal')
const div2 = document.querySelector('#valorFinal2')
const binario = document.querySelector('#binario')
const decimal = document.querySelector('#decimal')


//Objetos
const DecimalForBi = {
	convertNumber(value) {
		if (div != '') {
			div.innerText = 'Binário : ' + value.toString(2)
			div.classList = 'alert alert-info'
		}
	}
}


const BiForDecimal = {
	convertNumber(value) {
		var binary = value
		var digit = parseInt(value, 2)
		div2.innerText = 'Decimal : ' + digit
		div2.classList = 'alert alert-info' 
	}
}


//Funções
const DecimalToBi = () => {
	if (isNaN(binario.value)) {
		alert('Campo precisa ser númerico')
		binario.value = ''
	} else {
		const convertBinario = parseInt(binario.value)
		console.log(convertBinario)
		DecimalForBi.convertNumber(convertBinario)
	}
}

const BiToDecimal = () => {

	if (isNaN(decimal.value)) {
		alert('Campo precisa ser númerico')
		decimal.value = ''
	} else {
		BiForDecimal.convertNumber(decimal.value)
	}


}


const limparDados = () => {
	binario.value = ''
	decimal.value = ''
}