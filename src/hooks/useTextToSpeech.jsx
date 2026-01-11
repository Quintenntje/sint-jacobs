export const useTextToSpeech = () => {
  const speak = (text) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    utterance.lang = "nl-NL";
  };

  return { speak };
};
