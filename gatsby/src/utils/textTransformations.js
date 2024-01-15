const addNbspBeforeExclamation = (text) => {
  return text.replace(/(\w)!(\s|$)/g, "$1&nbsp;!$2");
};

module.exports = { addNbspBeforeExclamation };
