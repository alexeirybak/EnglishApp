export const handleValidateWordRu = (setWord, setErrorWord, event) => {
  const trimmedValue = event.target.value;
  setWord(trimmedValue);
  const validationWord = /^[a-zA-Z0-9\s-]*$/;
  if (!validationWord.test(trimmedValue)) {
    setErrorWord('Введите на латинице');
  } else {
    setErrorWord(null);
  }
};

export const handleValidateWordEn = (setWord, setErrorWord, event) => {
  const trimmedValue = event.target.value;
  setWord(trimmedValue);
  const validationWord = /^[а-яА-Я0-9\s-]*$/;
  if (!validationWord.test(trimmedValue)) {
    setErrorWord('Введите на кириллице');
  } else {
    setErrorWord(null);
  }
};
