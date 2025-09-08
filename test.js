const synnoname = ["hellow", "hi", "konniwochi"];

const createElement = (arr) => {
  const createHtmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
  console.log(createHtmlElements.join(""));
};

createElement(synnoname);
