const capitalize = (word) => {
  let string = word.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substr(1);
};

export { capitalize };