const getNavbarElement = () => {
	// TODO: get the element with id navbar
  const navItem = document.querySelector("#navbar")
  return navItem
}

const getMainElement = () => {
	// TODO: get the element with id main
  const mainItem = document.querySelector("#main")
  return mainItem
}

const getAboutFromFooter = () => {
  // TODO: get the the about link that's in the footer
  const about = document.querySelector(`[href='about.html']`)
  return about
}

const getTheParagraphElement = () => {
  // TODO: get the paragraph in #main
  const mainP = document.querySelector("#main p")
  return mainP
}


// Sample usage - do not modify
console.log(getNavbarElement());;
console.log(getMainElement());;
console.log(getAboutFromFooter());;
console.log(getTheParagraphElement());;