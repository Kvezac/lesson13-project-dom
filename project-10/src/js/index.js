const getShortTextParagraphs = () => {
  // your code
  return [...document.querySelectorAll("p")].filter((el) => el.textContent.length <= 10);
};
// Sample usage - do not modify
console.log(getShortTextParagraphs());
