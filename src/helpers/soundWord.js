export const playAudio = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.75;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
};
