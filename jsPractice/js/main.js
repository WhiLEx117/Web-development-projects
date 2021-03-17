function render(element) {
  return function (norm, ...dynamic) {
    let newContent = "";
    norm.forEach((value, index) => {
      const dynamicvalues = dynamic[index] ? dynamic[index] : "";
      newContent += value + dynamicvalues;
    });
    element.innerHTML = newContent;
  };
}
render(document.body)`8+10 = ${8 + 10}`;
