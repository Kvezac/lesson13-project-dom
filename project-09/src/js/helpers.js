/* helpers.js */
export const getSelectedCurrencies = () => {
	// your code
    const activeOunce =[]
    const currencies = document.querySelectorAll(".cards .active")
    currencies.forEach((currence) => activeOunce.push(currence.textContent))
    return activeOunce
}