const getAllLinks = () => {
  // // your code
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    console.log(link.attributes[0]);
  });
};

// Sample usage - do not modify
getAllLinks();
