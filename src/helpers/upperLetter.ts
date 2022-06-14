export function upperLetter(word: string) {
	return word.slice(0, 1).toUpperCase() + word.slice(1)
}
console.log(upperLetter('ramil'))