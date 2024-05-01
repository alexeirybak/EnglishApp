export const fetchSound = async (word) => {
  const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
  const response = await fetch(baseUrl + word);

  if (!response.ok) {
    throw new Error('Неизвестная ошибка');
  }

  const dataSound = await response.json();
  return dataSound;
};
