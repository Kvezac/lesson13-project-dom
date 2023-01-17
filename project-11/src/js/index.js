/**
 * @param {string} name
 */
const setWelcomeMessage = name => {
	// your code    "Hello, {name}!"
    const element = document.querySelector("#welcome-message")
    element.insertAdjacentHTML("beforeend", `<strong>Hello, ${name}</strong>`)
}


// Sample usage - do not modify
setTimeout(setWelcomeMessage("Sam"), 3000);