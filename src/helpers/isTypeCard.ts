export const getTypeCard = (cardNumber: string) => {
	if(cardNumber.startsWith('2')) {
		return 'MIR'
	} else if(cardNumber.startsWith('4')) {
		return 'Visa'
	} else if(cardNumber.startsWith('5')){
		return 'Mastercard'
	} else {
		return ''
	}
}