const api = 'dict.1.1.20240426T151028Z.29d9c538de798bc2.e602e04f7b9bc6ccf2b77000b852b81701ee579f';

export const fetchTranslation = async (word, language) => {
  if (!word.trim()) {
    throw new Error('Поле ввода не может быть пустым');
  }

  const baseUrl = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${api}&lang=${language}&text=`;
  const response = await fetch(baseUrl + word);

  if (!response.ok) {
    if (response.status === 400) {
      throw new Error('Неверный запрос к API Яндекс.Словаря');
    } else {
      throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
    }
  }

  const data = await response.json();
  return data;
};
