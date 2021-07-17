let timer = null;
export const setTextAfterTiemout = (text, setText, time) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    setText(text);
  }, time);
};

export const executor = (fn, time) => {
  clearTimeout(timer);
  timer = setTimeout(fn, time);
};

export const changeLastChar = (str, char) => {
  return str.substr(0, str.length - 1) + char;
};

export const changeLastEleOfArray = (arr, char) => {
  arr.pop();
  arr.push(char);
  return arr;
};
