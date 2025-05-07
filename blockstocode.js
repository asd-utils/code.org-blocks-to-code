if (location.href.match(/https:\/\/studio.code.org\/projects\/.*edit/g) !== null) {
  const toolbox = document.querySelector("#codeModeHeaders");
  if (toolbox === null) {
    window.addEventListener("DOMContentLoaded", () => {
      addListener("#codeModeHeaders").then(element => {
        codeOnly();
      })
    })
  } else {
    codeOnly();
  }
  function addListener(selector) {
    return new Promise(resolve => {
      const doc = document;
      if (doc.querySelector(selector)) {
        return resolve(doc.querySelector(selector));
      }
      const observer = new MutationObserver(mutations => {
        if (doc.querySelector(selector)) {
          resolve(doc.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(doc.body, {
        childList: true,
        subtree: true
      });
    });
  }
}
function codeOnly() {
  const showCode = document.querySelector("#show-code-header");
  const showBlock = document.querySelector("#hide-toolbox-icon");
  if (showBlock.style.display !== "none") {
    showBlock.click();
  }
  if (showCode.innerText !== "Show Blocks") {
    showCode.click();
  }
  showBlock.remove();
  document.querySelector("#show-toolbox-icon").remove();
  showCode.remove();
}
